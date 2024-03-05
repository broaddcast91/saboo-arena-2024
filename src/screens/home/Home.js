import React, { useEffect, useState } from 'react';
import Slider from '../../components/home/Slider';
import CarEnquiry from '../../components/home/CarEnquiry';
import MobileSlider from '../../components/home/MobileSlider';
import Cars from '../../components/home/Cars';
// import About from '../../components/home/About';
// import Accomplishments from '../../components/home/Accomplishments';
import { FaStar } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//confetti
// import Confetti from 'react-confetti';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper';
import { reviews } from '../../constants/carservice';
import Header from '../../components/header/Header';

import { Helmet } from 'react-helmet';
import { WhyChooseUs } from '../../components/home/About';
// import { Link } from 'react-router-dom';

// import Header2 from '../../components/header/Header2';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo
          Maruti
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          name='description'
          content='Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza.'
        />
        <meta
          name='keywords'
          content='Maruti Suzuki Dealers, Maruti Authorized Dealers, Nexa Dealers Maruti Car Dealers in Hyderabad, Offers on Maruti Cars, offers on maruti cars Hyderabad, maruti car offers 2022, maruti showroom near me, maruti service center near me'
        />
        <meta
          property='og:image'
          content='https://www.saboogroups.com/assets/images/black-logo.png'
        ></meta>
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta
          property='og:description'
          content='Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza.'
        />
        <meta property='og:image' content='img/og-tags/saboo_rks.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza.'
        />
        <meta property='twitter:image' content='img/og-tags/saboo_rks.webp' />
        <meta
          name='facebook-domain-verification'
          content='md4mdsmejpjm33sfbb9akud4erg4k0'
        />
      </Helmet>

      <Header />
      {/* <Header2 /> */}
      {windowWidth <= 425 ? <MobileSlider /> : <Slider />}
      {/* <Slider /> */}
      {/* <Confetti /> */}
      {/* <MobileSlider /> */}

      <CarEnquiry />

      <Cars />
      {/* <About /> */}
      <WhyChooseUs />
      {/* <Accomplishments /> */}
      {/* <LocationsatHomePage /> */}
      <Blog />
      <Testimonials />
    </>
  );
}

const LocationsatHomePage = () => {
  return (
    <>
      <div class='container relative mx-auto mt-3'>
        <div class='m-3 grid grid-cols-1 gap-4 md:grid-cols-2 bg-gray-100 rounded-2xl'>
          <div class='col-span-1 flex flex-col gap-4 p-4 md:p-2'>
            <div class='md-3 border-red-500 p-4 md:p-8'>
              <div class='border-b-2 pb-4 text-4xl font-bold md:pb-8 md:text-6xl text-[#293e91]'>
                Locations
              </div>
              <p class='border-b-2 pb-4 mt-4 text-sm md:pb-8 md:text-lg text-[#293e91]'>
                Explore our showroom of quality vehicles, conveniently located
                in Hyderabad to serve you better on every journey.
              </p>
            </div>
            <div class=''>
              <div class='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div class='relative overflow-hidden rounded-2xl'>
                  <a href='https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Malakpet,+Hyderabad)/@17.371254,78.512446,15z/data=!4m6!3m5!1s0x3bcb985a78a7f883:0xad5bb6113d36bffc!8m2!3d17.3712538!4d78.5124463!16s%2Fg%2F11bbrj30gb?hl=en&entry=ttu'>
                    <img
                      src='https://lh3.googleusercontent.com/p/AF1QipNy727I0UpGe1yIhQ67wPOoE_PF4LnNiNn8K32S=s1360-w1360-h1020'
                      class='h-64 w-full  object-cover md:h-full transform transition-transform duration-200 hover:scale-105'
                    />
                    <div class='absolute bottom-0 left-0 m-4 text-lg font-bold text-white'>
                      Malakpet
                    </div>
                  </a>
                </div>
                <div class='relative overflow-hidden rounded-2xl'>
                  <a href='https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Narsingi,+Hyderabad)/@17.3837654,78.3631478,15z/data=!4m6!3m5!1s0x3bcb958150dd4c01:0x2d0aecdb5b3523de!8m2!3d17.3837654!4d78.3631478!16s%2Fg%2F11v07h42w1?entry=ttu'>
                    <img
                      src='https://lh3.googleusercontent.com/p/AF1QipP0QArklxlSs_OhkZcF9a9boJuPTyqKmw6D2iah=s1360-w1360-h1020'
                      class='h-64 w-full  object-cover md:h-full transform transition-transform duration-200 hover:scale-105 shadow-xl'
                    />
                    <div class='absolute bottom-0 left-0 m-4 text-lg font-bold text-white'>
                      Narsingi
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class='relative col-span-1 p-2'>
            <a href='https://www.google.com/maps/place/Maruti+Suzuki+Arena+-+Saboo+RKS+Motor+Pvt.+Ltd/@17.4241643,78.4573371,15z/data=!4m2!3m1!1s0x0:0x1e0a3e3dabcb8701?sa=X&ved=2ahUKEwikovmhtNCEAxUGR2wGHSDqCIsQ_BJ6BAgTEAA'>
              <img
                src='https://lh3.googleusercontent.com/p/AF1QipPPhdZg3FHrFoQHEjjWOkXbgwy0bV0CdArxl0Jj=s1360-w1360-h1020'
                class='h-64 w-full rounded-2xl object-cover md:h-full transform transition-transform duration-200 hover:scale-105 shadow-xl'
              />
              <div class='absolute bottom-0 left-0 m-6 text-5xl font-bold text-white'>
                Somajiguda
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <>
      <section class=''>
        <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-2'>
          <div class='mx-auto max-w-screen-sm text-center lg:mb-16 mb-2 '>
            <h2 class='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91]'>
              Our Blog
            </h2>
            <p class='font-light text-gray-500  sm:text-xl'>
              Rev Up Your Knowledge: Explore Our Blog for Expert Tips, Trends,
              and Latest news!
            </p>
          </div>
          <div class='grid gap-8 lg:grid-cols-3'>
            {/* article 1 */}
            <article class='relative overflow-hidden rounded-lg border border-gray-200 shadow-md'>
              <div class='relative h-64 bg-gray-300'>
                <img
                  class='object-cover w-full h-full'
                  src='https://www.siasat.com/wp-content/uploads/2023/05/Before-87.png'
                  alt='Bonnie Green avatar'
                />
                <div class='absolute inset-0 bg-black opacity-40'></div>
                <div class='absolute inset-0 flex items-center justify-center'>
                  <div class='text-center text-white'>
                    <h2 class='text-3xl font-light'>
                      Hyderabad: 20 cars distributed under Driver Empowerment
                      Programme
                    </h2>
                    <p class='mt-2 text-sm'>The Siasat Daily</p>
                  </div>
                </div>
              </div>
              <div class='p-6 bg-white'>
                <div class='flex items-center mb-4 text-gray-500'>
                  <span class='text-xs font-medium'>Article</span>
                  <span class='mx-2'>•</span>
                  <span class='text-xs'>May 17, 2023</span>
                </div>
                <p class='mb-4 text-lg font-normal text-gray-900'>
                  As a part of the Driver Empowerment Programme, Telangana State
                  Minority Finance Corporation (TSMFC) distributed 20 Maruthi
                  Suzuki cars to minority beneficiaries on Tuesday.
                </p>
                <div class='flex justify-center'>
                  <a
                    href='https://www.siasat.com/hyderabad-20-distributed-under-driver-empowerment-programme-2591202/'
                    class='inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-blue-800 rounded-full hover:bg-red-700 hover:text-white'
                    aria-label='news link'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            {/* article 2 */}
            <article class='relative overflow-hidden rounded-xl border border-gray-200 shadow-md'>
              <div class='relative h-64 bg-gray-300'>
                <img
                  class='object-cover w-full h-full'
                  src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220818010555_Alto_K10_launch_image.jpg'
                  alt='Carwale'
                />
                <div class='absolute inset-0 bg-black opacity-40'></div>
                <div class='absolute inset-0 flex items-center justify-center'>
                  <div class='text-center text-gray-200'>
                    <h2 class='text-3xl font-light'>
                      Maruti Alto K10 gets a price cut for select variants
                    </h2>
                    <p class='mt-2 text-sm'>CarWale</p>
                  </div>
                </div>
              </div>
              <div class='p-6 bg-white'>
                <div class='flex items-center mb-4 text-gray-500'>
                  <span class='text-xs font-medium'>Article</span>
                  <span class='mx-2'>•</span>
                  <span class='text-xs'>February 16, 2024</span>
                </div>
                <p class='mb-4 text-lg font-normal text-gray-900'>
                  Maruti Suzuki has revised the prices across its model range
                  with immediate effect. Based on the choice of the car and
                  variant, there are changes in the price tags.
                </p>
                <br></br>
                <div class='flex justify-center'>
                  <a
                    href='https://www.carwale.com/news/maruti-alto-k10-gets-a-price-cut-for-select-variants/'
                    class='inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-blue-800 rounded-full hover:bg-red-700 hover:text-white'
                    aria-label='news link'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            {/* article 3 */}
            <article class='relative overflow-hidden rounded-lg border border-gray-200 shadow-md'>
              <div class='relative h-64 bg-gray-300'>
                <img
                  class='object-cover w-full h-full'
                  src='https://www.financialexpress.com/wp-content/uploads/2023/10/2024-maruti-suzuki-swift-2.jpg?w=1024'
                  alt='Zig Wheels'
                />
                <div class='absolute inset-0 bg-black opacity-40'></div>
                <div class='absolute inset-0 flex items-center justify-center'>
                  <div class='text-center text-gray-100'>
                    <h2 class='text-3xl font-light'>
                      5 New Features That The 2024 New-gen Maruti Suzuki Swift
                      Could Get Over The Existing Swift
                    </h2>
                    <p class='mt-2 text-sm'>ZigWheels</p>
                  </div>
                </div>
              </div>
              <div class='p-6 bg-white'>
                <div class='flex items-center mb-4 text-gray-500'>
                  <span class='text-xs font-medium'>Article</span>
                  <span class='mx-2'>•</span>
                  <span class='text-xs'>February 19, 2024</span>
                </div>
                <p class='mb-4 text-lg font-normal text-gray-900'>
                  The new-gen 2024 Maruti Swift is going to arrive in India very
                  soon. We’ve spotted multiple test mules and the hatchback has
                  also been launched in multiple markets abroad, Germany being
                  the latest one.
                </p>

                <div class='flex justify-center'>
                  <a
                    href='https://www.zigwheels.com/news-features/general-news/5-new-features-that-the-2024-new-gen-maruti-suzuki-swift-could-get-over-the-existing-swift/'
                    class='inline-flex items-center px-5 py-3 text-sm font-semibold text-white bg-blue-800 rounded-full hover:bg-red-700 hover:text-white '
                    aria-label='news link'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

const Testimonials = () => {
  return (
    // <section
    //   class='flex items-center justify-center py-20 bg-white min-w-screen tails-selected-element'
    //   contenteditable='true'
    // >
    //   <div class='px-16 bg-white'>
    //     <div class='container flex flex-col items-start mx-auto lg:items-center'>
    //       <p
    //         class='relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-gray-500 uppercase lg:justify-center lg:items-center'
    //         data-primary='purple-500'
    //       >
    //         Don't just take our word for it
    //       </p>

    //       <h2 class='relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center text-[#293e91]'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='currentColor'
    //           class='absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block'
    //           viewBox='0 0 975.036 975.036'
    //         >
    //           <path
    //             d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'
    //             class=''
    //           ></path>
    //         </svg>
    //         See what others are saying
    //       </h2>
    //       <div
    //         class='block w-full h-0.5 max-w-lg mt-6 bg-blue-100 rounded-full'
    //         data-primary='purple-600'
    //       ></div>

    //       <div class='items-center justify-center w-full mt-12 mb-4 lg:flex'>
    //         <div class='flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0'>
    //           <div class='flex items-center justify-center'>
    //             <div class='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
    //               <img
    //                 src='https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg?w=1800&t=st=1709009205~exp=1709009805~hmac=e33e8852ba20c7cc42a18e39554d4fe73af8435dd124bcd383e526e67856617c'
    //                 class='object-cover w-full h-full'
    //                 alt='review-1'
    //               />
    //             </div>
    //             <div class='flex flex-col items-start justify-center'>
    //               <h4 class='font-bold text-[#293e91] text-xl'>Vijay</h4>
    //               <p class='text-gray-500 text-sm'>Engineer</p>
    //             </div>
    //           </div>
    //           <blockquote class='mt-8 text-md italic text-gray-500'>
    //             "Wonderfull experinece with staff and Mr Prasad Induri has been
    //             very good in througout the process. Delivered as promised. Thank
    //             you RKS"
    //           </blockquote>
    //         </div>
    //         <div class='flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200'>
    //           <div class='flex items-center justify-center'>
    //             <div class='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
    //               <img
    //                 src='https://img.freepik.com/free-photo/arab-man-with-beard-standing-bricks-wall-background-with-happy-cool-smile-face-lucky-person_839833-31933.jpg?w=1800&t=st=1709009424~exp=1709010024~hmac=7855a6e03e1e53e9542bb5f9d739d731a956a4207c2ba177289337d0e149178e'
    //                 class='object-cover w-full h-full'
    //                 alt='testimonial-profile-person-2'
    //               />
    //             </div>
    //             <div class='flex flex-col items-start justify-center'>
    //               <h4 class='font-bold text-[#293e91] text-xl'>Mohan Reddy</h4>
    //               <p class='text-gray-500 text-sm'>Doctor</p>
    //             </div>
    //           </div>
    //           <blockquote class='mt-8 text-md italic text-gray-500'>
    //             "Mr. Venkat Reddy is good guy and very co ordinated and given
    //             all his best and excellent service to me I will refer my friends
    //             and family to rks motors tardbund."
    //           </blockquote>
    //         </div>
    //         <div class='flex flex-col items-start justify-start w-full h-auto lg:w-1/3'>
    //           <div class='flex items-center justify-center'>
    //             <div class='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
    //               <img
    //                 src='https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=1800&t=st=1709009087~exp=1709009687~hmac=be37fd25992f7bef82371504fbb517783f7f25fa98e40be1d8baf29d3f18c50d'
    //                 class='object-cover w-full h-full'
    //                 alt='review-3'
    //               />
    //             </div>
    //             <div class='flex flex-col items-start justify-center'>
    //               <h4 class='font-bold text-xl text-[#293e91]'>
    //                 Jagadish Kumar
    //               </h4>
    //               <p class='text-gray-500 text-sm'>Business Man</p>
    //             </div>
    //           </div>
    //           <blockquote class='mt-8 text-md italic text-gray-500'>
    //             "Excellent Work from Sales Person Mr. Tirupati happy with rks
    //             motors tadbund showroom Receiving was excellent 👍 all covid
    //             saftey taken at showroom i really awsome all staff 😍👌💯 i will
    //             prefer to rks motors tadbund thank you 🙏"
    //           </blockquote>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className='container mx-auto my-5 lg:py-10 lg:px-8 py-20 '>
      <p className='text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91]'>
        Testimonials
      </p>
      <p className='mb-8 text-center font-extralight'>
        Discover what others have to say
      </p>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className='mySwiper'
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='px-8'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
                className='mx-auto'
                alt='offers'
              />
              <p className='text-center text-base text-blue-800 font-semibold py-2'>
                {item.author}
              </p>
              <div className='flex items-center justify-center space-x-1'>
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
                <FaStar className='text-orange-400' />
              </div>
              <p className='text-sm text-center'>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
