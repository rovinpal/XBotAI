import { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Avatar, TextField, IconButton  } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SuggestedQuests from "../SuggestedQuestions/SuggestedQuestion";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import ChatBubble from "../ChatBubble/ChatBubble";
import sampleData from "../../aiData/sampleData.json";
import UserAvatar from "../../assets/user-avatar.png";
import AIAvatar from "../../assets/ai-avatar.png";


export default function Chatwindow({ toggleSidebar }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const handleAsk = (e) => {
    e.preventDefault();
  
    if (!input.trim()) return;
  
    const userMessage = {
      sender: "You",
      message: input,
      avatar: UserAvatar,
      timestamp: new Date().toLocaleTimeString(),
      isAI: false,
    };
  
    const matched = sampleData.find(item =>
      item.question.toLowerCase().trim().includes(input.toLowerCase().trim())
    );
  
    const aiMessage = {
      sender: "Soul AI",
      message: matched ? matched.response : "Sorry, Did not understand your query!",
      avatar: AIAvatar,
      timestamp: new Date().toLocaleTimeString(),
      isAI: true,
    };
  
    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput("");
  };


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  

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
        ref={chatContainerRef}
        sx={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "flex-end",
            alignItems: "center",
            p: 5,
            gap: 3,
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
      >

        {messages.length === 0 && (
          <>
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

            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <SuggestedQuests />
            </Box>
          </>
        )}



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


      <Box component= "form" onSubmit={handleAsk} sx={{ width: "100%" }}>
        <Box
          sx={{
              width: "100%",
              py: { xs: 2, md: 1},
              px: { xs: 3, md: 5},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, md: 3},
              mb: 1
          }}
        >
              <TextField
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder= "Message Bot AI…"
                  sx={{
                      flexGrow: 1,
                      minWidth: { xs: '70%', md: '60%' },
                      maxWidth: { xs: '100%', md: '80%' },
                      width: "80%", 
                      backgroundColor: "secondary.contrastText",
                      height: { xs: "35px", md: '50px' },
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
                  type="submit"
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
                  type="button"
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
      </Box>


      <FeedbackModal 
        open={feedbackOpen} 
        onClose={() => setFeedbackOpen(false)} 
        onSubmit={handleFeedbackSubmit} 
      />
      
    </Box>
  );
}
