import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import AIAvatar from "../../assets/ai-pic.png";
import NewChatIcon from "../../assets/newchat-icon.png";

export default function ChatHistory({ onClose }) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Link to="/" state={{ reset: true }} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover":{
              backgroundColor: "primary.light",
              cursor: "pointer"
            }
          }}
        >
          
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              <Avatar src={AIAvatar} alt="Soul AI" sx={{ mr: 3 }} />
              <Typography variant="h5" sx={{ fontWeight: "600", color: "#000000" }}>New Chat</Typography>
          </Box>

          <IconButton 
            size="small" 
            sx={{ ml: 3, mr: 1 }}  
          >
              <img src={NewChatIcon} alt="New Chat" width={30} height={30} />
          </IconButton>

          <IconButton
            onClick={onClose}
            sx={{ display: { xs: "inline-flex", md: "none" }, ml: 3 }}
          >
            <CloseIcon />
          </IconButton>

        </Box>
      </Link>


      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          pt: 3,
          px: 2,
          backgroundColor: "secondary.contrastText",
        //   height: "auto",
        }}
      >
        <Link to={isHomepage ? "/history" : "/"} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              '&:hover': {
                // backgroundColor: "primary.light",
                boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)",
              }
            }}
          >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: "600", 
                  color: "#414146",
                  textAlign: "center" 
                }}
              >
                {isHomepage ? "Past Conversations" : "Back to Chat"}
              </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

