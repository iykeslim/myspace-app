import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/Layout.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl text-center">Welcome to Your Next.js App</h1>
      <p className="text-lg text-center mt-4">
        This is your main content area!
      </p>
    </Layout>
  )
}
