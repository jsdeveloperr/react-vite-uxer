import * as React from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function DataGridDemo() {
  return (
    <Container style={{ padding: '1px' }} maxWidth={false}>
      <Box sx={{ width: '100%', backgroundColor: '#fff', p: 0 }}>
        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            gridTemplateColumns: 'repeat(2,1fr)',
            gridAutoRows: 'minmax(50px, auto)',
            gap: 1,
            flexDirection: 'column',
            backgroundColor: '#f3f3f3',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              boxShadow: 'none',
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#98a6ad' }}>
              Completed
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6">2</Typography>
              <CheckCircleIcon
                sx={{
                  height: 100,
                  width: 100,
                  opacity: 0.6,
                  mr: 1,
                  color: '#2bce9a',
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ color: '#2bce9a' }}>
              3.27%
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              boxShadow: 'none',
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#98a6ad' }}>
              Paused
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6">3</Typography>
              <PauseCircleIcon
                sx={{
                  height: 100,
                  width: 100,
                  opacity: 0.6,
                  mr: 1,
                  color: '#f65e7b',
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ color: '#2bce9a' }}>
              3.27%
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              boxShadow: 'none',
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#98a6ad' }}>
              Active
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6">2</Typography>
              <CampaignIcon
                sx={{
                  height: 100,
                  width: 100,
                  opacity: 0.6,
                  mr: 1,
                  color: '#2bce9a',
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ color: '#2bce9a' }}>
              3.27%
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              boxShadow: 'none',
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#98a6ad' }}>
              Schedulled
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6">3</Typography>
              <CalendarMonthIcon
                sx={{
                  height: 100,
                  width: 100,
                  opacity: 0.6,
                  mr: 1,
                  color: '#1c2128',
                }}
              />
            </Box>
            <Typography variant="h6" sx={{ color: '#2bce9a' }}>
              3.27%
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
