import { useState } from "react";
import { Box } from "@mui/material";
import ChatHistoryPanel from "../components/ChatHistoryPanel/ChatHistoryPanel";
import ChatWindowPanel from "../components/ChatWindowPanel/ChatWindowPanel";

export default function HomePage() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(prev => !prev);
    };


    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                background:{
                    sx: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
                    md: "linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)"
                }
            }}
        >
            <Box
                sx={{
                    width: { xs: showSidebar ? "70%" : "0", md: "20%" },
                    display: { xs: showSidebar ? "block" : "none", md: "block" },
                    position: { xs: "absolute", md: "relative" },
                    zIndex: 20,
                    height: "100%",
                    transition: "all 0.3s ease-in-out",
                    boxShadow: { xs: 3, md: 0 },
                }}
            >
                <ChatHistoryPanel onClose={() => setShowSidebar(false)}/>
            </Box>

            <Box
                sx={{
                width: { xs: "100%", md: "80%" },
                overflow: "hidden",
                }}
            >
                <ChatWindowPanel toggleSidebar={toggleSidebar} isHistoryPage={false}/>
            </Box>
        </Box>
    );
}
