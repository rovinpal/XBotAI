import { useState } from "react";
import { Avatar, Box, Typography, IconButton, Rating } from "@mui/material";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt"; 


export default function ChatBubble({ sender, message, avatar, timestamp, isAI = false,
    feedback: initialFeedback = "", rating: initialRating = 0, onFeedbackSubmit
}) {
    const [showFeedback, setShowFeedback] = useState(false);
    const [rating, setRating] = useState(initialRating);
    const [isThumbsUp, setIsThumbsUp] = useState(false);
    const [isThumbsDown, setIsThumbsDown] = useState(false);
    const [feedback, setFeedback] = useState(initialFeedback);

    const handleThumbsUp = () => {
        setIsThumbsUp(true);
        setIsThumbsDown(false); 
    };

    const handleThumbsDown = () => {
        setShowFeedback(true);
        setIsThumbsDown(true);
        setIsThumbsUp(false); 
    };
    
    const handleFeedbackSubmit = (submittedFeedback) => {
        setFeedback(submittedFeedback);
        onFeedbackSubmit(submittedFeedback, rating);
        setShowFeedback(false);
    };

    return (
        <>
            <Box 
                sx={{
                    width: "100%",
                    backgroundColor: "#D7C7F460",
                    borderRadius: "20px",
                    p: 3,
                    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 2,
                    alignItems: "flex-start",
                    '&:hover .feedback-btns': {
                        visibility: 'visible',
                        opacity: 1
                    }
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
                    <Typography component= "span" sx={{ color: "text.primary", fontWeight: "600" }}>
                        {sender}
                    </Typography>

                    <Typography component="p">
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
                        <Box
                            visibility={{ xs: 'visible', md: 'hidden' }}
                            className='feedback-btns'
                            sx={{
                                opacity: { xs: 1, md: 0 },
                                transition: 'opacity 400ms ease',
                            }}
                        >
                            <IconButton size="small" onClick={handleThumbsUp}>
                                {isThumbsUp ? <ThumbUpAltIcon fontSize="small" /> : <ThumbUpAltOutlinedIcon fontSize="small" />}
                                {/* <ThumbUpAltOutlinedIcon fontSize="small" /> */}
                            </IconButton>
                            <IconButton size="small" onClick={handleThumbsDown}>
                                {isThumbsDown ? <ThumbDownAltIcon fontSize="small" /> : <ThumbDownAltOutlinedIcon fontSize="small" />}
                                {/* <ThumbDownAltOutlinedIcon fontSize="small" /> */}
                            </IconButton>
                        </Box>
                        )}
                    </Box>

                    {isThumbsUp && (
                        <Box pt={1}>
                            <Typography fontSize={15} mb={0.5}>Rate this response:</Typography>
                            <Rating
                                name="feedback-rating"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                    onFeedbackSubmit(feedback, newValue);
                                }}
                            />
                        </Box>
                    )}

                    {feedback && isThumbsDown && (
                        <Box pt={1}>
                            <Typography fontSize={15}>
                                <strong>Feedback:</strong> {feedback}
                            </Typography>
                        </Box>
                    )}

                </Box>
            </Box>

            {showFeedback && (
                <FeedbackModal
                    open={showFeedback}
                    onClose={() => setShowFeedback(false)}
                    onSubmit={handleFeedbackSubmit}
                />
            )}
        </>
    )
}