import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HighlightItemComponent } from '../components/items/highlight-item.component';
import { Highlight } from '../features/firebase/models/highlight.model';

export default {
  title: 'Items/Highlight',
  component: HighlightItemComponent,
} as ComponentMeta<typeof HighlightItemComponent>;

const Template: ComponentStory<typeof HighlightItemComponent> = (args) => (
  <HighlightItemComponent {...args} />
);

const defaultValue: Highlight = {
  id: 'high1',
  title: 'Achievement 1',
  description: 'Won a coding competition',
};

export const Example = Template.bind({});
Example.args = {
  highlight: defaultValue,
};
