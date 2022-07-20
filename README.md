# eclf-utils

## 关于 eclf

目前常见的 WEB 日志格式主要由两类，一类是 Apache 的 NCSA 日志格式，另一类是 IIS 的 W3C 日志格式。NCSA 格式又分为 NCSA 普通日志格式（CLF）和 NCSA 扩展日志格式（ECLF）两类，目前最常用的是 NCSA 扩展日志格式（ECLF）及基于自定义类型的 Apache 日志格式；本项目是读写 eclf 的工具。


## 安装
```bash
npm install eclf-utils
```

## 使用

```js
import { parse } from "eclf-utils";

console.log(
  parse(
    '113.108.77.65 - - [24/Jun/2021:12:05:15 +0800] "GET / HTTP/1.1" 200 465 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54"'
  )
);
```

输出如下:

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
