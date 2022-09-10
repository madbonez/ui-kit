import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'mad-unknown-file-icon': AbstractIcon | {};
            'mad-tsx-file-icon': AbstractIcon | {};
            'mad-scss-file-icon': AbstractIcon | {};
            'mad-md-file-icon': AbstractIcon | {};
            'mad-json-file-icon': AbstractIcon | {};
            'mad-js-file-icon': AbstractIcon | {};
            'mad-html-file-icon': AbstractIcon | {};
            'mad-folder-icon': AbstractIcon | {};
            'mad-css-file-icon': AbstractIcon | {};
            'mad-ts-file-icon': AbstractIcon | {};
        }
    }
}


declare module 'preact/src/jsx' {
    namespace JSXInternal {
        interface IntrinsicElements {
            'mad-unknown-file-icon': AbstractIcon | {};
            'mad-tsx-file-icon': AbstractIcon | {};
            'mad-scss-file-icon': AbstractIcon | {};
            'mad-md-file-icon': AbstractIcon | {};
            'mad-json-file-icon': AbstractIcon | {};
            'mad-js-file-icon': AbstractIcon | {};
            'mad-html-file-icon': AbstractIcon | {};
            'mad-folder-icon': AbstractIcon | {};
            'mad-css-file-icon': AbstractIcon | {};
            'mad-ts-file-icon': AbstractIcon | {};
        }
    }
}

declare interface AbstractIcon extends HTMLElement {
    size?: number;
}
