/** @jsx h */
import { Fragment, h } from 'preact';
import styles from './Chat.scss';

export function Chat(props) {
    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div className="container text-white border-teal-900">
                <h1> Chat </h1>
                <input className={`bg-gray-300 w-full border border-blue-50 p-4 outline-4 outline-blue-700 focus-blue-700`}/>
            </div>
        </Fragment>
    );
}
