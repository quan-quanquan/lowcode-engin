import generate from "@babel/generator"
export class TraversalContext {
  children = []
  components = []
  node
  builders
  nodeTree
  features = {}
  ast

  constructor(node, builders) {
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
    console.log(generate(componentAst).code)
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