import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxLaptop } from "react-icons/rx";
import { BsDatabaseFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { RiServiceFill, RiServerFill,
  RiWordpressFill,  } from "react-icons/ri";
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxMobile,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Custom Web Development',
    description: 'Tailored web development services to create responsive and visually appealing websites, optimized for performance and user experience.',
  },
  {
    icon: <RiServerFill />,
    title: 'Database Design and Optimization',
    description: 'Designing efficient and scalable database structures, as well as optimizing existing databases for improved performance and responsiveness.',
  },
  {
    icon: <RxDesktop />,
    title: 'Front-End Development',
    description: 'Crafting engaging and interactive user interfaces using HTML, CSS, and JavaScript to enhance the overall user experience of web applications.',
  },
  {
    icon: <RxLaptop />,
    title: 'Software Application Development',
    description: 'Design and development of custom software applications, leveraging the latest technologies and best practices for functionality and scalability., consectetur adipiscing elit.',
  },
  {
    icon: <BsDatabaseFill />,
    title: 'Back-End Development',
    description: 'Building robust server-side applications and databases, ensuring seamless data flow, security, and efficient functionality behind the scenes.',
  },
  {
    icon: <MdPayment />,
    title: 'E-commerce Solutions',
    description: 'Development of scalable and secure e-commerce platforms, integrating payment gateways, inventory management, and order processing for online businesses.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile App Development',
    description: 'Creating native or cross-platform mobile applications for iOS and Android devices, ensuring a consistent and user-friendly experience across different platforms.',
  },
  {
    icon: <RiWordpressFill />,
    title: 'Content Management Systems (CMS)',
    description: 'Implementation of customized CMS solutions, enabling clients to easily manage and update their website content without technical expertise.',
  },
  {
    icon: <RiServiceFill />,
    title: 'Maintenance and Support',
    description: 'Providing ongoing maintenance and support services to ensure the continued functionality, security, and optimization of web applications post-launch.',
  },
  {
    icon: <TbApi />,
    title: 'API Development and Integration',
    description: 'Designing, developing, and integrating APIs to facilitate communication between different software applications, enhancing interoperability and data exchange.',
  },
];

const ServiceSlider = () => {
  return (
  <Swiper
    breakpoints={{
      320: {
        slidesPerview:1,
        spaceBetween: 15,
      },
      640: {
        slidesPerview:3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
    {
      serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)]
          h-max rounded-lg px-6 py-8 flex sm:flex-col
          gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/**icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/**title & description */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className=' max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/**arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45
              group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
        );
      })
    }
  </Swiper>
  );
};

export default ServiceSlider;
