import { capitalizeString } from "./string_function";

const cap = capitalizeString('hello!');

console.log(cap); // Hello

const capitalizeString = (str) => {
  return str.CharAt(0).toUpperCase() + str.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";