import schema from '../schema/base.json'
import { buildJSX, buildJSXAttribute, buildComponent } from '../builders'
import { traverse } from '../utils'

const ctx = traverse(schema, {
  node: [buildComponent, buildJSX],
  feature: {
    props: [ buildJSXAttribute ]
  }
})
// console.log(ctx.ast)
export default ctx.nodeTree