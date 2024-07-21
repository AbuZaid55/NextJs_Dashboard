import { Inter } from "next/font/google";
import './globals.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";
import UpdateToken from "./UpdateToken";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js Dashboard",
  description: "My first next js application",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <UpdateToken session={session}/>
        <ToastContainer/>
      </body>
    </html>
  );
}
