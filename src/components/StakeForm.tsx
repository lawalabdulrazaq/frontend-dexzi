import { useState } from "react";

export default function StakeForm() {
  const [stakeAmount, setStakeAmount] = useState("");

  const handleStake = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Stake:", stakeAmount);
  };

  return (
    <form onSubmit={handleStake} className="bg-white/20 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-white text-lg font-bold">Stake Tokens</h2>
      <input
        type="number"
        placeholder="Stake amount"
        value={stakeAmount}
        onChange={(e) => setStakeAmount(e.target.value)}
        className="w-full px-3 py-2 rounded-lg"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Stake
      </button>
    </form>
  );
}
