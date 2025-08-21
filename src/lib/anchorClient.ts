// import * as anchor from "@coral-xyz/anchor";
// import { connection, programId } from "./solana";
// import { useWallet } from "@solana/wallet-adapter-react";

// export function getAnchorClient() {
//   // Use the useWallet hook to get the full wallet adapter object
//   const wallet = useWallet();

//   if (!wallet.publicKey) {
//     throw new Error("Wallet not connected");
//   }

//   // Pass the wallet adapter object directly to the AnchorProvider
//   const provider = new anchor.AnchorProvider(connection, wallet as any, {
//     preflightCommitment: "processed",
//   });

//   // Import your Dexzikon IDL JSON here
//   const idl = require("../idl/dexzikon.json");

//   return new anchor.Program(idl as anchor.Idl, programId, provider);
// }