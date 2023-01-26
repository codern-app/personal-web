import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { RemoteConfig } from "firebase/remote-config";
import { ExperienceResponse } from "./experience.model";
import { HighlightsResponse } from "./highlight.model";
import { PortfoliosResponse } from "./portfolio.model";
import { ProfileResponse } from "./profile.model";

export type FirebaseState = {
  app?: FirebaseApp;
  analytics?: Analytics;
  remoteConfig?: RemoteConfig;
  experience?: ExperienceResponse;
  highlights?: HighlightsResponse;
  portfolios?: PortfoliosResponse;
  profile?: ProfileResponse;
  isLoading?: boolean;
};

export type TagGroup = {
  id: string;
  title: string;
  tags: string[];
};

export type IconString =
  | "github"
  | "linkedin"
  | "twitter"
  | "medium"
  | "js"
  | "android"
  | "php"
  | "java"
  | "nodeJs"
  | "play"
  | "tv";
