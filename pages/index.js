import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "./Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-center ${inter.className}`}
    >
      <Homepage />
    </main>
  );
}

