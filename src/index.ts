/**
 * * ---------------------------------------------
 * Entry point for single bundle distributive. JS will be transpiled to es5 spec
 * ---------------------------------------------
 * POLYFILLS
 * ---------------------------------------------
 * Imports polyfill for Webcomponents api
 * All ES features will be adding by Babel plugin (see rollup config)
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import '@webcomponents/webcomponentsjs/webcomponents-bundle'

export * from './registry/folder-tree.component';
export * from './registry/description.component';
