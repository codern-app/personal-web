import { WrapperComponent } from '../features/navigation/components/wrapper.component';
import { Alert, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('404');
  return (
    <WrapperComponent>
      <Container>
        <Typography
          variant="h1"
          sx={{
            marginTop: 12,
            marginBottom: 1,
          }}
        >
          {t('title')}
        </Typography>
        <Alert severity="error">{t('message')}</Alert>
        <Button
          variant="contained"
          sx={{
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <Link href="/">{t('back')}</Link>
        </Button>
      </Container>
    </WrapperComponent>
  );
}
