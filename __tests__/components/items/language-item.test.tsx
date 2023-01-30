import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Language } from '../../../features/firebase/models/profile.model';
import { LanguageItemComponent } from '../../../components/items/language-item.component';

afterEach(cleanup);

const language: Language = {
  id: 'test',
  title: 'English',
  level: 'C1',
};

describe('LanguageItemComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LanguageItemComponent language={language} />);

    expect(getByText(language.title)).toBeDefined();
    expect(getByText(language.level)).toBeDefined();
  });
});
