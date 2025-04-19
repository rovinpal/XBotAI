import { Avatar, Box, Typography, IconButton } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined"; 


export default function ChatBubble({ sender, message, avatar, timestamp, isAI = false}) {

    return (
        <Box 
            sx={{
                width: "100%",
                backgroundColor: "#D7C7F460",
                borderRadius: "20px",
                p: 2,
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
                alignItems: "center"
            }}
        >

            <Avatar src={avatar} alt={avatar} sx={{ width: 80, height: 80 }}/>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1
                }}
            >
                <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
                    {sender}
                </Typography>

                <Typography>
                    {message}
                </Typography>
            
                <Box 
                    sx={{ 
                        color: " #0000009E", 
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 3,
                    }
                }>
                    <Typography>
                        {timestamp}
                    </Typography>

                
                    {isAI && (
                    <Box>
                        <IconButton size="small">
                            <ThumbUpAltOutlinedIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                            <ThumbDownAltOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    )}
                </Box>

            </Box>

        </Box>
    )
}