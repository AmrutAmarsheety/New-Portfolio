import { MainContent } from "@/components";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <main className={inter.className}>
          <MainContent />
        </main>
      </Layout>
    </ThemeProvider>
  );

}
