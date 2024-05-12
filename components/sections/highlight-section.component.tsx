import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { HighlightItemComponent } from '../items/highlight-item.component';
import { Stack } from '@mui/material';

export const HighlightSectionComponent: React.FC = () => {
  const { highlights } = useFirebase();

  if (!highlights) {
    return <></>;
  }
  return (
    <SectionComponent color="secondary.light" id="highlight">
      <Stack direction="column" gap={1}>
        {highlights?.map((highlight) => (
          <HighlightItemComponent key={highlight.id} highlight={highlight} />
        ))}
      </Stack>
    </SectionComponent>
  );
};
