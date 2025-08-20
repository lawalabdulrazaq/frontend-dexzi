import React from "react";
import WalletConnect from "./WalletConnect";
import logo from "../assets/dex.png";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Dexzikon" className="h-10 w-10 rounded-full" />
        <span className="font-bold text-xl">Dexzikon</span>
      </div>
      <WalletConnect />
    </nav>
  );
};

export default Navbar;
