export default function Leaderboard({ users }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Other Rankings</h2>
      <div className="space-y-2">
        {users.map((user, idx) => (
          <div
            key={user._id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div className="text-gray-600 font-semibold">#{idx + 4}</div>
            <div>{user.name}</div>
            <div className="text-sm text-gray-700">{user.totalPoints} pts</div>
          </div>
        ))}
      </div>
    </div>
  );
}
