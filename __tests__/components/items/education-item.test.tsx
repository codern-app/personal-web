import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EducationItemComponent } from '../../../components/items/education-item.component';

afterEach(cleanup);

describe('EducationItemComponent', () => {
  it('renders component with all the props', () => {
    const education = {
      id: 'test',
      university: 'Harvard Bible College',
      image: 'https://via.placeholder.com/64x64',
      level: 'Undergraduate',
      duration: '3 years',
      location: 'Australia',
      topic: 'Theology',
    };

    const { getByText, getByAltText } = render(<EducationItemComponent education={education} />);

    expect(getByAltText(education.university)).toBeDefined();
    expect(getByText(education.university)).toBeDefined();
    expect(getByText(education.level)).toBeDefined();
    expect(getByText(education.duration)).toBeDefined();
    expect(getByText(education.location)).toBeDefined();
    expect(getByText(education.topic)).toBeDefined();
  });
});
