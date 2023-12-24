import generator from "@babel/generator";
import { format } from "../utils";

export default class Generator {
  builder
  constructor(builder) {
    this.builder = builder
    this.builder.hooks.generate.tap('generate', async (ast) => {
      const code = await this.generate(ast)
      this.builder.hooks.emit.call('test.jsx', code)
    })
  }
  async generate(ast) {
    let code = generator(ast).code
    code = await format(code)
    console.log(code)
    return code
  }
}