import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { fetchAndActivate, getRemoteConfig, getValue } from 'firebase/remote-config';
import { firebaseConfig } from '../configs/firebase.config';
import { FirebaseState } from '../models/firebase.model';
import { ExperienceResponse } from '../models/experience.model';
import { ProfileResponse } from '../models/profile.model';
import { PortfoliosResponse } from '../models/portfolio.model';
import { HighlightsResponse } from '../models/highlight.model';

const initialState: FirebaseState = {
  app: undefined,
  analytics: undefined,
  remoteConfig: undefined,
  experience: undefined,
  highlights: undefined,
  portfolios: undefined,
  profile: undefined,
  isLoading: true,
};

export const FirebaseContext = React.createContext<FirebaseState>(initialState);

type Props = {
  children: ReactNode;
};

export const FirebaseProvider: React.FC<Props> = ({ children }) => {
  const app = useMemo(
    () => (typeof window !== 'undefined' ? initializeApp(firebaseConfig) : undefined),
    [],
  );
  const remoteConfig = useMemo(() => (app ? getRemoteConfig(app) : undefined), [app]);
  const analytics = useMemo(() => (app ? getAnalytics(app) : undefined), [app]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [experience, setExperience] = useState<ExperienceResponse>();
  const [highlights, setHighlights] = useState<HighlightsResponse>();
  const [portfolios, setPortfolios] = useState<PortfoliosResponse>();
  const [profile, setProfile] = useState<ProfileResponse>();

  useEffect(() => {
    if (remoteConfig) {
      fetchAndActivate(remoteConfig).then(() => {
        try {
          setExperience(JSON.parse(getValue(remoteConfig, 'experience').asString()));
          setHighlights(JSON.parse(getValue(remoteConfig, 'highlights').asString()));
          setPortfolios(JSON.parse(getValue(remoteConfig, 'portfolio').asString()));
          setProfile(JSON.parse(getValue(remoteConfig, 'profile').asString()));
          setIsLoading(false);
        } catch (e) {
          setIsLoading(false);
        }
      });
    }
  }, [remoteConfig]);

  return (
    <FirebaseContext.Provider
      value={{
        ...initialState,
        app,
        analytics,
        remoteConfig,
        experience,
        highlights,
        profile,
        portfolios,
        isLoading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
