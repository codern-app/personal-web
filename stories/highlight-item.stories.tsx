import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  HighlightItemComponent,
  HighlightItemComponentProps,
} from '../components/items/highlight-item.component';
import { Highlight } from '../features/firebase/models/highlight.model';

export default {
  title: 'Items/Highlight',
  component: HighlightItemComponent,
} as Meta<typeof HighlightItemComponent>;

const defaultValue: Highlight = {
  id: 'high1',
  title: 'Achievement 1',
  description: 'Won a coding competition',
};

export const Default: StoryObj<HighlightItemComponentProps> = {
  args: {
    highlight: defaultValue,
  },
  render: (args) => <HighlightItemComponent {...args} />,
};
