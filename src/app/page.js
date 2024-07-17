import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-color1">
      <h1 className="text-5xl font-extralight">Home Page</h1>
      <Link className=" bg-color2 text-white py-2 px-3 rounded-lg shadow-md mt-8" href="/dashboard">Go To Dashboard</Link>
    </div>
  );
}
