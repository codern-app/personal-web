import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RecommendationItemComponent } from '../../../components/items/recommendation-item.component';
import { Recommendation } from '../../../features/firebase/models/recommendation.model';

afterEach(cleanup);

describe('RecommendationItemComponent', () => {
  it('renders component with all the props', () => {
    const recommendation: Recommendation = {
      id: 'test',
      name: 'John Smith',
      image: 'https://via.placeholder.com/64x64',
      title: 'CTO',
      companyName: 'Google',
      recommendation: 'You are the best!\nI recommend you.',
    };

    const { getByText, getByAltText } = render(
      <RecommendationItemComponent recommendation={recommendation} />,
    );

    expect(getByAltText(recommendation.name)).toBeDefined();
    expect(getByText(recommendation.name)).toBeDefined();
    expect(getByText(recommendation.title)).toBeDefined();
    expect(getByText(recommendation.companyName)).toBeDefined();
    expect(getByText('You are the best!')).toBeDefined();
    expect(getByText('I recommend you.')).toBeDefined();
  });
});
