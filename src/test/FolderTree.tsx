import { Fragment, h } from 'preact';
import register from 'preact-custom-element';
// import {useState, useCallback} from 'preact/hooks';
import * as styles from './FolderTree.css';

export function FolderTree(props) {
    // const [value, setValue] = useState(true);
    // const isOpened = useCallback(() => {
    //     setValue(!value);
    // }, [value]);

    return (
        <Fragment>
            <style>
                {styles.css}
            </style>
            <div class="container">
                <span class="arrow">↕</span>
                {props.children}
                <h2>{props.name}</h2>
            </div>
        </Fragment>
    );
}

register(FolderTree, 'mw-info-block', [], {shadow: true});
