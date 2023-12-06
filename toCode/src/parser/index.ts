import schema from '../schema/base.json'
import { buildJSX, buildJSXAttribute } from '../builders'
import { traverse } from '../utils'

const ctx = traverse(schema, {
  nodeTree: buildJSX,
  feature: {
    props: [ buildJSXAttribute ]
  }
})
// console.log(ctx.ast)
export default ctx.nodeTree