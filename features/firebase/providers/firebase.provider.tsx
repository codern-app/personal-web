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
import { RecommendationsResponse } from '../models/recommendation.model';
import { config } from '../../../configs/config';

const initialState: FirebaseState = {
  app: undefined,
  analytics: undefined,
  remoteConfig: undefined,
  experience: config.configExperience ? JSON.parse(config.configExperience) : undefined,
  highlights: config.configHighlights ? JSON.parse(config.configHighlights) : undefined,
  portfolios: config.configPortfolio ? JSON.parse(config.configPortfolio) : undefined,
  profile: config.configProfile ? JSON.parse(config.configProfile) : undefined,
  recommendations: config.configRecommendations
    ? JSON.parse(config.configRecommendations)
    : undefined,
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
  const remoteConfig = useMemo(() => {
    if (!app) return undefined;
    const config = getRemoteConfig(app);
    config.settings.minimumFetchIntervalMillis = 3600000;
    return config;
  }, [app]);
  const analytics = useMemo(() => (app ? getAnalytics(app) : undefined), [app]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [experience, setExperience] = useState<ExperienceResponse>(
    initialState.experience as ExperienceResponse,
  );
  const [highlights, setHighlights] = useState<HighlightsResponse>(
    initialState.highlights as HighlightsResponse,
  );
  const [portfolios, setPortfolios] = useState<PortfoliosResponse>(
    initialState.portfolios as PortfoliosResponse,
  );
  const [recommendations, setRecommendations] = useState<RecommendationsResponse>(
    initialState.recommendations as RecommendationsResponse,
  );
  const [profile, setProfile] = useState<ProfileResponse>(initialState.profile as ProfileResponse);

  const state = useMemo(() => {
    return {
      ...initialState,
      app,
      analytics,
      remoteConfig,
      experience,
      highlights,
      profile,
      portfolios,
      recommendations,
      isLoading,
    };
  }, [
    app,
    analytics,
    remoteConfig,
    experience,
    highlights,
    profile,
    portfolios,
    recommendations,
    isLoading,
  ]);

  useEffect(() => {
    if (remoteConfig) {
      setIsLoading(true);
      fetchAndActivate(remoteConfig).then(() => {
        try {
          setExperience(JSON.parse(getValue(remoteConfig, 'experience').asString()));
          setHighlights(JSON.parse(getValue(remoteConfig, 'highlights').asString()));
          setPortfolios(JSON.parse(getValue(remoteConfig, 'portfolio').asString()));
          setProfile(JSON.parse(getValue(remoteConfig, 'profile').asString()));
          setRecommendations(JSON.parse(getValue(remoteConfig, 'recommendations').asString()));
          setIsLoading(false);
        } catch (e) {
          setIsLoading(false);
        }
      });
    }
  }, [remoteConfig]);

  return <FirebaseContext.Provider value={state}>{children}</FirebaseContext.Provider>;
};
