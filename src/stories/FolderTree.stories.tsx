/** @jsx h */
import {h} from 'preact';
import {FolderTree} from "../components/FolderTree/FolderTree";

export default {
  title: 'Example/FolderTree',
  component: FolderTree,
  argTypes: {
    name: { control: 'text' },
    slot: { control: 'text' },
  },
};

const Template = (args) => <FolderTree {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Example Name',
  slot: 'Example Slot Content'
};
