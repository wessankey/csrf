import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const handleSubmit = async () => {
    "use server";
    const cookieStore = await cookies();
    cookieStore.set("session", "123", { httpOnly: true });
    redirect("/dashboard");
  };

  return (
    <main className="flex justify-center bg-gray-50 h-screen w-full">
      <Card className="w-[350px] h-[330px] mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form action={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="text" id="email" className="mt-2" />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" className="mt-2" />
            </div>

            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 mt-6 w-full"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
