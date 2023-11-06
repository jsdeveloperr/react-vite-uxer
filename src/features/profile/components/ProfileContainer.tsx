import React, { useEffect } from 'react';

import { Stack, Avatar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { useProfileService } from '../hooks/useProfileService';

export const ProfileContainer = () => {
  const { profile, fetchAllProfile } = useProfileService();

  useEffect(() => {
    fetchAllProfile();
  }, [fetchAllProfile]);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexGrow: 1,
          color: '#000',
          ml: 1,
          textTransform: 'capitalize',
          '@media (max-width: 780px)': {
            fontSize: '14px',
          },
        }}
      >
        {profile ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: '#848587',
                  textTransform: 'uppercase',
                  '@media (max-width: 780px)': {
                    fontSize: '14px',
                    width: '30px',
                    height: '30px',
                  },
                }}
                alt={profile.username}
                src={profile.username}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  flexGrow: 1,
                  color: '#000',
                  ml: 1,
                  textTransform: 'capitalize',
                  '@media (max-width: 780px)': {
                    fontSize: '14px',
                  },
                }}
              >
                {profile.username}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>

            <Skeleton width="100%">
              <Typography>skeleton</Typography>
            </Skeleton>
          </>
        )}
      </Stack>
    </>
  );
};
