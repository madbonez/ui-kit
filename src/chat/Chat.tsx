/** @jsx h */
import { Fragment, h } from 'preact';
import styles from './Chat.scss';
import { MessageCard } from './MessageCard';
import { Message } from './Message';

export function Chat(props: {messages: Message[], userId: string}) {
    return (
        <Fragment>
            <style>
                {styles}
            </style>
            <div className="container">
                <h1>Chat</h1>
                <div className={`p-0`}>
                    {
                        props.messages.map(message => (
                            <MessageCard message={message} userId={props.userId}/>
                        ))
                    }
                </div>
                <textarea
                    placeholder={'Сообщение'}
                    className={`text-white bg-teal-900 w-full border border-blue-50 p-4 outline-4 outline-blue-700 focus-blue-700`}/>
                <button
                    className={`active:shadow-none bg-blue-200 p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                    Send
                </button>
            </div>
        </Fragment>
    );
}
