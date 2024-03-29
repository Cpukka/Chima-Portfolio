import {BsArrowRight} from 'react-icons/bs';
import Circles from '/components/Circles';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return <div className="h-full bg-primary/30">
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
    {/**text & form */}
      <div className="flex flex-col w-full max-w-[700px] bg-pink-500/10">
        <motion.h2
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        exit='hidden'
        animate='show' 
        className=" h2 text-center mb-12">
          Let us <span className='text-accent'>connect.</span>
        </motion.h2>
        {/**form */}
        <motion.form
         variants={fadeIn('up', 0.4)}
        initial='hidden'
        exit='hidden'
        animate='show'  
        className=" flex-1 flex flex-col gap-6 w-full mx-auto">
          {/**group */}
          <div className="flex gap-x-6 w-full" >
            <input type='text'placeholder="name" className ='input' />
            <input type="text" placeholder="email" className ='input' />
          </div>
          <input className="input" type="text" placeholder="subject" />
          <textarea placeholder="message" className="textarea"></textarea>
          <button className='btn rounded-full border border-white/50 max-w-[170px]
          px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className=' group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Talk to us</span>
            <BsArrowRight className='-translate-y-[128px] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
            absolute text-[22px]' />
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
