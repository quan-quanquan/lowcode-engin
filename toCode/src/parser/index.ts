import schema from '../schema/base.json'
import { buildJsx } from '../builders'
import { traverse } from '../utils'

const ctx = traverse(schema, {
  nodeTree: buildJsx,
  feature: {}
})
// console.log(ctx.ast)
export default ctx.ast