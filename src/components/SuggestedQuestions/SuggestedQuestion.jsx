import { Box, Card, Typography } from "@mui/material";

const questions = [
  "Hi, what is the weather?",
  "Hi, what is my location?",
  "Hi, what is the temperature?",
  "Hi, how are you?",
];

export default function SuggestedQuestions() {
  return (
    <Box
      sx={{
        width: '100%',
        height: "100%",
        mx: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'center',
      }}
    >
      {questions.map((question, index) => (
        <Box
          key={index}
          sx={{
            flex: {xs: '1 1 100%', sm:'1 1 calc(50% - 24px)'},
            minWidth: '250px',
          }}
        >
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 2,
              boxShadow: "0px 4px 10px 0px #00000026",

            }}
          >
            <Typography fontWeight={600}>
              {question}
            </Typography>
            <Typography color="text.secondary" mt={1}>
              Get immediate AI generated response
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
