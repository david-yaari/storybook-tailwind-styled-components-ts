import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Emoji, EmojiProps } from './index';

export default {
  title: 'Href em',
  component: Emoji,
  //argTypes: {},
} as Meta;

const Template: Story<EmojiProps> = (args) => <Emoji {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'love',
  symbol: '💕',
};
