// Import necessary modules
import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar'
import {fadeIn} from '../variants';
//framer motion
import {motion} from 'framer-motion';

const Home = () => {
 
  return (
    <div className=' bg-primary-500/60'>
      <div className='w-full h-full bg-gradient-to-r from-orange/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto'>
          <motion.h1
          variants={fadeIn('down',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
             className='h2 pt-10 xl:pt-3'>
            Bridging the realms of <br />Full Stack Development<br /> {''}
            <span className='text-accent'>& Data Analysis</span>
          </motion.h1>
          {/**subtitle */}
          <motion.p
           variants={fadeIn('down',0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
             className='text-white-500 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            I am a full stack developer and a Data Analyst
            <p>Call:<i> +2348051699966</i></p>
          </motion.p>
          {/**btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
       
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
      xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>

      </div>
       {/**particles */}
       <div> <ParticlesContainer /></div>

       {/**avatar */}
       <motion.div
       variants={fadeIn('down',0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{duration:1, ease: 'easeInOut'}}
            className='w-full h-full max-w-[387px] max-h-[478px] absolute
       rounded-full lg:bottom-6 mb-5 lg:right-[10%]'> 
       <Avatar />
       </motion.div>
     </div>
      
    </div>
  );
};

export default Home;
