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
    if (!this.dir) {
      await fsPromises.mkdir('dist', {recursive: true})
      .then((path) => {
        this.dir = path
      }) 
    }
    fsPromises.writeFile(path.join(this.dir, file), suorce)
  }
  removeDir(dir) {
    let files = fsPromises.readdirSync(dir)
    for(var i=0;i<files.length;i++){
      let newPath = path.join(dir,files[i]);
      let stat = fsPromises.statSync(newPath)
      if(stat.isDirectory()){
        //如果是文件夹就递归下去
        this.removeDir(newPath);
      }else {
       //删除文件
        fsPromises.unlinkSync(newPath);
      }
    }
    fsPromises.rmdirSync(dir)//如果文件夹是空的，就将自己删除掉
  }
}