import { ReadMore } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode } from 'react';

type Props = {
  title: string;
  icon?: ReactNode;
  link?: string;
  description?: string;
  isExpanded?: boolean;
  variant?: Variant;
};

export const SectionHeaderComponent: React.FC<Props> = ({
  title,
  description,
  icon,
  link,
  isExpanded,
  variant = 'h2',
}) => {
  return (
    <>
      <Stack direction="row" alignItems="center" mt={2} justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          {icon}
          <Typography variant={variant} ml={1}>
            {title}
          </Typography>
        </Stack>
        {!isExpanded && link && <Button endIcon={<ReadMore />}>See more</Button>}
      </Stack>
      {isExpanded && description && <Typography mt={1}>{description}</Typography>}
    </>
  );
};
