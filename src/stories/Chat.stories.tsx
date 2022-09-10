/** @jsx h */
import { h } from 'preact';
import { FolderTree } from "../components/FolderTree/FolderTree";
import { Chat } from '../chat/Chat';

export default {
    title: 'Example/Chat',
    component: Chat,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        name: {control: 'text'},
        slot: {control: 'text'},
    },
};

const Template = (args) => (
    <div style="width: 700px; height: 300px">
        <Chat {...args}/>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    name: 'Example Name',
    slot: 'Example Slot Content'
};
