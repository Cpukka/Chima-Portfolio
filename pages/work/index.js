import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';


const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-31 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/**text */}
        <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left
        mb-2 mt-0 xl:mb-0'>
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:mt-'>My Work
          <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>As a passionate and results-driven web and software developer, I take pride in transforming ideas into powerful, user-centric digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in crafting seamless solutions that not only meet but exceed client expectations.</motion.p>
        </div>
        {/**slider */}
        <motion.div
        variants={fadeIn('up', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
         className='w-full xl:max-w-[65%]'>

        
        <WorkSlider />
      </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
