export function useDexzikon() {
  const deposit = async (amount: number) => {
    console.log(`Depositing ${amount} tokens`);
  };

  const stake = async (amount: number) => {
    console.log(`Staking ${amount} tokens`);
  };

  const getRewards = async () => {
    return 120; // Mock value
  };

  return { deposit, stake, getRewards };
}
