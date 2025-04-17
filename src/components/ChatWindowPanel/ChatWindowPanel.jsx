import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Grid, TextField, Typography } from '@mui/material';
import AIAvatar from '../../assets/ai-avatar.png';

const ChatWindowPanel = () => {

    const suggestions = [
        "What's the weather like today?",
        "Give me productivity tips",
        "Explain a tech concept",
        "Tell me a fun fact"
    ];

    return (
        <Box xs={12} md={9} sx={{ position: 'relative'}}>

            <Box sx={{ pl: 4, pt: 2.5 }}>
                <Typography variant="h5" color="primary.light" fontWeight={600}>
                    Bot AI
                </Typography>
            </Box>

            <Box 
                sx={{ 
                    flexGrow: 1, 
                    overflowY: 'auto', 
                    width: '500px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 350,
                    top: 100
                }}>

                <Typography variant="h5" textAlign="center" fontWeight={600} mb={3}>
                    How Can I Help You Today?
                </Typography>

                <Avatar src={AIAvatar} alt="AI Avatar" sx={{ width: 80, height: 80, mb: 4 }} />

                <Box>

                    <Grid container spacing={2} justifyContent="center" maxWidth="sm">
                        {suggestions.map((question, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Card sx={{ backgroundColor: '#D7C7F4' }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="body1" fontWeight={500}>
                                                {question}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Box>

            </Box>


            <Box 
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 300,
                    width: '80%',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <TextField
                    sx={{ 
                        width: '1050px', 
                        backgroundColor: '#FFFFFF', 
                        height: '48px', mb: 1, 
                        border: '1px solid #00000073',
                        '& .MuiInputBase-root': { height: '100%'} 
                    }}
                    variant="outlined"
                />
                <Button 
                    variant="contained" 
                    disableElevation 
                    sx={{
                        fontWeight: '600', 
                        mb: 1, 
                        height: '45px',
                        width: '100px', 
                        backgroundColor: 'secondary.main', 
                        color: 'text.primary', 
                        '&:hover': { backgroundColor: 'primary.light'}
                    }}>
                    Ask
                </Button>

                <Button 
                    variant="contained" 
                    disableElevation 
                    sx={{
                        fontWeight: '600', 
                        mb: 1, 
                        height: '45px',
                        width: '100px', 
                        backgroundColor: 'secondary.main', 
                        color: 'text.primary', 
                        '&:hover': { backgroundColor: 'primary.light'}
                    }}>
                    Save
                </Button>
            </Box>

        </Box>
    );
}

export default ChatWindowPanel;
