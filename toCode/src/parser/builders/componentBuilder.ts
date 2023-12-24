import { buildDefaultImport } from '.'
import * as t from '@babel/types'
import template from "@babel/template";

export function buildComponent(ctx, node) {
  if (node.type === "container") {
    const componentDeclaration = template(`
      function ${node.componentName} (props) {
        return %%NODE_TREE%%
      }
    `)({
      NODE_TREE: t.jSXFragment(t.jSXOpeningFragment(), t.jsxClosingFragment(), ctx.children) 
    })

    // 组件化
    ctx.clearChildren()
    const componentAst = t.program(
      [
        buildDefaultImport('React', 'react'),
        t.exportNamedDeclaration(componentDeclaration)
      ], 
      [], 
      "module"
    )

    ctx.generateComponent(componentAst)
  }
}