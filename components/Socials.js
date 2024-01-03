import Link from "next/link";
import {RiYoutubeLine,
  RiLinkedInBoxLine ,
  RiGithubLine,
  RiLinkedinBoxFill} from 'react-icons/ri';
 
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
     <Link href={'https://github.com/Cpukka'} className="hover:text-accent transition-all duration-300">
       <RiGithubLine />
       </Link>
       <Link href={'https://linkedin.com/in/chimaobi-uboegbu-401ba27a/'} className="hover:text-accent transition-all duration-300">
       <RiLinkedinBoxFill />
       </Link>
      
    </div>
  )
};

export default Socials;
