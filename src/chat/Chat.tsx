/** @jsx h */
import { Fragment, h } from 'preact';
import { MessageCard } from './MessageCard';
import { Message } from './model/Message';
import sentIcon from './images/sent-icon.png';

export function Chat(props: {messages: Message[], userId: string}) {
    return (
        <Fragment>
            <div className="container relative">
                <h1 className={`bg-orange-400 p-4 text-blue-100 text-2xl font-medium`}>Поддержка</h1>
                <div className={`p-0`}>
                    {
                        props.messages.map(message => (
                            <MessageCard message={message} userId={props.userId}/>
                        ))
                    }
                </div>
                <textarea
                    placeholder={'Сообщение'}
                    className={`text-white bg-teal-900 w-full border border-blue-50 p-4 outline-4 outline-blue-700 focus-blue-700 pr-14`}/>
                <button
                    className={`absolute bottom-6 right-3 active:right-0 transition-all duration-100 flex justify-center items-center`}>
                    <img src={sentIcon} className={`w-10 h-10 hover:w-11 hover:h-11 transition-all duration-500`}/>
                </button>
            </div>
        </Fragment>
    );
}
