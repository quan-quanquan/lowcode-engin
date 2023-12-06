import * as t from '@babel/types'
import { isString } from '../utils'

function buildLiteralAttr(key, value) {
  return t.jSXAttribute(t.jsxIdentifier(key), t.stringLiteral(value))
}

export function buildJSXAttribute (ctx, node, key) {
  const props = node[key]
  const jsxAttr = []
  for (const key in props) {
    if (isString(props[key]) && props[key]) {
      jsxAttr.push(buildLiteralAttr(key, props[key]))
    }
  }
  ctx.setFeature('jsxAttr', jsxAttr) 
}

export function buildJSX (ctx, node) {
  const open = t.jSXOpeningElement(
    t.jSXIdentifier(node.componentName || 'div'),
    ctx.features.jsxAttr
  )
  if (!ctx.children || !ctx.children.length) {
    open.selfClosing = true
    ctx.setNodeTree(t.jSXElement(open, null, [])) 
  }
  const close = t.jSXClosingElement(
    t.jSXIdentifier(node.componentName || 'div')
  )
  ctx.setNodeTree(t.jSXElement(open, close, ctx.children))
}