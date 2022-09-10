/** @jsx h */
import { Fragment, h } from 'preact';
import { AbstractIcon } from './AbstractIcon';

export function FolderIcon(props: {size?: number}) {
    return (
        <Fragment>
            <AbstractIcon size={props.size}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#9AA7B0" fill-opacity=".8" fill-rule="evenodd" d="M1,13 L15,13 L15,4 L7.98457,4 L6.69633,2.71149 C6.22161957,2.28559443 5.61570121,2.03457993 4.97888,2 L1.05128,2 C1.02295884,2 1,2.02295884 1,2.05128 L1,13 Z"/>
                </svg>
            </AbstractIcon>
        </Fragment>
    );
}
