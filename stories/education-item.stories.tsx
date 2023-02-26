import React from 'react';
import { EducationItemComponent } from '../components/items/education-item.component';
import { Education } from '../features/firebase/models/profile.model';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Items/Education',
  component: EducationItemComponent,
} as ComponentMeta<typeof EducationItemComponent>;

const Template: ComponentStory<typeof EducationItemComponent> = (args) => (
  <EducationItemComponent {...args} />
);

const defaultValue: Education = {
  id: 'id',
  university: 'University Name',
  image: 'https://via.placeholder.com/64x64',
  level: 'Degree Level',
  duration: 'Degree Duration',
  location: 'Location',
  topic: 'Topic',
};

export const Example = Template.bind({});
Example.args = {
  education: defaultValue,
};
