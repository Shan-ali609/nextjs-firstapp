import Image from "next/image";
import Herosection from "../components/Herosection";
import Seosection from "@/components/Seosection";
import Portfoliosection from "@/components/Portfoliosection";
import Parallacsection from "@/components/Parallacsection";

export default function Home() {
  return (
    <>
        <Herosection />
        <Seosection />
        <Portfoliosection />
        <Parallacsection />
    </>
  );
}
