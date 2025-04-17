import { Avatar, Box, Typography, IconButton, List } from '@mui/material';
import React from 'react';
import AIAvatar from '../../assets/ai-pic.png';
import NewChatIcon from '../../assets/newchat-icon.png';

const ChatHistoryPanel = () => {

    const conversations = [
        { id: 1, title: 'Conversation with Soul AI - Apr 17' },
        { id: 2, title: 'Productive Chat - Apr 16' },
        { id: 3, title: 'Troubleshooting Chat - Apr 15' }
    ];

    const handleNewChat = () => {
        console.log('Start a new chat');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'secondary.main', px: 1, py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                    <Avatar src={AIAvatar} alt="Soul AI" sx={{ mr: 3 }} />
                    <Typography fontWeight={600} fontSize="20px" variant="subtitle1">
                        New Chat
                    </Typography>
                </Box>

                <IconButton onClick={handleNewChat} size="small" sx={{ml: 3, mr: 1 }}>
                    <img src={NewChatIcon} alt="New Chat" width={30} height={30} />
                </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, overflowY: 'auto', backgroundColor: 'secondary.contrastText', pt: 2 }}>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                    {conversations.map((chat) => (
                        <Box
                            key={chat.id}
                            sx={{
                                backgroundColor: 'secondary.main',
                                p: 2,
                                borderRadius: 2,
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'primary.light',
                                }
                            }}
                        >
                            <Typography variant="body2" fontWeight={600}>
                                {chat.title}
                            </Typography>
                        </Box>
                    ))}
                </List>
            </Box>

        </Box>
    );
}

export default ChatHistoryPanel;
