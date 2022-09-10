/** @jsx h */
import { Fragment, h } from 'preact';
import { AbstractIcon } from './AbstractIcon';

export function MdFileIcon(props: {size?: number}) {
    return (
        <Fragment>
            <AbstractIcon size={props.size}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="none" fill-rule="evenodd">
                        <polygon fill="#40B6E0" fill-opacity=".7" points="1 16 16 16 16 9 1 9"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="7 1 3 5 7 5"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="8 1 8 6 3 6 3 8 13 8 13 1"/>
                        <polygon fill="#231F20" fill-opacity=".7" points="0 0 .936 0 2.5 2 3.979 0 5 0 5 5 4 5 4 1.7 2.5 3.5 1 1.7 1 5 0 5" transform="translate(2 10)"/>
                        <path fill="#231F20" fill-opacity=".7" d="M1,1 L1,4 L1.649,4 C2.578,4 3,3.493 3,2.515 L3,2.5 C3,1.522 2.578,1 1.649,1 L1,1 Z M0,0 L1.649,0 C3.04,0 4,1.093 4,2.5 C4,3.921 3.04,5 1.649,5 L0,5 L0,0 Z" transform="translate(8 10)"/>
                    </g>
                </svg>
            </AbstractIcon>
        </Fragment>
    );
}
