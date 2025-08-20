import { useState } from "react";

export default function DepositForm() {
  const [amount, setAmount] = useState("");

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Deposit:", amount);
  };

  return (
    <form onSubmit={handleDeposit} className="bg-white/20 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-white text-lg font-bold">Deposit Funds</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-3 py-2 rounded-lg"
      />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        Deposit
      </button>
    </form>
  );
}
