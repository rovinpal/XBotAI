import React from 'react';
import { Box, Grid } from '@mui/material';
import ChatHistoryPanel from '../components/ChatHistoryPanel/ChatHistoryPanel';
import ChatWindowPanel from '../components/ChatWindowPanel/ChatWindowPanel';

const HomePage = () => {

    return (
        <Box sx={{ flexGrow: 1, height: '100vh',  background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)' }}>
            <Grid container sx={{ height: '100%' }}>

                <Grid item xs={12} md={3}>
                    <Box>
                        <ChatHistoryPanel />
                    </Box>
                </Grid>


                <Grid item xs={12} md={9} >
                    <Box>
                        <ChatWindowPanel />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default HomePage;