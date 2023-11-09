import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { SkillsSectionComponent } from '../../../components/sections/skills-section.component';

afterEach(cleanup);

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    profile: {
      skills: [],
    },
  })),
}));

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

describe('SkillsSectionComponent', () => {
  it('show section', () => {
    const { container } = render(<SkillsSectionComponent />);
    expect(container.querySelector('section')).toBeDefined();
  });
  it('show section title', () => {
    const { getByText } = render(<SkillsSectionComponent />);
    expect(getByText('skills.title')).toBeDefined();
  });
});
