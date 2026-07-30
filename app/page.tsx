import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchBox from "@/components/home/SearchBox";
import BrandGrid from "@/components/home/BrandGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <BrandGrid />
    </>
  );
}