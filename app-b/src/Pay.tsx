import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { PaymentInput } from "./components/PaymentInput";

export const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSubmit = () => {
    fetch(
      `https://westonsankey-csrf-service-b.fly.dev/api/pay?amount=${amount}&recipient=${recipient}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log("log:data:", data));
  };

  return (
    <main className="flex justify-center bg-gray-50 h-screen w-full">
      <Card className="w-[350px] h-[330px] mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Transfer Funds</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mt-4">
            <PaymentInput amount={amount} setAmount={setAmount} />
          </div>

          <div className="mt-4">
            <Label htmlFor="amount">Recipient</Label>
            <div className="mt-2">
              <Select onValueChange={setRecipient}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a recipient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buster@bluth.com">Buster Bluth</SelectItem>
                  <SelectItem value="lucille@bluth.com">
                    Lucille Bluth
                  </SelectItem>
                  <SelectItem value="stan@sitwell.com">Stan Sitwell</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 mt-6 w-full"
          >
            Pay
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};
