!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ECLF={})}(this,(function(e){"use strict";const t=e=>e.replace("[","\\[").replace("]","\\]"),n=e=>{if(!e)return null;const t=e.match(/([A-Z]+)\s+(\S+)\s+([A-Z]+\/[\d\.]+)/);return t?{method:t[1],resource:t[2],protocol:t[3]}:null};e.parse=function(e){const u={remotehost:null,ident:null,authuser:null,date:null,request:null,status:null,bytes:null,referrer:null,agent:null},l={remotehost:" ",ident:" ",authuser:" [",date:"] ",request:'" ',status:" ",bytes:" ",referrer:' "',agent:'" "'};return Object.keys(u).forEach((s=>{const r=l[s];let o,i=e.match(t(r));null===i&&(i=e.match(t(r.slice(0,1))),o=null===i?e:e.substring(0,i.index),"request"!==s?u[s]=o:u.request=n(o)),o=e.substring(0,i.index),o="-"===o?null:o,e=e.substring(i.index+r.length),"request"===s?u.request=n(o):u[s]=o})),u},Object.defineProperty(e,"__esModule",{value:!0})}));
