import Avatar from '../../components/Avatar';
import React, {useState} from 'react';
import {motion} from 'framer-motion'
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaDatabase,
  FaServer

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiGoogleanalytics,
} from "react-icons/si";
import { icons } from 'react-icons';




//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Backend Development',
        icons: [ <FaDatabase/>,<FaServer />],
      },
      {
        title: 'Data Analysis',
        icons: [ <FaDatabase/>,<FaServer />, <SiGoogleanalytics/>],
      },
      
    ],
  },
  {
    title: 'abilities',
    info: [
      {
        title: 'Microsoft Power Platform (PowerApps, Power Automate)  ',
        stage: '',
      },
      {
        title: 'NET Frameworks (4.62, Asp Core 6 and 7) ',
        stage: '',
      },
      {
        title: 'Power BI administration  ',
        stage: '',
      },
      {
        title: 'Client Application systems administration  ',
        stage: '',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Data Analyst - SPACE WATCH AFRICA ',
        stage: '2021 - Present',
      },
      {
        title: 'Web Developer - BODMAS COMPUTER & MANAGEMENT COLLEGE,ABUJA',
        stage: '2017 - 2020',
      },
      {
        title: 'Software Developer/Administrator - HOMELAND SECURE AFRICOM ',
        stage: '2013 - 2017',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - University OF ABUJA, NIGERIA',
        stage: '2012',
      },
      {
        title: 'Computer Operation Diploma - BODMAS COMPUTER AND MANAGEMENT COLLEGE, ABUJA',
        stage: '2009',
      },
     
    ],
  },];

const About = () => {
  const [index, setIndex]=useState(0);
  console.log(index);

  return (
    <div className='h-full bg-primary/30 py-10 text-center xl:text-left'>
      <Circles />

      {/**avatar img */}
      <motion.div
      variants={fadeIn('right',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[350px]'
       >
      {/**<Avatar />*/}
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6'>
      {/**text */}
        <div className='flex-1 flex flex-col justify-center'>

<h2 className='h2'> Incredible <span className='text-accent'> stories</span> and excellent design</h2>
          <p className='max-w-[300px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>8 years ago, i started freelancing as a Developer.
          Since then, i have done remote work for agencies , consulted for for startups, and 
          collaborateed on digital products for business and consumer use.
          
          </p>
             {/**counters */}
             <motion.div 
             variants={fadeIn('right', 0.6)}
             initial='hidden'
             animate='show'
             exit='hidden'
             className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
             >
              <div className='flex flex-1 xl:gap-x-6'>
              {/**experience */}
                <div  className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={250} duration={5} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>
              Satisfied Clients
              </div> 

              </div>
              {/**projects */}
              <div  className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={650} duration={5} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>
              Finished projects
              </div> 

              </div>
              {/**Skills */}
              <div  className='relative flex-1'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={8} duration={5} />+
              </div>
              <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>
              Skills
              </div> 

              </div>
              </div>
             </motion.div>
        </div>
        {/**info */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className=' flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
        
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (<div 
              key={itemIndex}
              className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2
          xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
            {aboutData[index].info.map((item, itemIndex) => {
              return(
                <div key={itemIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'></div>
                  <div>{item.stage}</div>

                  {/**icons */}
                  <div className='flex gap-x-4'>
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className='text-2xl text-white'>{icon}</div>
                    
                  })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
