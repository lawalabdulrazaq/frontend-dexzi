import logo from "../assets/dex.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-white">
      <img src={logo} alt="Dexzikon Logo" className="w-24 h-24 mb-6" />
      <h1 className="text-4xl font-bold">Welcome to Dexzikon</h1>
      <p className="mt-4 text-lg text-white/80 max-w-2xl">
        Simplify staking and rewards on Solana with Dexzikon. Deposit, stake, and track your earnings effortlessly.
      </p>
    </div>
  );
}
