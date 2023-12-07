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

export class Builder {
  public readonly hooks = {
    parse: new SyncHook(['schema']),
    generate: new SyncHook(['ast']),
    emit: new SyncHook(['module'])
  }
  parser
  generator
  install() {
    this.parser = new Parser(this)
    this.generator = new Generator(this)
  }

  build() {
    this.hooks.parse.call(schema)
  }
}

const builder = new Builder()
builder.install()
builder.build()