import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Publication } from '../../../features/firebase/models/profile.model';
import { PublicationItemComponent } from '../../../components/items/publication-item.component';
import '@testing-library/jest-dom';

afterEach(cleanup);

const publication: Publication = {
  id: 'test-id',
  title: 'Test app',
  journal: 'Test journal',
  date: '11.11.11',
  link: 'http://localhost',
};

describe('PublicationItemComponent', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(<PublicationItemComponent publication={publication} />);

    expect(getByText(publication.title)).toBeDefined();
    expect(getByText(publication.journal)).toBeDefined();
    expect(getByText(publication.date)).toBeDefined();
    expect(getByRole('link')).toHaveAttribute('href', publication.link);
  });
});
