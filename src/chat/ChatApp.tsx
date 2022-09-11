/** @jsx h */
import { Fragment, h } from 'preact';
import { Chat } from './Chat';
import { Message } from './Message';
import { getMessages } from './api/messages.resource';
import { useEffect, useState } from 'preact/hooks';

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
            <Chat messages={messages} userId={userId}/>
        </Fragment>
    );
}
