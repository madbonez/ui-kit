/** @jsx h */
import { Fragment, h, RefObject } from 'preact';
import { useCallback, useRef, useState } from 'preact/hooks';
import styles from './ExpandedCodePanel.scss';
import { getAbsoluteHeight } from '../../utils/getAbsoluteHeight';
import hljs from 'highlight.js';

enum RollDirection {
    DOWN = 'down',
    UP = 'up',
}

export function ExpandedCodePanel(props: {
    height: number,
    lang: string,
    whiteControls: boolean,
    children: any,
}) {
    let containerRef: RefObject<HTMLDivElement> = useRef(null);
    let contentContainerRef: RefObject<HTMLDivElement> = useRef(null);
    const heightStep = props.height || 200;

    const [isUntouched, setUntouchedValue] = useState(true);
    const [currentHeight, setHeightValue] = useState(heightStep);
    const [rollDirection, setRollValue] = useState(RollDirection.DOWN);
    const [contentScrollTop, setContentScrollTopValue] = useState(0);

    const onContentScroll = useCallback(() => {
        console.log(containerRef.current.scrollTop)
        if ((containerRef.current.scrollTop + containerRef.current.offsetHeight) < containerRef.current.scrollHeight) {
            setContentScrollTopValue(containerRef.current.scrollTop);
        } else {
            setContentScrollTopValue(containerRef.current.scrollHeight - containerRef.current.offsetHeight);
        }
    }, []);

    const unwrapContent = useCallback(() => {
        setUntouchedValue(false);

        if (rollDirection === RollDirection.DOWN) {
            setHeightValue(getAbsoluteHeight(contentContainerRef.current));
            setRollValue(RollDirection.UP);
        }

        if (rollDirection === RollDirection.UP) {
            setHeightValue(heightStep);
            setRollValue(RollDirection.DOWN);
        }
    }, [currentHeight]);

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div style={{height: currentHeight}} className="container" onScroll={onContentScroll} ref={containerRef}>
                <div ref={contentContainerRef}>
                    <pre><code className="hljs" dangerouslySetInnerHTML={{
                        __html: hljs.highlight(props.children, {language: props.lang}).value
                    }}/></pre>
                </div>
                <span
                    style={{bottom: '' + -contentScrollTop + 'px'}}
                    onClick={unwrapContent}
                    className={`arrow pulse ${props.whiteControls ? 'white' : ''}`}
                >
                    <div className="controls">
                        {rollDirection === RollDirection.UP ? <i className="gg-compress-v"/> : <i className="gg-arrows-v-alt"/>}
                        <i className="gg-clipboard"/>
                    </div>
                </span>
            </div>
        </Fragment>
    );
}
