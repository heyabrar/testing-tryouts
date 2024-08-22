import Image from "next/image";
import { Inter } from "next/font/google";
import QuillEditor from "../componets/Editor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <QuillEditor />
    </div>
  );
}
