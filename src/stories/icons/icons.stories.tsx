/** @jsx h */
import { h } from 'preact';
import { IconsDemo } from './icons.demo';

export default {
    title: 'Example/Icons',
    component: IconsDemo,
    argTypes: {
        size: { control: 'number' },
    },
    parameters: {
        layout: 'centered'
    }
};

const Template = (args) => <IconsDemo {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    size: 32
};
