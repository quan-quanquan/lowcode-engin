import template from "@babel/template";
import * as t from '@babel/types'

export function buildSpecifierImport (specifiers, source) {
  return template(`
    import { ${specifiers.join(',')} } from '${source}'
  `)()
}

export function buildDefaultImport (defaultSpecifier, source) {
  return template(`
    import ${defaultSpecifier} from '${source}'
  `)()
}

export function buildNamespaceImport (namespaceSpecifier, source) {
  return template(`
    import * as ${namespaceSpecifier} from '${source}'
  `)()
}