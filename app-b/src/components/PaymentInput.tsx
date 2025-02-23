import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

export const PaymentInput = ({
  amount,
  setAmount,
}: {
  amount: string;
  setAmount: (amount: string) => void;
}) => {
  const formatAmount = (value: string) => {
    const cleaned = value.replace(/[^0-9.]/g, "");

    const parts = cleaned.split(".");
    if (parts.length > 2) return amount;

    if (parts[1]?.length > 2) {
      return `${parts[0]}.${parts[1].slice(0, 2)}`;
    }

    return cleaned;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAmount(e.target.value);
    setAmount(formatted);
  };

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="amount">Amount</Label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="amount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmountChange}
          className="pl-9"
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.]?[0-9]{0,2}"
          required
          aria-describedby="amount-description"
        />
      </div>
    </div>
  );
};
