export { default as isRequired } from "./isRequired"
export { default as isLength } from "./isLength"
export { default as isEmail } from "./isEmail"

export interface Rule {
  name: string
  value: any
  params?: {
    [x: string]: any
  }
}
