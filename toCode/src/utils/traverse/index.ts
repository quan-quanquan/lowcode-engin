import {TraversalContext} from './context'

function call(hook) {
  // console.log(hook)
}

export function traverse(builder, node, builders) {
  const ctx = new TraversalContext(builder, node, builders)
  call('enter')
  if (node.children && node.children.length) {
    node.children.forEach(child => {
      const childCtx = traverse(builder, child, builders)
      ctx.setChild(childCtx.nodeTree)
    })
  }
  ctx.buildSelf()
  call('exit')
  return ctx
}