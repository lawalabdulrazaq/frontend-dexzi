import RewardsDashboard from "../components/RewardsDashboard";
import TransactionHistory from "../components/TransactionHistory";
import logo from "../assets/logo.png";

export default function Dashboard() {
  return (
    <div className="px-6 py-10 space-y-8 text-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Dexzikon Logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <RewardsDashboard />
      <TransactionHistory />
    </div>
  );
}
