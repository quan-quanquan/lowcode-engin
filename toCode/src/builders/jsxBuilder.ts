import * as t from '@babel/types'

export function buildJsx (ctx, node) {
  const open = t.jSXOpeningElement(
    t.jSXIdentifier(node.componentName || 'div'),
    []
  )
  if (!ctx.children || !ctx.children.length) {
    open.selfClosing = true
    return t.jSXElement(open, null, [])
  }
  const close = t.jSXClosingElement(
    t.jSXIdentifier(node.componentName || 'div')
  )
  return t.jSXElement(open, close, ctx.children)
}