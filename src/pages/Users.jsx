import { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { TextField, Grid, Alert } from "@mui/material";
import { fetchUsers } from "../services/api.js";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(err => setError(err.message));
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ padding: "20px" }}>
      <h2>Список користувачів</h2>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Пошук"
        variant="outlined"
        value={query}
        onChange={e => setQuery(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <Grid container spacing={2}>
        {filtered.map(u => (
          <Grid item key={u.id}>
            <UserCard user={u} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
