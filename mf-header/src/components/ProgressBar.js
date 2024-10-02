import { styled, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  width: '15%',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#000000',
    ...theme.applyStyles('dark', {
      backgroundColor: yellow[500],
    }),
  },
}));

export default function ProgressBar() {
  const value = 40;
  return (
    <>
      <Typography fontSize={12}>Estado del folio</Typography>
      <BorderLinearProgress variant='determinate' value={value} />
      <Typography fontSize={12}>{value}%</Typography>
    </>
  );
}
