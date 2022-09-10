/** @jsx h */
import { Fragment, h } from 'preact';
import { AbstractIcon } from './AbstractIcon';

export function HtmlFileIcon(props: {size?: number}) {
    return (
        <Fragment>
            <AbstractIcon size={props.size}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="none" fill-rule="evenodd">
                        <polygon fill="#62B543" fill-opacity=".7" points="1 16 16 16 16 9 1 9"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="7 1 3 5 7 5"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="8 1 8 6 3 6 3 8 13 8 13 1"/>
                        <polygon fill="#231F20" fill-opacity=".7" points="0 0 1 0 1 2 3 2 3 0 4 0 4 5 3 5 3 3 1 3 1 5 0 5" transform="translate(3 10)"/>
                    </g>
                </svg>

            </AbstractIcon>
        </Fragment>
    );
}
