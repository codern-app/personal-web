import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageItemComponent } from '../components/items/language-item.component';
import { Language } from '../features/firebase/models/profile.model';

export default {
  title: 'Items/Language',
  component: LanguageItemComponent,
} as ComponentMeta<typeof LanguageItemComponent>;

const Template: ComponentStory<typeof LanguageItemComponent> = (args) => (
  <LanguageItemComponent {...args} />
);

const defaultValue: Language = {
  id: 'test',
  title: 'English',
  level: 'C1',
};

export const Example = Template.bind({});
Example.args = {
  language: defaultValue,
};
