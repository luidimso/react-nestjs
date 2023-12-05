import Link from "next/link";

export default function Home() {
  return <ul>
        
        <li><Link href="news/1">Page 1</Link></li>
        <li><Link href="news/2">Page 2</Link></li>
        <li><Link href="news/3">Page 3</Link></li>
    </ul>;
}
