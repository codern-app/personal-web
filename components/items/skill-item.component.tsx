import { Card, Box, CardContent, Typography, Chip, Tooltip } from '@mui/material';
import { TagGroup } from '../../features/firebase/models/firebase.model';

export type SkillItemComponentProps = {
  skill: TagGroup;
};

export const SkillItemComponent: React.FC<SkillItemComponentProps> = ({ skill }) => {
  return (
    <Card sx={{ display: 'flex', width: '100%', marginBottom: 0.5 }} className="card">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '4px 8px !important',
          }}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography component="h3" variant="h4" pr={1}>
              {skill.title}
            </Typography>
            {skill.tags?.map((tag) => (
              <Tooltip key={tag} title={tag}>
                <Chip size="small" variant="medium" color="primary" label={tag} />
              </Tooltip>
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
