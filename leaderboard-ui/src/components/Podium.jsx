export default function Podium({ topThree }) {
  if (!topThree.length) return null;

  const medalColors = ["gold", "silver", "bronze"];

  return (
    <div className="flex justify-around items-end mb-6">
      {topThree.map((user, idx) => (
        <div
          key={user._id}
          className="flex flex-col items-center"
        >
          <div
            className={`w-16 h-16 rounded-full border-4 mb-2`}
            style={{ borderColor: medalColors[idx] }}
          >
            <div className="text-center pt-4 font-bold">{user.name[0]}</div>
          </div>
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-gray-600">{user.totalPoints} pts</div>
          <div className="text-xs text-gray-500">#{idx + 1}</div>
        </div>
      ))}
    </div>
  );
}
