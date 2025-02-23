import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get("amount");
  const recipient = searchParams.get("recipient");

  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  return Response.json({
    success: true,
    message: `Successfully paid $${amount} to ${recipient}`,
  });
}
