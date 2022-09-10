/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './FolderLine.scss';
import '../../../registry/icons/folder-icon.component'

export function FolderLine(props: {
    onClick: (id: string) => void,
    name: string,
    children?: JSX.Element[] | JSX.Element,
    isOpened?: boolean,
}) {
    const onLineClick = useCallback(() => {
        props.onClick(props.name);
    }, []);

    const hasChildren = (children: JSX.Element[] | JSX.Element) => {
        return !children || (Array.isArray(children) && children.length > 0);
    }

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div class="folder-line" onClick={onLineClick}>
                {
                    hasChildren(props.children) ?
                        props.isOpened ? <span className="gg-chevron-down"/> : <span className="gg-chevron-right"/>
                        : <span className="spacer"/>
                }
                <mad-folder-icon size={18}/>
                <span>{props.name}</span>
            </div>
            <div className="files">
                {props.isOpened ? props.children : null}
            </div>
        </Fragment>
    );
}
