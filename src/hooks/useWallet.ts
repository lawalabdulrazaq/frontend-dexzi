import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

export const useWallet = () => {
  const { publicKey, connected, connect, disconnect, signTransaction, signMessage } = useSolanaWallet();

  return {
    publicKey,
    connected,
    connect,
    disconnect,
    signTransaction,
    signMessage,
  };
};
