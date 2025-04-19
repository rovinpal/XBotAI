import { useState } from "react";
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightBulbIcon from "../../assets/lightbulb-icon.png";
import CloseIcon from "@mui/icons-material/Close";
import RatingModal from "../RatingModal/RatingModal";

export default function FeedbackModal({ open, onClose }){
    const [showRating, setShowRating] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        setShowRating(true);
    }

    const handleRatingClose  = () => {
        setShowRating(false);
        onclose();
    }

    return (
        <>
            <Modal 
                open={open} 
                onClose={onClose}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(2px)",
                    // backgroundColor: "rgba(255,255,255,0.8)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "#F0EAFF ",
                        width: "750px",
                        height: "350px",
                        py: 1,
                        px: 3,
                        borderRadius: "10px",
                        boxShadow: "20",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2
                        }}
                    >
                        <Box
                            component="img"
                            src={LightBulbIcon}
                            alt="Light bulb"
                        />
                        <Typography sx={{fontSize: "20px", fontWeight: "600"}}>
                            Provide Additional Feedback
                        </Typography>

                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <TextField 
                        fullWidth
                        variant="outlined"
                        rows={7}
                        multiline
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        sx={{
                            mb: 2,
                            backgroundColor: "#FFFFFF",
                            borderRadius: "10px",
                            border: "1px solid #00000073",
                            '& .MuiOutlinedInput-root': {
                                alignItems: 'flex-start',
                            },
                        }}
                    />

                    <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                        <Button 
                            variant="contained" 
                            onClick={handleSubmit}
                            sx={{
                                width: "150px",
                                height: "50px",
                                fontSize: "20px",
                                backgroundColor: "secondary.main",
                                color: "text.primary",
                                fontWeight: "600"
                            }}
                        >
                            Submit
                        </Button>
                    </Box> 
                </Box>
            </Modal>

            <RatingModal open={showRating} onClose={handleRatingClose} />
        </>
    );
}
