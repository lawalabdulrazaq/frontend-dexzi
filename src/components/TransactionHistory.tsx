export default function TransactionHistory() {
  const txs = [
    { id: 1, type: "Deposit", amount: "100 SOL", date: "2025-08-01" },
    { id: 2, type: "Stake", amount: "50 SOL", date: "2025-08-02" },
  ];

  return (
    <div className="bg-white/20 p-6 rounded-xl shadow-md">
      <h2 className="text-white text-lg font-bold mb-2">Transaction History</h2>
      <ul className="text-white text-sm space-y-2">
        {txs.map((tx) => (
          <li key={tx.id} className="flex justify-between">
            <span>{tx.type}</span>
            <span>{tx.amount}</span>
            <span>{tx.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
