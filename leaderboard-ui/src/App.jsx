import { useEffect, useState } from "react";
import axios from "axios";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Podium from "./components/Podium";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const topThree = users.slice(0, 3);
  const rest = users.slice(3);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        🏆 Leaderboard System
      </h1>

      <UserSelector
        users={users}
        onUserSelect={setSelectedUserId}
        fetchUsers={fetchUsers}
      />

      <ClaimButton userId={selectedUserId} onClaim={fetchUsers} />

      <Podium topThree={topThree} />

      <Leaderboard users={rest} />
    </div>
  );
}

export default App;
