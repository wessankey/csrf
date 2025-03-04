import { Hono } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://wessankey-payment-app.up.railway.app/",
    ],
    allowMethods: ["POST"],
    credentials: true,
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/api/login", async (c) => {
  setCookie(c, "sessionId", "123", {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
  });
  return c.json({ message: "Login successful" }, 200);
});

app.get("/api/pay", async (c) => {
  const sessionId = getCookie(c, "sessionId");
  if (!sessionId) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const amount = c.req.query("amount");
  const recipient = c.req.query("recipient");

  return c.json(
    {
      message: `Payment of ${amount} to ${recipient} successful`,
    },
    200
  );
});

const port = 3001;
console.log(`Server running on port ${port}`);

export default {
  port,
  fetch: app.fetch,
};
