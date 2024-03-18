import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  SkillItemComponent,
  SkillItemComponentProps,
} from '../components/items/skill-item.component';
import { TagGroup } from '../features/firebase/models/firebase.model';

export default {
  title: 'Items/Skill',
  component: SkillItemComponent,
} as Meta<typeof SkillItemComponent>;

const defaultValue: TagGroup = {
  id: 'test-id',
  title: 'Test skills',
  tags: ['js', 'css'],
};

export const Default: StoryObj<SkillItemComponentProps> = {
  args: {
    skill: defaultValue,
  },
  render: (args) => <SkillItemComponent {...args} />,
};
