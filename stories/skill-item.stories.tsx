import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkillItemComponent } from '../components/items/skill-item.component';
import { TagGroup } from '../features/firebase/models/firebase.model';

export default {
  title: 'Items/Skill',
  component: SkillItemComponent,
} as ComponentMeta<typeof SkillItemComponent>;

const Template: ComponentStory<typeof SkillItemComponent> = (args) => (
  <SkillItemComponent {...args} />
);

const defaultValue: TagGroup = {
  id: 'test-id',
  title: 'Test skills',
  tags: ['js', 'css'],
};

export const Example = Template.bind({});
Example.args = {
  skill: defaultValue,
};
