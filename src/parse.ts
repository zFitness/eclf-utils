import { Log } from "./type";

const escape = (d: string) => {
  return d.replace("[", "\\[").replace("]", "\\]");
};

const parseRequest = (field: string) => {
  if (!field) return null;
  const matches = field.match(/([A-Z]+)\s+(\S+)\s+([A-Z]+\/[\d\.]+)/);
  if (matches) {
    return {
      method: matches[1],
      resource: matches[2],
      protocol: matches[3],
    };
  }
  return null;
};

export function parse(line: string): Log {
  const ret: Log = {
    remotehost: null,
    ident: null,
    authuser: null,
    date: null,
    request: null,
    status: null,
    bytes: null,
    referrer: null,
    agent: null,
  };
  const attrDelimiter: Record<keyof Log, string> = {
    remotehost: " ",
    ident: " ",
    authuser: " [",
    date: "] ",
    request: '" ',
    status: " ",
    bytes: " ",
    referrer: ' "',
    agent: '" "',
  };
  Object.keys(ret).forEach((key: keyof Log) => {
    const delimiter = attrDelimiter[key];
    let field: string;
    let reg = line.match(escape(delimiter));
    if (reg === null) {
      reg = line.match(escape(delimiter.slice(0, 1)));

      if (reg === null) {
        field = line;
      } else {
        field = line.substring(0, reg.index);
      }
      if (key !== "request") {
        ret[key] = field;
      } else {
        ret.request = parseRequest(field);
      }
    }

    field = line.substring(0, reg.index);
    field = field === "-" ? null : field;
    line = line.substring(reg.index + delimiter.length);

    if (key === "request") {
      ret.request = parseRequest(field);
    } else {
      ret[key] = field;
    }
  });

  return ret;
}
