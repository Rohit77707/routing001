import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import { padding } from '@mui/system';

export default function Home() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', padding:'4'}}>
          <Typography component="div" variant="h5" sx={{color:'#596AFF'}}>
          Leading MEP & Facility <br/>
          management company in <br/>
          Dubai
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Urban Science is always ready to accept your challenges<br/>
Meeting your goals is our main objective. Professional <br/>services for facility management & MEP works.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button variant="contained" size="medium" >
          Company Profile
        </Button>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} /> Watch video
          </IconButton>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 600 }}
        image="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}