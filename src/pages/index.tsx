import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const list = [
    {
      id: 1,
      title: "Charts",
      link: "/charts",
    },
    {
      id: 2,
      title: "React Quill Editor",
      link: "/react-quill",
    },
    {
      id: 3,
      title: "Redux Persist",
      link: "/redux",
    },
  ];

  return (
    <>
      <Head>
        <title>Testing Tryouts</title>
      </Head>

      <div>
        <h1 className="text-[40px] text-center font-bold">Testing Tryouts</h1>
        <ul className="w-[30%] mx-auto mt-4">
          {list?.map((item) => {
            return (
              <li className="underline mt-2" key={item?.id}>
                <Link href={item?.link}>{item?.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
