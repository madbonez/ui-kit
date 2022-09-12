/** @jsx h */
import { Fragment, h } from 'preact';
import { Chat } from './Chat';
import styles from './ChatApp.scss';
import { Provider } from 'react-redux';
import { store } from './state/store';

const userId = 'vAB23Mx1';
const operatorId = 'vAg73yy1';

export function ChatApp(props) {
    return (
        <Provider store={store}>
            <Fragment>
                <style>
                    {styles}
                </style>
                <Chat userId={userId}/>
            </Fragment>
        </Provider>
    );
}
