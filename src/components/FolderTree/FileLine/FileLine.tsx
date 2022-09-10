/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './FileLine.scss';
import '../../../registry/icons/unknown-file-icon.component'
import '../../../registry/icons/ts-file-icon.component'
import '../../../registry/icons/scss-file-icon.component'
import '../../../registry/icons/css-file-icon.component'
import '../../../registry/icons/md-file-icon.component'
import '../../../registry/icons/html-file-icon.component'
import '../../../registry/icons/json-file-icon.component'
import '../../../registry/icons/js-file-icon.component'
import '../../../registry/icons/tsx-file-icon.component'

export function FileLine(props: {
    onClick?: (id: string) => void,
    name: string,
    extension: string,
}) {
    const onLineClick = useCallback(() => {
        props.onClick(props.name);
    }, []);

    function getIconByExtension(ext: string) {
        switch (ext) {
            case '.tsx': {
                return <mad-tsx-file-icon size={16}/>;
            }
            case '.ts': {
                return <mad-ts-file-icon size={16}/>;
            }
            case '.css': {
                return <mad-css-file-icon size={16}/>;
            }
            case '.scss': {
                return <mad-scss-file-icon size={16}/>;
            }
            case '.html': {
                return <mad-html-file-icon size={16}/>;
            }
            case '.js': {
                return <mad-js-file-icon size={16}/>;
            }
            case '.json': {
                return <mad-json-file-icon size={16}/>;
            }
            case '.md': {
                return <mad-md-file-icon size={16}/>;
            }
            default: {
                return <mad-unknown-file-icon size={16}/>;
            }
        }
    }

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div class="file-container" onClick={onLineClick}>
                {getIconByExtension(props.extension)} {props.name}
            </div>
        </Fragment>
    );
}
