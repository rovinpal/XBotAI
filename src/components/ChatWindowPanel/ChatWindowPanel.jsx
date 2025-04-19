import { useState } from "react";
import { Box, Typography, Button, Avatar, TextField, IconButton  } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AIAvatar from "../../assets/ai-avatar.png";
import SuggestedQuests from "../SuggestedQuestions/SuggestedQuestion";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import ChatBubble from "../ChatBubble/ChatBubble";
import UserAvatar from "../../assets/user-avatar.png";

export default function Chatwindow({ toggleSidebar }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const messages = [
    {
      sender: "You",
      message: "Hey, what's the weather like today?",
      avatar: UserAvatar,
      timestamp: "10:30 AM",
      isAI: false,
    },
    {
      sender: "Soul AI",
      message: "It's sunny and 24°C where you are 🌞",
      avatar: AIAvatar,
      timestamp: "10:32 AM",
      isAI: true,
    },
    {
      sender: "You",
      message: "Hey, what's the weather like today?",
      avatar: UserAvatar,
      timestamp: "10:30 AM",
      isAI: false,
    },
    {
      sender: "Soul AI",
      message: "It's sunny and 24°C where you are 🌞",
      avatar: AIAvatar,
      timestamp: "10:32 AM",
      isAI: true,
    },
    {
      sender: "You",
      message: "Hey, what's the weather like today?",
      avatar: UserAvatar,
      timestamp: "10:30 AM",
      isAI: false,
    },
    {
      sender: "Soul AI",
      message: "It's sunny and 24°C where you are 🌞",
      avatar: AIAvatar,
      timestamp: "10:32 AM",
      isAI: true,
    },
    {
      sender: "You",
      message: "Hey, what's the weather like today?",
      avatar: UserAvatar,
      timestamp: "10:30 AM",
      isAI: false,
    },
    {
      sender: "Soul AI",
      message: "It's sunny and 24°C where you are 🌞",
      avatar: AIAvatar,
      timestamp: "10:32 AM",
      isAI: true,
    },
  ];

  const handleFeedbackSubmit = () => {
    setFeedbackOpen(false);
  };




  return (
    <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <Box
        sx={{
            height: "80px",
            display: "flex",
            p: 4,
            justifyContent: "flex-start",
            alignItems: "center",
            top: 0,  
        }}
      >
        <IconButton
            onClick={toggleSidebar}
            sx={{ display: { xs: "block", md: "none" }, mt: 1, mr: 1, color: "primary.main" }}
        >
            <MenuIcon />  
        </IconButton>

        <Typography variant="h5" sx={{ color: "primary.main", fontWeight: "600", textAlign: { xs: 'center', md: 'left' }, }}>
            Bot AI
        </Typography>
      </Box>

      <Box
        sx={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            p: 5,
            gap: 3,
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
      >
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <SuggestedQuests />
        </Box>

        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}>
          <Typography variant="h4" fontWeight={600} mb={3}>
            How Can I Help You Today?
          </Typography>
          <Avatar src={AIAvatar} alt="AI Avatar" sx={{ width: 90, height: 90, boxShadow: "-4px 4px 10px 0px #00000026" }} />
        </Box>
        

        

        {messages.map((msg, idx) => (
          <ChatBubble
            key={idx}
            sender={msg.sender}
            message={msg.message}
            avatar={msg.avatar}
            timestamp={msg.timestamp}
            isAI={msg.isAI}
          />
        ))}
      </Box>

      <Box
        sx={{
            width: "100%",
            py: { xs: 2, md: 1},
            px: { xs: 3, md: 5},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1, md: 3}
        }}
      >
            <TextField 
                sx={{
                    flexGrow: 1,
                    minWidth: { xs: '70%', md: '60%' },
                    maxWidth: { xs: '100%', md: '80%' },
                    width: "80%", 
                    backgroundColor: "secondary.contrastText",
                    height: { xs: "35px", md: '100%' },
                    '& .MuiInputBase-root': {
                        height: '100%',
                        fontSize: { xs: '0.8rem', md: '1rem' },
                    },
                    '& input': {
                        padding: '0 8px',
                    },
                }}
            />
            <Button 
                variant="contained" 
                sx={{
                    height: { sx: "30px", md: "50px"}, 
                    minWidth: { xs: '50px', md: '100px' },
                    boxShadow: "none", 
                    color: "#000000",
                    fontWeight: 600,
                    fontSize: "15px",
                    backgroundColor: "secondary.main"
                }}
            >
                Ask
            </Button>
            <Button 
                variant="contained" 
                onClick={() => setFeedbackOpen(true)}
                sx={{
                    height: { sx: "30px", md: "50px"}, 
                    minWidth: { xs: '50px', md: '100px' }, 
                    boxShadow: "none", 
                    color: "#000000",
                    fontWeight: 600,
                    fontSize: "15px",
                    backgroundColor: "secondary.main"
                }}
            >
                Save
            </Button>
      </Box>

      <FeedbackModal 
        open={feedbackOpen} 
        onClose={() => setFeedbackOpen(false)} 
        onSubmit={handleFeedbackSubmit} 
      />
      
    </Box>
  );
}
