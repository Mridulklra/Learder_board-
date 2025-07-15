import axios from "axios";

export default function ClaimButton({ userId, onClaim }) {
  const claimPoints = async () => {
    if (!userId) return alert("Please select a user first.");
    try {
      const res = await axios.post(`http://localhost:5000/api/claim/${userId}`);
      alert(`🎉 ${res.data.points} points claimed!`);
      onClaim(); // Refresh leaderboard
    } catch (err) {
      console.error(err);
      alert("Error claiming points.");
    }
  };

  return (
    <button
      onClick={claimPoints}
      className="bg-green-600 text-white px-4 py-2 rounded mb-4"
    >
      Claim Points
    </button>
  );
}
