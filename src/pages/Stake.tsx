import DepositForm from "../components/DepositForm";
import StakeForm from "../components/StakeForm";

export default function Stake() {
  return (
    <div className="px-6 py-10 space-y-6 text-white">
      <h1 className="text-3xl font-bold">Stake Your Assets</h1>
      <DepositForm />
      <StakeForm />
    </div>
  );
}
