import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Highlight } from '../../../features/firebase/models/highlight.model';
import { HighlightItemComponent } from '../../../components/items/highlight-item.component';

afterEach(cleanup);

const highlight: Highlight = {
  id: 'high1',
  title: 'Achievement 1',
  description: 'Won a coding competition',
};

describe('HighlightItemComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HighlightItemComponent highlight={highlight} />);

    expect(getByText(highlight.title)).toBeDefined();
    expect(getByText(highlight.description)).toBeDefined();
  });
});
