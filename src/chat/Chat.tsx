/** @jsx h */
import { Fragment, h } from 'preact';
import { MessageCard } from './MessageCard';
import sentIcon from './images/sent-icon.png';
import { useAppDispatch, useAppSelector } from './hooks/state.hooks';
import { useRef } from 'preact/hooks';
import { sendNewMessage } from './state/messagesSlice';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { HiStatusOnline } from 'react-icons/hi';

export function Chat(props: {userId: string}) {
    const textareaRef = useRef<HTMLTextAreaElement>();
    const messages = useAppSelector(state => state.messages.entities)
    const dispatch = useAppDispatch();

    return (
        <Fragment>
            <div className="relative max-h-[600px]">
                <div className={`bg-orange-400 p-4 text-blue-100 text-2xl font-medium flex justify-between items-center`}>
                    Поддержка
                    <div className={`animate-spin items-center justify-center w-[24px] h-[24px]`}>
                        <AiOutlineLoading3Quarters/>
                    </div>
                </div>
                <div className={`p-0 space-y-3 pt-3 pb-3 bg-teal-100 pl-[5px] pr-[5px] overflow-y-auto overflow-x-hidden h-[412px] hover:grayscale animate-pulse`}>
                    {
                        messages.map(message => (
                            <MessageCard message={message} userId={props.userId}/>
                        ))
                    }
                </div>
                <div>
                    <textarea
                        ref={textareaRef}
                        placeholder={'Сообщение'}
                        className={`text-white bg-teal-900 w-full border border-blue-50 p-4 outline-4 outline-blue-700 focus-blue-700 pr-14`}/>
                    <button
                        onClick={() => dispatch(sendNewMessage({
                            userId: props.userId,
                            text: textareaRef.current.value,
                        }))}
                        className={`absolute bottom-6 right-3 active:right-0 transition-all duration-100 flex justify-center items-center`}>
                        <img src={sentIcon} className={`w-10 h-10 hover:w-11 hover:h-11 transition-all duration-500`}/>
                    </button>
                </div>
            </div>
        </Fragment>
    );
}
