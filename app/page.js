import Image from "next/image";
import ProfileBox from "@/components/profileBox";
import Article from "@/components/article";


export default function Home() {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="basis-1/3 ProfileBox max-sm:flex max-sm:flex-row ">
        <ProfileBox />
      </div>
      <div className=" basis-2/3">
        <Article />
      </div>
    </div>
  );
}
