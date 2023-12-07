import generator from "@babel/generator";
import { format } from "../utils";

export default class Generator {
  builder
  constructor(builder) {
    this.builder = builder
    this.builder.hooks.generate.tap('generate', (ast) => {
      this.generate(ast)
    })
  }
  async generate(ast) {
    let code = generator(ast).code
    code = await format(code)
    console.log(code)
    return code
  }
}