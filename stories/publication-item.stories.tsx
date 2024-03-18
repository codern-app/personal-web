import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  PublicationItemComponent,
  PublicationItemComponentProps,
} from '../components/items/publication-item.component';
import { Publication } from '../features/firebase/models/profile.model';

export default {
  title: 'Items/Publication',
  component: PublicationItemComponent,
} as Meta<typeof PublicationItemComponent>;

const defaultValue: Publication = {
  id: 'test-id',
  title: 'Test app',
  journal: 'Test journal',
  date: '11.11.11',
  link: 'http://localhost',
};

export const Default: StoryObj<PublicationItemComponentProps> = {
  args: {
    publication: defaultValue,
  },
  render: (args) => <PublicationItemComponent {...args} />,
};
