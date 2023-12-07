import { buildJSX, buildJSXAttribute, buildComponent } from './builders'
import { traverse } from '../utils'
export default class Parser {
  builder
  constructor(builder) {
    this.builder = builder
    this.builder.hooks.parse.tap('parse', (schema) => {
      this.parse(schema)
    })
  }
  parse(schema) {
    return traverse(this.builder, schema, {
      node: [buildComponent, buildJSX],
      feature: {
        props: [ buildJSXAttribute ]
      }
    })
  }
} 