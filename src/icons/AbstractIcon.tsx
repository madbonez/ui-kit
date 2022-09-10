/** @jsx h */
import { Fragment, h } from 'preact';

export function AbstractIcon(props: {size?: number, children: any}) {
    return (
        <Fragment>
            <style>
                {`
                    svg {
                        display: block;
                        height: ${props.size || 16}px;
                        width: ${props.size || 16}px; 
                    }
                `}
            </style>
            {props.children}
        </Fragment>
    );
}
