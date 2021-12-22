/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './Description.scss';

export function Description(props) {
    const [value, setValue] = useState(true);
    const isOpened = useCallback(() => {
        setValue(!value);
        console.log(value)
    }, [value]);

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div class="container">
                <h1>DESCRIPTION</h1>
                <h2>{props.name}</h2>
            </div>
        </Fragment>
    );
}
