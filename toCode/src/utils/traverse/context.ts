export class TraversalContext {
  children = []
  node
  builder
  builders
  nodeTree
  features = {}
  ast

  constructor(builder, node, builders) {
    this.builder = builder
    this.node = node
    this.builders = builders
  }

  setFeature(key, featureAst) {
    this.features[key] = featureAst
  }

  setChild(childAst) {
    this.children.push(childAst)
  }

  clearChildren() {
    this.children = []
  }

  setNodeTree(treeAst) {
    this.nodeTree = treeAst
  }

  generateComponent(componentAst) {
    this.builder.hooks.generate.call(componentAst)
  }

  buildSelf() {
    const { builders, node } = this
    for (const key in builders.feature) {
      builders.feature[key].forEach(builder => {
        builder(this, node, key)
      })
    }
    builders.node.forEach(builder => {
      builder(this, node)
    })
  }
}