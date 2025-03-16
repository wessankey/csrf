import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownToLine, Share2 } from "lucide-react";
import { useNavigate } from "react-router";

export const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex justify-center bg-gray-50 h-screen w-full">
      <Card className="w-[350px] h-[260px] mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Payment Successful</CardTitle>
        </CardHeader>

        <CardContent>
          <p>Your payment was successful.</p>

          <div className="flex flex-col gap-2 mt-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => navigate("/payment")}
                className="w-full"
              >
                <Share2 />
                Share
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/payment")}
                className="w-full"
              >
                <ArrowDownToLine />
                Receipt
              </Button>
            </div>
            <Button
              onClick={() => navigate("/payment")}
              className="bg-indigo-600 hover:bg-indigo-700 w-full mt-2"
            >
              Make another payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
