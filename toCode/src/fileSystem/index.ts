const fsPromises = require('fs').promises
const path = require('path')

export default class FileSystem {
  dir
  builder
  constructor(builder) {
    this.builder = builder
    this.builder.hooks.emit.tap('generateFile', (file, suorce) => {
      this.generateFile(file, suorce)
    })
  }
  async generateFile(file, suorce) {
    const dir = path.join(__dirname, 'dist')
    if (!this.dir) {
      await fsPromises.mkdir('dist', {recursive: true})
      .then((path) => {
        this.dir = path
      }) 
    }
    fsPromises.writeFile(path.join(this.dir, file), suorce)
  }
}