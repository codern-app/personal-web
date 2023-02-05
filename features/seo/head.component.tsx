import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { config } from '../../configs/config';
import { useFirebase } from '../firebase/providers/firebase.hook';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
};

export const HeadComponent: React.FC<Props> = ({ title, description, url, imageUrl }) => {
  const router = useRouter();
  const { profile } = useFirebase();

  const overrideTitle = useMemo(() => {
    if (title) {
      return config.siteName + ' | ' + title;
    }
    if (profile?.title) {
      return config.siteName + ' | ' + profile?.title;
    }
    return config.siteName + ' | ' + config.userTitle;
  }, [title, profile?.title]);

  const overrideUrl = useMemo(() => {
    return url || router.basePath + router.pathname;
  }, [url, router.basePath, router.pathname]);

  return (
    <Head>
      <title>{overrideTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description || config.userDescription} />
      <meta property="og:title" content={overrideTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={overrideUrl} />
      <meta property="og:image" content={imageUrl || config.userImageUrl} />
      <link rel="canonical" href={overrideUrl} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};
