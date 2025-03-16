import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then(() => navigate("/payment"))
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <main className="flex justify-center bg-gray-50 h-screen w-full">
      <Card className="w-[350px] h-[330px] mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              className="mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              className="mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="bg-indigo-600 hover:bg-indigo-700 mt-6 w-full"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};
