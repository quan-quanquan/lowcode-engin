import * as t from '@babel/types'

export function buildJsx (node: any) {
  const open = t.jSXOpeningElement(
    t.jSXIdentifier(node.componentName),
    []
  )
  if (!node.children) {
    open.selfClosing = true
    return t.jSXElement(open, null, [])
  }
  const children:any = []
  for (let i = 0; i < node.children.length; i++) {
    children.push(buildJsx(node.children[i]))
  }
  const close = t.jSXClosingElement(
    t.jSXIdentifier(node.componentName)
  )
  return t.jSXElement(open, close, children)
}