import {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} from 'tapable'
import schema from '../schema/base.json'
import Parser from '../parser'
import Generator from '../generator'
import FileSystem from '../fileSystem'

export class Builder {
  public readonly hooks = {
    parse: new SyncHook(['schema']),
    generate: new SyncHook(['ast']),
    emit: new SyncHook<[string, string]>(['file','suorce'])
  }
  parser
  generator
  fileSystem
  install() {
    this.parser = new Parser(this)
    this.generator = new Generator(this)
    this.fileSystem = new FileSystem(this)
  }

  build() {
    this.hooks.parse.call(schema)
  }
}

const builder = new Builder()
builder.install()
builder.build()