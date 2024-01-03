import Image from "next/image";

const Avatar = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/mepic.jpg'} 
    width={737} 
    height={678} 
    alt="" 
    className="translate-z-0 w-full h-full rounded-lg border border-r-amber-500"/>
  </div>
  )
};

export default Avatar;
