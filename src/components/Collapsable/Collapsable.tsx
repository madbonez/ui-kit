/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './Collapseble.scss';

export function Collapsable(props) {
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
                collapsable
            </div>
        </Fragment>
    );
}
