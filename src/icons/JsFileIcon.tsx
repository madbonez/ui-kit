/** @jsx h */
import { Fragment, h } from 'preact';
import { AbstractIcon } from './AbstractIcon';

export function JsFileIcon(props: {size?: number}) {
    return (
        <Fragment>
            <AbstractIcon size={props.size}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="none" fill-rule="evenodd">
                        <polygon fill="#F4AF3D" fill-opacity=".7" points="1 16 16 16 16 9 1 9"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="7 1 3 5 7 5"/>
                        <polygon fill="#9AA7B0" fill-opacity=".8" points="8 1 8 6 3 6 3 8 13 8 13 1"/>
                        <path fill="#231F20" fill-opacity=".7" d="M1.39509277,3.58770752 C1.62440186,3.83789062 1.83782861,4 2.28682861,4 C2.81318359,4 3,3.58770752 3,3.29760742 L3,0 L4,0 L4,3.58770752 C4,4.31964111 3.32670898,5 2.45,5 C1.629,5 1.15,4.76264111 0.8,4.31964111 L1.39509277,3.58770752 Z" transform="translate(1 10)"/>
                        <path fill="#231F20" fill-opacity=".7" d="M0.972767969,1.50152588 C0.972767969,1.13305664 1.284,1 1.845,1 C1.85033333,1 2.23533333,1 3,1 L3,0 C2.26266667,0 1.88266667,0 1.86,0 C0.778,0 0,0.45916748 0,1.45 C0,2.31452637 0.419555664,2.69049072 1.47125244,2.91607666 C2.24158869,3.08131157 2.496155,3.22862939 2.496155,3.548 C2.496155,3.86737061 2.13842773,4 1.47125244,4 C1.46058577,4 1.07016829,4 0.3,4 L0.3,5 C1.07550163,5 1.46591911,5 1.47125244,5 C3.5,5 3.5,4 3.5,3.548 C3.5,2.91607666 3.02026367,2.42071533 2.15869141,2.14685059 C1.29711914,1.87298584 0.972767969,1.86999512 0.972767969,1.50152588 Z" transform="translate(6 10)"/>
                    </g>
                </svg>
            </AbstractIcon>
        </Fragment>
    );
}
