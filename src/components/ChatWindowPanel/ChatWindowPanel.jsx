import { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Avatar, TextField, IconButton, Snackbar, Divider } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SuggestedQuests from "../SuggestedQuestions/SuggestedQuestion";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import ChatBubble from "../ChatBubble/ChatBubble";
import ChatHistoryCard from "../ChatHistoryCard/ChatHistoryCard";
import sampleData from "../../aiData/sampleData.json";
import UserAvatar from "../../assets/user-avatar.png";
import AIAvatar from "../../assets/ai-avatar.png";
// import HistoryPage from "../../pages/HistoryPage";


export default function Chatwindow({ toggleSidebar, isHistoryPage = false }) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const location = useLocation();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleAsk = (e, customInput = null) => {
    if (e) e.preventDefault();
  
    const messageToSend = customInput || input;
    const trimmed = messageToSend.toLowerCase().trim();

    if (!trimmed) return;
  
    const userMessage = {
      sender: "You",
      message: messageToSend,
      avatar: UserAvatar,
      timestamp: new Date().toLocaleTimeString(),
      isAI: false,
    };
  
    const matched = sampleData.find(item =>
      trimmed.toLowerCase().replace(/[.,!?]/g, '') === item.question.toLowerCase().replace(/[.,!?]/g, '')
    );
  
    const aiMessage = {
      sender: "Soul AI",
      message: matched ? matched.response : "Sorry, Did not understand your query!",
      avatar: AIAvatar,
      timestamp: new Date().toLocaleTimeString(),
      isAI: true,
      feedback: "",
      rating: 0
    };
  
    setMessages(prev => [...prev, userMessage]);
    setTimeout(() => {
      setMessages(prev => [...prev, aiMessage]);
    }, 0);
    setInput("");
  };

  const updateFeedbackForMessage = (index, feedback, rating = 0) => {
    setMessages(prevMessages => {
      const newMessages = [...prevMessages];
      newMessages[index] = {
        ...newMessages[index],
        feedback,
        rating
      };
      return newMessages;
    });
  };


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  

  const handleFeedbackSubmit = () => {
    setFeedbackOpen(false);
  };

  const handleSuggestedClick = (question) => {
    setInput(question); 
    handleAsk(null, question); 
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.reset) {
      setMessages([]);
    }
  }, [location]);


  const handleSave = () => {
    const chat_history = JSON.parse(localStorage.getItem('chat')) || [];  
    const date = new Date();  
    const newChat = [{ chat: messages, datetime: date }, ...chat_history];  
    localStorage.setItem('chat', JSON.stringify(newChat));  
    console.log('Saved data:', newChat);

    setShowSnackbar(true);
    setMessages([]);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
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

        <header>
          <Typography variant="h5" component="h1" sx={{ color: "primary.main", fontWeight: "600", textAlign: { xs: 'center', md: 'left' }, }}>
            {isHistoryPage ? "Conversation History" : "Bot AI"}
          </Typography>
        </header>
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

        {isHistoryPage ? (
          <>
            {(() => {
              const history = JSON.parse(localStorage.getItem('chat')) || [];

              return history.length === 0 ? (
                <Typography>No past chats found.</Typography>
              ) : (
                history.map((details, index) => (
                  <Box key={index} width="100%">
                    <ChatHistoryCard details={details} />
                    <Divider sx={{ my: 5, borderColor: "#9C9C9C" }} />
                  </Box>
                ))
              );
            })()}
          </>
        ) : (
          messages.length === 0 ? (
            !isHistoryPage && (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                gap: 5
              }}
            >
              <Box 
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
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
                  }}
              >
                  <SuggestedQuests onSelect={handleSuggestedClick} />
              </Box>
            </Box>   
            )
          ) : (
            messages.map((msg, idx) => (
              <ChatBubble
                key={idx}
                sender={msg.sender}
                message={msg.message}
                avatar={msg.avatar}
                timestamp={msg.timestamp}
                isAI={msg.isAI}
                feedback={msg.feedback}
                rating={msg.rating}
                onFeedbackSubmit={(feedback, rating) => updateFeedbackForMessage(idx, feedback, rating)}
              />
            ))
          )
        )}
      </Box>

      {!isHistoryPage && (
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
                    placeholder= "Message Bot AI..."
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
                    onClick={handleSave}
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
      )}



      <FeedbackModal 
        open={feedbackOpen} 
        onClose={() => setFeedbackOpen(false)} 
        onSubmit={handleFeedbackSubmit} 
      />

      <Snackbar
        open={showSnackbar}
        message="Chat saved."
        onClose={() => setShowSnackbar(false)}
        action={
          <Link to="/history">
            <Button size="small" sx={{ color: "secondary.main" }}>See past conversations</Button>
          </Link>
        }
      />

    </Box>
  );
}
