import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  LanguageItemComponent,
  LanguageItemComponentProps,
} from '../components/items/language-item.component';
import { Language } from '../features/firebase/models/profile.model';

export default {
  title: 'Items/Language',
  component: LanguageItemComponent,
} as Meta<typeof LanguageItemComponent>;

const defaultValue: Language = {
  id: 'test',
  title: 'English',
  level: 'C1',
};

export const Default: StoryObj<LanguageItemComponentProps> = {
  args: {
    language: defaultValue,
  },
  render: (args) => <LanguageItemComponent {...args} />,
};
