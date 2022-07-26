# eclf-utils

<div align="center">

English | [简体中文](./README-zh_CN.md)

</div>

## About eclf

At present, the common WEB log format is mainly divided into two types, one is Apache's NCSA log format, and the other is IIS's W3C log format. NCSA format is divided into NCSA General Log format (CLF) and NCSA extended Log format (ECLF). At present, the most commonly used are NCSA extended Log format (ECLF) and Apache log format based on custom types. This project is a tool for reading and writing eclf.


## Install
```bash
npm install eclf-utils
```

## Usage

```js
import { parse } from "eclf-utils";

console.log(
  parse(
    '113.108.77.65 - - [24/Jun/2021:12:05:15 +0800] "GET / HTTP/1.1" 200 465 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54"'
  )
);
```

log:

```js
{
      remotehost: '113.108.77.65',
      ident: null,
      authuser: null,
      date: '24/Jun/2021:12:05:15 +0800',
      request: { method: 'GET', resource: '/', protocol: 'HTTP/1.1' },
      status: '200',
      bytes: '465',
      referrer: '"-"',
      agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54'
    }

```
