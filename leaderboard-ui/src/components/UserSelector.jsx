import { useState } from "react";
import axios from "axios";

export default function UserSelector({ users, onUserSelect, fetchUsers }) {
  const [selected, setSelected] = useState("");
  const [newUser, setNewUser] = useState("");

  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    await axios.post("http://localhost:5000/api/users", { name: newUser });
    setNewUser("");
    fetchUsers();
  };

  return (
    <div className="mb-4">
      <select
        className="border px-2 py-1"
        onChange={(e) => {
          setSelected(e.target.value);
          onUserSelect(e.target.value);
        }}
        value={selected}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <div className="mt-2 flex gap-2">
        <input
          className="border px-2 py-1 flex-1"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Add new user"
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleAddUser}
        >
          Add
        </button>
      </div>
    </div>
  );
}
