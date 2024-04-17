import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) redirect("/dashboard");

  redirect("/api/auth/signin?callbackUrl=/dashboard");
}
