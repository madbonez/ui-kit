/** @jsx h */
import { h } from 'preact';
import defaultAvatarPic from './images/default-avatar.png';
import defaultOperatorPic from './images/default-operator-avatar.png';
import { Message } from './model/Message';

export const MessageCard = (props: { message: Message, userId: string }) => {
    return (
        <div className={`text-sm bg-teal-100 grid grid-cols-[50px_minmax(235px,1fr)_70px] grid-flow-col`}>
            <img className="w-10 h-10 rounded row-span-2"
                 src={props.userId === props.message.userId ? defaultAvatarPic : defaultOperatorPic}
            />
            <div className={`col-start-2 font-medium w-full`}>{} {props.message.userId}</div>
            <div className={`col-start-2 mt-2 w-full`}>
                {props.message.text}
            </div>
            <div className={`row-span-2 flex justify-center font-thin`}>
                {`${new Date().toLocaleTimeString()}`}
            </div>
        </div>
    )
}
