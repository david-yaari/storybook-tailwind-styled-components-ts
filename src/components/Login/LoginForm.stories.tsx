import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Login, FormProps } from './index';

export default {
  title: 'Login Form',
  component: Login,
  argTypes: {},
} as Meta;

const Template: Story<FormProps> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
