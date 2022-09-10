/** @jsx h */
import { Fragment, h } from 'preact';
import { AbstractIcon } from './AbstractIcon';

export function UnknownFileIcon(props: {size?: number}) {
    return (
        <Fragment>
            <AbstractIcon size={props.size}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="none" fill-rule="evenodd">
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="7 1 3 5 7 5"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="8 1 8 6 3 6 3 15 13 15 13 1"/>
                        <path fill="#231F20" fill-opacity=".7" d="M5,12 L9,12 L9,11 L5,11 L5,12 Z M5,10 L11,10 L11,9 L5,9 L5,10 Z M5,8 L11,8 L11,7 L5,7 L5,8 Z"/>
                    </g>
                </svg>
            </AbstractIcon>
        </Fragment>
    );
}
