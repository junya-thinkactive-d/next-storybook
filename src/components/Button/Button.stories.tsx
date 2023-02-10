import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  outlined: false,
  size: 'middle',
  children: 'Button',
};

export const Big = Template.bind({});
Big.args = {
  ...Default.args,
  size: 'big',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  outlined: true,
};

export const OutlinedSmall = Template.bind({});
OutlinedSmall.args = {
  ...Small.args,
  outlined: true,
};

export const OutlinedBig = Template.bind({});
OutlinedBig.args = {
  ...Big.args,
  outlined: true,
};
