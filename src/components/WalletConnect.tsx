import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletConnect: React.FC = () => {
  return (
    <div className="flex justify-center">
      <WalletMultiButton className="bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white px-4 py-2 rounded-xl shadow-lg hover:opacity-90 transition" />
    </div>
  );
};

export default WalletConnect;
