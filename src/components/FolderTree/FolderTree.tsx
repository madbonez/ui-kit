/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './FolderTree.scss';

export function FolderTree(props) {
    const [value, setValue] = useState(true);
    const isOpened = useCallback(() => {
        setValue(!value);
        console.log(value)
    }, [value]);

    console.log([...[1, 2, 3]])
    console.log([...[1, 2, 3]].fill(123))

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div class="container">
                <span class="arrow" onClick={isOpened}>↕</span>
                <h1>{JSON.stringify(value)}</h1>
                {props.children}
                <h2>{props.name}</h2>
                NBARAMALNO
                SPATb IDI
            </div>
        </Fragment>
    );
}
