import { IconString, TagGroup } from './firebase.model';

export type Social = {
  id: string;
  title: string;
  icon: IconString;
  link: string;
};

export type Publication = {
  id: string;
  title: string;
  journal: string;
  date: string;
  link: string;
};

export type Education = {
  id: string;
  level: string;
  university: string;
  image: string;
  duration: string;
  location: string;
  topic: string;
};

export type Footer = {
  pageSource: string;
  github: string;
  googlePlay: string;
  storybook: string;
  medium: string;
  linkedin: string;
};

export type Language = {
  id: string;
  title: string;
  level: string;
};

export type ProfileResponse = {
  id: string;
  firstName: string;
  lastName: string;
  nickName?: string;
  phone: string;
  nameTitle: string;
  title: string;
  location?: string;
  yearOfBirth?: number;
  email?: string;
  url?: string;
  description?: string;
  image?: string;
  social?: Social[];
  publications?: Publication[];
  education?: Education[];
  footer?: Footer;
  skills?: TagGroup[];
  languages?: Language[];
};
