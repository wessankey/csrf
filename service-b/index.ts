import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://westonsankey-csrf-app-b.fly.dev",
    ],
    allowMethods: ["POST"],
    credentials: true,
  })
);

app.post("/api/login", async (c) => {
  setCookie(c, "sessionId", "123", {
    httpOnly: true,
    domain: "westonsankey-csrf-service-b.fly.dev",
    sameSite: "none",
    secure: true,
  });
  return c.json({ message: "Login successful" }, 200);
});

const port = 8080;
console.log(`Server running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
