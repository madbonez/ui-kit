/** @jsx h */
import { h } from 'preact';
import { Chat } from '../chat/Chat';
import { ChatApp } from '../chat/ChatApp';

export default {
    title: 'Example/ChatApp',
    component: Chat,
    parameters: {
        // layout: 'centered'
    },
    argTypes: {
        name: {control: 'text'},
        slot: {control: 'text'},
    },
};

const Template = (args) => (
    <div style="width: 375px; height: 300px">
        <ChatApp {...args}/>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    name: 'Example Name',
    slot: 'Example Slot Content'
};
