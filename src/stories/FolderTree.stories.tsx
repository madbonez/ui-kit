/** @jsx h */
import { h } from 'preact';
import { FolderTree } from "../components/FolderTree/FolderTree";

export default {
    title: 'Example/FolderTree',
    component: FolderTree,
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
        <FolderTree {...args}/>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    name: 'Example Name',
    slot: 'Example Slot Content'
};
