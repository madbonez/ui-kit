/** @jsx h */
import { Fragment, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import styles from './DraggableDivider.scss';
import { Ref, useEffect, useRef } from 'preact/compat';
import { unFocus } from '../../../helpers/unFocus';

export function DraggableDivider(props: {
    onResize: (xPosition: number) => void,
    xPosition: number,
    children: any,
}) {
    const [inAction, setInAction] = useState(false);
    const [xPosition, setXPosition] = useState(props.xPosition);

    const onMouseDown = useCallback((e: MouseEvent) => {
        setInAction(true);
        setXPosition(oldPosition => oldPosition + e.movementX);
    }, [inAction]);

    const onMouseUp = useCallback((e: MouseEvent) => {
        if (inAction) {
            setXPosition(oldPosition => oldPosition + e.movementX);
            setInAction(false);
        }
    }, [inAction]);

    const containerRef: Ref<HTMLDivElement> = useRef(null);
    const onMouseMove = useCallback((e: MouseEvent) => {
        if (inAction) {
            setXPosition((oldPosition) => {
                const newPosition = oldPosition + e.movementX;
                if (newPosition > containerRef.current.clientWidth || newPosition < 0) {
                    return oldPosition;
                }

                return newPosition;
            });
        }
    }, [inAction]);

    useEffect(() => {
        if (inAction) {
            props.onResize(xPosition);
            unFocus();
        }
    })

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div className="resizable-container"
                 ref={containerRef}
                 onMouseMove={onMouseMove}
                 onMouseLeave={onMouseUp}
                 onMouseUp={onMouseUp}
                 style={{cursor: inAction ? 'col-resize' : 'default'}}>

                <div className="divider"
                     onMouseDown={onMouseDown}
                     style={{left: xPosition}}>
                    <div className="divider-visible"/>
                </div>
                {props.children}
            </div>
        </Fragment>
    );
}
