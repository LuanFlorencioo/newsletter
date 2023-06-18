import Image from "next/image";
import iconList from "/public/images/icon-list.svg";

interface iItemProps {
  children: React.ReactNode
}

const Item = ({ children }: iItemProps) => {
  return (
    <li className="w-full flex items-start gap-4 font-normal text-base text-grey-100">
      <Image src={iconList} alt="icon check" />
      
      {children}
    </li>
  )
}

export default Item;
