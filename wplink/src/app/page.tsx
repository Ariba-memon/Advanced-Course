import Image from "next/image";
import Link from "next/link";
import WhatsAppicon from '../../public/WhatsApp_icon.webp'
export default function Home() {
  return (
<div>
  <Link href='https://wa.me/+923330000000' target="blank" >
 <Image className="relative m-96 " alt="whatsapp" width={60} height={60} src={WhatsAppicon} /></Link>
</div>
  );
}
