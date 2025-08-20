import * as anchor from "@coral-xyz/anchor";
import { connection, programId } from "./solana";
import { Wallet } from "@coral-xyz/anchor";

// This function expects a wallet adapter (not just PublicKey)
export function getAnchorClient(wallet: Wallet) {
  if (!wallet.publicKey) throw new Error("Wallet not connected");

  const provider = new anchor.AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });

  // Import your Dexzikon IDL JSON here instead of {}
  const idl = require("../idl/dexzikon.json");

  return new anchor.Program(idl as anchor.Idl, programId, provider);
}
