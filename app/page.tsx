import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth/login");

  // return (
  //   <main className="prose">
  //     <div>
  //       <h1>Hello world</h1>
  //     </div>
  //   </main>
  // );
}
