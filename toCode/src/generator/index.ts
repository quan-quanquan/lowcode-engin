import generator from "@babel/generator";
import testAst from '../parser'
import { format } from "../utils";

export async function generatorCode(ast) {
  let code = generator(ast).code
  code = await format(code)
  console.log(code)
  return code
}
generatorCode(testAst)