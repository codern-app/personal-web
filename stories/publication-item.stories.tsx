import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PublicationItemComponent } from '../components/items/publication-item.component';
import { Publication } from '../features/firebase/models/profile.model';

export default {
  title: 'Items/Publication',
  component: PublicationItemComponent,
} as ComponentMeta<typeof PublicationItemComponent>;

const Template: ComponentStory<typeof PublicationItemComponent> = (args) => (
  <PublicationItemComponent {...args} />
);

const defaultValue: Publication = {
  id: 'test-id',
  title: 'Test app',
  journal: 'Test journal',
  date: '11.11.11',
  link: 'http://localhost',
};

export const Example = Template.bind({});
Example.args = {
  publication: defaultValue,
};
