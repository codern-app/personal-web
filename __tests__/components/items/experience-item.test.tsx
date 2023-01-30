import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ExperienceItemComponent } from '../../../components/items/experience-item.component';
import { Experience } from '../../../features/firebase/models/experience.model';

afterEach(cleanup);

const experience: Experience = {
  id: 'exp1',
  title: 'Software Engineer',
  duration: 'Jan 2019 - Present',
  location: 'San Francisco, CA',
  company: {
    id: 'test',
    title: 'Google',
    image: 'https://example.com/google.png',
    link: 'https://example.com/google.png',
  },
  description: 'Developed and maintained company website\n' + 'Worked on project X and project Y',
};

describe('ExperienceItemComponent', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<ExperienceItemComponent experience={experience} />);

    expect(getByText(experience.title)).toBeDefined();
    expect(getByText(experience.duration)).toBeDefined();
    expect(getByText(experience.location)).toBeDefined();
    expect(getByText(experience.company.title)).toBeDefined();
    expect(getByAltText(experience.company.title)).toBeDefined();
    expect(getByText('Developed and maintained company website')).toBeDefined();
    expect(getByText('Worked on project X and project Y')).toBeDefined();
  });
});
