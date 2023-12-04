import schema from '../schema/base.json'
import { buildJsx } from '../builders'

const pages = []

for (let i = 0; i < schema.componentsTree.length; i++) {
  pages.push(buildJsx(schema.componentsTree[i]))
}


export default pages[0]