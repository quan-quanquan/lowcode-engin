import { traverse } from "."
export class TraversalContext {
  children = []
  components = []
  node
  builders
  ast
  

  constructor(node, builders) {
    this.node = node
    this.builders = builders
  }

  setFeature(key, featureAst) {
  }

  setChild(childAst) {
    this.children.push(childAst)
  }

  buildSelf() {
    const { builders, node } = this
    for (const key in builders.feature) {
      const feature = builders[key](this, node, key)
      this.setFeature(key, feature)
    }
    const nodeTree = builders.nodeTree(this, node)
    this.ast = nodeTree
  }
}