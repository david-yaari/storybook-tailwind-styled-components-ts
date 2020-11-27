import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { HrefEm, HrefProps } from './index';

export default {
  title: 'Href em',
  component: HrefEm,
  argTypes: {},
} as Meta;

const Template: Story<HrefProps> = (args) => <HrefEm {...args} />;

export const Primary = Template.bind({});
