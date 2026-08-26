import Image from "next/image";
import BlogCard from "@/components/BlogCard"

export default function Home() {
  return (
    <div >
      
      <h2>ยินดีต้อนรับเข้าสู่เว็ปไซต์</h2>
      <p>โดย สุวพิชญ์ ปุระวัฒน์</p>

      <BlogCard/>
      
    </div>
  );
}
