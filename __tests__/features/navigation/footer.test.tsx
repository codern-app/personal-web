import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FooterComponent } from '../../../features/navigation/components/footer.component';

jest.mock('next-intl', () => {
  return {
    useTranslations: jest.fn((key) => jest.fn((key2) => `${key}.${key2}`)),
  };
});

jest.mock('../../../features/firebase/providers/firebase.hook', () => ({
  useFirebase: jest.fn(() => ({
    profile: {
      firstName: 'John',
      lastName: 'Smith',
      description: 'Hello, World!',
      email: 'johnsmith@example.com',
      footer: {
        pageSource: 'https://github.com/johnsmith',
        googlePlay: 'https://play.google.com/store/apps/johnsmith',
      },
      social: [
        {
          title: 'Facebook',
          link: 'https://facebook.com/johnsmith',
        },
        {
          title: 'Twitter',
          link: 'https://twitter.com/johnsmith',
        },
      ],
    },
    isLoading: false,
  })),
}));

jest.mock('../../../features/navigation/configs/menu.config', () => ({
  menuConfig: {
    footerMenu: [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'About',
        link: '/about',
      },
    ],
  },
}));

jest.mock('../../../configs/config', () => ({
  config: {
    siteUrl: 'https://example.com',
  },
}));

describe('FooterComponent', () => {
  afterEach(cleanup);

  it('renders profile name and description', () => {
    const { getByText } = render(<FooterComponent />);
    expect(getByText('John Smith')).toBeInTheDocument();
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders profile email and site URL', () => {
    const { getByText } = render(<FooterComponent />);
    expect(getByText('johnsmith@example.com')).toBeInTheDocument();
    expect(getByText('https://example.com')).toBeInTheDocument();
  });

  it('renders footer pages and external links', () => {
    const { getByText } = render(<FooterComponent />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('general.pageSource')).toBeInTheDocument();
    expect(getByText('general.googlePlay')).toBeInTheDocument();
  });
});
