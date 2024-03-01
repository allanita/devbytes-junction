import { redirect } from "next/navigation";

export default function Home() {
  redirect("/api/auth/signin?callbackUrl=/dashboard");

  // return (
  //   <main className="prose">
  //     <div>
  //       <h1>Hello world</h1>
  //     </div>
  //   </main>
  // );
}
