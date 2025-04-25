import { Box } from "@mui/material";
import ChatBubble from "../ChatBubble/ChatBubble"; 

export default function ChatCard({ userMessage, aiMessage, avatar, timestamp, sender }) {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#D7C7F460",
                borderRadius: "20px",
                p: 3,
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "flex-start",
            }}
        >
            <ChatBubble
                sender={sender}
                message={userMessage}
                avatar={avatar}
                timestamp={timestamp}
                isAI={false}
            />

            {/* <Divider sx={{ my: 1 }} /> */}

            <ChatBubble
                sender="AI"
                message={aiMessage}
                avatar={avatar}
                timestamp={timestamp}
                isAI={true}
                
            />
        </Box>
    );
}
