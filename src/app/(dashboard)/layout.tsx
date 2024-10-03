import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        <div className="h-screen flex">
          {/* LEFT */}
          <div className="w-[14%] md:w-[8%] xl:w-[16%] p-4">
            <Link href="/" className="flex items-center justify-center lg:justify-start  gap-2">
              <Image src="/logo.png" alt="" width={32} height={32} className="font-bold"/>
              <span className="hidden lg:block">SchooLama</span>
            </Link>
            <Menu/>
          </div>
          {/* RIGHT */}
          <div className="w-[86%] md:w-[92%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
    );
  }