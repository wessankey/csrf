import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          const cookieStore = await cookies();
          cookieStore.set("session", "123", { httpOnly: true });
          redirect("/dashboard");
        }}
      >
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
