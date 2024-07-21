import { Inter } from "next/font/google";
import './globals.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js Dashboard",
  description: "My first next js application",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
