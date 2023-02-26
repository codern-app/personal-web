import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ExperienceItemComponent } from '../components/items/experience-item.component';
import { Experience } from '../features/firebase/models/experience.model';

export default {
  title: 'Items/Experience',
  component: ExperienceItemComponent,
} as ComponentMeta<typeof ExperienceItemComponent>;

const Template: ComponentStory<typeof ExperienceItemComponent> = (args) => (
  <ExperienceItemComponent {...args} />
);

const defaultValue: Experience = {
  id: 'exp1',
  title: 'Software Engineer',
  duration: 'Jan 2019 - Present',
  location: 'San Francisco, CA',
  company: {
    id: 'test',
    title: 'Google',
    image: 'https://via.placeholder.com/64x64',
    link: 'https://example.com/google.png',
  },
  description: 'Developed and maintained company website\n' + 'Worked on project X and project Y',
};

export const Example = Template.bind({});
Example.args = {
  experience: defaultValue,
};
