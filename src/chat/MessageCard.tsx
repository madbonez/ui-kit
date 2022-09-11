/** @jsx h */
import { h } from 'preact';
import defaultAvatarPic from './default-avatar.png';
import defaultOperatorPic from './default-operator-avatar.png';
import { Message } from './Message';

export const MessageCard = (props: { message: Message, userId: string }) => {
    return (
        <div className={`text-sm p-2 bg-teal-100 grid grid-cols-[40px_minmax(275px, 1fr)_50px] grid-flow-col`}>
            <img className="w-10 h-10 rounded row-span-2 mr-4"
                 src={props.userId === props.message.userId ? defaultAvatarPic : defaultOperatorPic}
            />
            <div className={`col-start-2 font-medium w-full`}>{} {props.message.userId}</div>
            <div className={`col-start-2 mt-2 w-full`}>
                Strawberries taste best with champaign and lots of chipotle chile powder.
            </div>
            <div className={`row-span-2 flex justify-center font-thin ml-2`}>
                {`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}
            </div>
        </div>
    )
}
