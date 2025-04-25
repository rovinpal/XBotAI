import { Avatar, Box, Typography, Rating } from '@mui/material';

export default function ChatCard({ details }) {
    const { sender, message, avatar, timestamp, isAI, feedback, rating } = details;

    return (
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
                alignItems: "flex-start"
            }}
        >
            <Avatar src={avatar} alt={sender} sx={{ width: 80, height: 80 }} />

            <Box>
                <Typography fontWeight={600} sx={{mb: 1}}>{sender}</Typography>
                <Typography>{message}</Typography>
                <Typography mt={1} color="#0000009E">{timestamp}</Typography>

                {isAI && rating > 0 && (
                    <Box pt={1}>
                        <Typography fontSize={15} mb={0.5} mt={1}>Rating:</Typography>
                        <Rating value={rating} readOnly />
                    </Box>
                )}

                {isAI && feedback && (
                    <Box mt={1}>
                        <Typography fontSize={15}><strong>Feedback:</strong> {feedback}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
