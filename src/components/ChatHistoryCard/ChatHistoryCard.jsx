import { Box, Typography, Stack } from '@mui/material';
import { format, isEqual, startOfDay, add } from 'date-fns';
import ChatCard from './ChatCard';

export default function ChatHistoryCard({ details }) {
  const formatDate = (date) => {
    const today = startOfDay(new Date());

    if (isEqual(date, today)) {
      return `Today's chats`;
    } else if (isEqual(today, add(date, { days: 1 }))) {
      return `Yesterday's chats`;
    } else {
      return format(date, 'do LLL yyyy');
    }
  };

  const groupedChats = [];
  for (let i = 0; i < details.chat.length; i += 2) {
    const user = details.chat[i];
    const ai = details.chat[i + 1];
    if (user && ai) {
      groupedChats.push({ user, ai });
    }
  }

  return (
    <Box>
      <Typography fontWeight={700} mb={2}>
        {formatDate(startOfDay(new Date(details.datetime)))}
      </Typography>

      <Stack spacing={{ xs: 2, md: 3 }}>
        {groupedChats.map((pair, index) => (
          <ChatCard details={pair} readOnly={true} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
 