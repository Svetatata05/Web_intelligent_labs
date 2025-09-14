// src/components/UserCard.jsx
import { Card, CardContent, Typography } from "@mui/material";

export default function UserCard({ user }) {
  return (
    <Card sx={{ width: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography>{user.phone}</Typography>
      </CardContent>
    </Card>
  );
}
