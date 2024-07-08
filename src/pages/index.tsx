import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-[40px] text-center font-bold">Landing Page</h1>
    </div>
  );
}
