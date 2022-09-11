/** @jsx h */
import { Fragment, h } from 'preact';
import { Chat } from './Chat';
import { Message } from './model/Message';
import { getMessages } from './api/messages.resource';
import { useEffect, useState } from 'preact/hooks';
import styles from './ChatApp.scss';

const userId = 'vAB23Mx1';
const operatorId = 'vAg73yy1';

export function ChatApp(props) {
    const [messages, updateMessages] = useState<Message[]>([]);

    useEffect(() => {
        getMessages(userId).then(response => {
            updateMessages(response)
        });
    })

    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <Chat messages={messages} userId={userId}/>
        </Fragment>
    );
}
