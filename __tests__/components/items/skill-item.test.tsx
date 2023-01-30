import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TagGroup } from '../../../features/firebase/models/firebase.model';
import { SkillItemComponent } from '../../../components/items/skill-item.component';

afterEach(cleanup);

const skill: TagGroup = {
  id: 'test-id',
  title: 'Test skills',
  tags: ['js', 'css'],
};

describe('SkillItemComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SkillItemComponent skill={skill} />);

    expect(getByText(skill.title)).toBeDefined();
    expect(getByText(skill.tags[0])).toBeDefined();
    expect(getByText(skill.tags[1])).toBeDefined();
  });
});
