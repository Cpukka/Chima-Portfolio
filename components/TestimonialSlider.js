// testimonial data
export const testimonialData = [
  {
    image: '/jeff.jpeg',
    name: 'Jafaru Usman',
    position: 'Customer',
    message:
    "This developer is a coding wizard! Their ability to turn complex ideas into functional and elegant web and software solutions is truly impressive. Always reliable and consistently delivers high-quality work.",
  },
  {
    image: '/nd.jpg',
    name: 'Ndidi Osondu',
    position: 'Customer',
    message:
    "Working with this developer is a game-changer. Their deep understanding of various programming languages and frameworks, coupled with a keen eye for design, results in seamless and user-friendly applications. A true professional who goes above and beyond to meet project requirements.",
  },
  {
    image: '/',
    name: 'Samuel Okpara',
    position: 'Customer',
    message:
    "Incredible problem solver and innovator. This developer has a knack for finding efficient solutions to technical challenges. Their commitment to staying updated with the latest technologies ensures that projects are not only current but also future-proofed. A valuable asset to any development team.",
  },
];

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation, Pagination } from 'swiper';
import {FaQuoteLeft} from 'react-icons/fa';
import Image from 'next/image';
// data

const TestimonialSlider = () => {
  return (
  <Swiper
   navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className='h-[400px]'
    >
    {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-14'>
            {/**avatar, name,position */}
            <div className=' w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
            <div className='flex flex-col justify-center text-center'>
              {/**avatar */}
              <div className='mb-2 mx-auto'>
              <Image src={person.image} width={100} height={100} alt='' />
              </div>
              {/**name*/}
              <div className=' text-lg'>{person.name}</div>
              {/**position*/}
              <div className='text-[12px] uppercase font-extralight tracking-widest'>
              {person.position}
              </div>
            </div>
          </div>
          {/**quote & message */}
          <div className='flex-2 flex flex-col rounded justify-center
          before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
          xl:before:-[200px] relative xl:pl-20'>
            {/**quote icon */}
            <div className='mb-4'>
              <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
            </div>
            {/**message */}
            <div className='xl:text-lg text-center md:text-left '>
            {person.message}
            </div>
          </div>
          </div>
        </SwiperSlide>
        );
      })
    }
  </Swiper>
  );
};

export default TestimonialSlider;

