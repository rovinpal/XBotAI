import {
    Box,
    Typography,
    Modal,
    IconButton,
    Button,
    Rating
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
  
export default function RatingModal({ open, onClose }) {
    const [stars, setStars] = useState(0);
  
    const handleFinish = () => {
        onClose();
    };
  
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 300,
                    bgcolor: "background.paper",
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 24,
                    mx: "auto",
                    mt: "20vh",
                    position: "relative",
                    textAlign: "center",
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", top: 5, right: 5 }}
                >
                    <CloseIcon />
                </IconButton>
        
                <Typography variant="h6" sx={{fontWeight: "600", mt: 3, mb: 2}} gutterBottom>
                    Rate Your Experience
                </Typography>
        
                <Rating
                    name="feedback-rating"
                    value={stars}
                    onChange={(e, newValue) => setStars(newValue)}
                    size="large"
                />
        
                <Box sx={{ mt: 2 }}>
                    <Button 
                        variant="contained" 
                        onClick={handleFinish} 
                        sx={{
                            color: "text.primary", 
                            fontWeight: "600", 
                            fontSize: "15px",
                            backgroundColor: "secondary.main",
                            height: "40px",
                            width: "80px"
                        }}
                    >
                        Done
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
  