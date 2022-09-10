/** @jsx h */
import { Fragment, h } from 'preact';
import { ExpandedCodePanel } from '../components/ExpandedCodePanel/ExpandedCodePanel';

export default {
    title: 'Example/ExpandedCodePanel',
    component: ExpandedCodePanel,
    argTypes: {
        lang: {control: 'text'},
        whiteControls: {control: 'boolean'},
        height: {control: 'number'},
        header: {control: 'text'}
    },
};

const Template = (args) => <Fragment>
    <ExpandedCodePanel {...args}>
        {args.codeSnippet}
    </ExpandedCodePanel>
</Fragment>;

export const Primary = Template.bind({});
Primary.args = {
    lang: 'js',
    whiteControls: true,
    header: 'test.component.ts',
    codeSnippet: `'use strict';
/**
 * Origin repo https://github.com/mihneadb/node-directory-tree
 */

const FS = require('fs');
const PATH = require('path');
const constants = {
    DIRECTORY: 'directory',
    FILE: 'file'
}

function safeReadDirSync (path) {
    let dirData = {};
    try {
        dirData = FS.readdirSync(path);
    } catch(ex) {
        if (ex.code == "EACCES" || ex.code == "EPERM") {
            //User does not have permissions, ignore directory
            return null;
        }
        else throw ex;
    }
    return dirData;
}

/**
 * Normalizes windows style paths by replacing double backslahes with single forward slahes (unix style).
 * @param  {string} path
 * @return {string}
 */
function normalizePath(path) {
    return path.replace(/\\\\/g, '/');
}

/**
 * Tests if the supplied parameter is of type RegExp
 * @param  {any}  regExp
 * @return {Boolean}
 */
function isRegExp(regExp) {
    return typeof regExp === "object" && regExp.constructor == RegExp;
}

/**
 * Collects the files and folders for a directory path into an Object, subject
 * to the options supplied, and invoking optional
 * @param  {String} path
 * @param  {Object} options
 * @param  {function} onEachFile
 * @param  {function} onEachDirectory
 * @return {Object}
 */
function directoryTree (path, options, onEachFile, onEachDirectory, level = 0) {
...
`
};
