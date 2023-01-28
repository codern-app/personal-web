import { IconString } from './firebase.model';

export type Portfolio = {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: IconString;
  tags: string[];
};

export type PortfolioSection = {
  id: string;
  title: string;
  description: string;
  portfolio: Portfolio[];
};
export type PortfoliosResponse = PortfolioSection[];
