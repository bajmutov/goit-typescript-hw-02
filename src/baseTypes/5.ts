/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;

//1 спосіб
let literal: "enable" | "disable";

//2 спосіб
// type isEnableOrDisable = "yes" | "no";
// let literal: isEnableOrDisable;
