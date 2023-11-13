/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FirebaseProvider } from '../../../../features/firebase/providers/firebase.provider';

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => ({
    name: 'test-app',
  })),
}));

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn(() => ({
    logEvent: jest.fn(),
  })),
}));

jest.mock('firebase/remote-config', () => ({
  fetchAndActivate: jest.fn(() => Promise.resolve()),
  getRemoteConfig: jest.fn(() => ({
    activate: jest.fn(),
    ensureInitialized: jest.fn(),
    settings: {
      minimumFetchIntervalMillis: 1000,
    },
  })),
  getValue: jest.fn(() => ({
    asString: jest.fn(() => '{ "test": "data" }'),
  })),
}));

describe('FirebaseProvider', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { getByText } = render(
      <FirebaseProvider>
        <p>Test</p>
      </FirebaseProvider>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('initializes Firebase app', () => {
    const { getByText } = render(
      <FirebaseProvider>
        <p>Test</p>
      </FirebaseProvider>,
    );
    const initializeAppMock = require('firebase/app').initializeApp as jest.Mock;

    expect(initializeAppMock).toHaveBeenCalled();
    expect(getByText('Test')).toBeInTheDocument();
  });
});
