import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className='container py-12 bg-white mx-auto'>
        <div className='max-w-12xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91] text-center'>
            Why Choose Us?
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2'>
            <div className='rounded overflow-hidden shadow-xl'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp'
                className='mx-auto product_image h-full w-full'
                alt='about-banner'
              />
            </div>

            <div className='my-auto space-y-5 px-8 py-2'>
              <p className='text-left text-base text-[#293e91] leading-8'>
                Our widespread presence throughout the city includes four sales
                outlets, seven workshops, one commercial outlet, and two
                exclusive NEXA showrooms for premium cars.
              </p>
              <div className='h-px w-full bg-gray-300 max-w-[500px] rounded'></div>
              <p className='text-left text-base text-black leading-8'>
                With a rich history in the automobile industry dating back to
                1973, we began as a 2-wheeler dealership and made the leap to
                4-wheelers in 1997 by earning the prestigious Maruti Suzuki
                dealership.
              </p>
              <div>
                <Link
                  to='/about-maruti-suzuki-dealers'
                  className='bg-blue-800 rounded-full py-2 px-6 text-white hover:bg-rose-700 hover:border-red duration-300 ease-in'
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function About2() {
  return (
    <>
      <div class='container my-24 mx-auto md:px-6'>
        <section class='mb-32'>
          <div class='flex flex-wrap'>
            <div class='mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12'>
              <div class='flex lg:py-12'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp'
                  class='z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]'
                  alt='about us'
                />
              </div>
            </div>

            <div class='w-full shrink-0 grow-0 basis-auto lg:w-7/12'>
              <div class='flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left'>
                <div class='lg:pl-12'>
                  <h2 class='mb-8 text-3xl font-bold'>Let it surprise you</h2>
                  <p class='mb-8 pb-2 lg:pb-0'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime, sint, repellat vel quo quisquam accusamus in qui at
                    ipsa enim quibusdam illo laboriosam omnis. Labore itaque
                    illum distinctio eum neque!
                  </p>

                  <div class='mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start'>
                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best team
                    </p>

                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best quality
                    </p>

                    <p class='mx-auto mb-2 flex items-center md:mx-0 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p>
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo. Duis faucibus sapien eget tortor finibus, a
                    eleifend lectus dictum. Cras tempor convallis magna id
                    rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet.
                    Proin tempor lorem at neque tempus aliquet. Phasellus at ex
                    volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
                    felis quis ex pharetra luctus. Etiam luctus sagittis massa,
                    sed iaculis est vehicula ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const WhyChooseUs = () => {
  return (
    <>
      <div class='container my-24 mx-auto md:px-6'>
        <section class='mb-32'>
          <div class='text-center'>
            <h2 class='text-3xl lg:text-4xl font-bold mb-6 text-[#293e91]'>
              Why Choose Us
            </h2>
            <p class='text-lg font-light text-gray-600 max-w-2xl mx-auto mb-12'>
              Your trusted source for top-notch vehicles and unparalleled
              service. Find your dream car hassle-free with us!
            </p>
          </div>

          <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            <div class='bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden border border-blue-100 text-center'>
              <div class='p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-12 w-12 mx-auto text-blue-800 mb-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                  />
                </svg>
                <h3 class='text-xl lg:text-2xl font-semibold mb-2 text-blue-800 dark:text-gray-200'>
                  Effortless Car Buying
                </h3>
                <p class='text-md font-light text-gray-600 max-w-2xl mx-auto mb-12'>
                  Enjoy a seamless car-buying experience with us. Simply choose
                  your dream car, and we will handle the rest.
                </p>
              </div>
            </div>

            <div class='bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border-blue-100 shadow-md border text-center'>
              <div class='p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-12 w-12 mx-auto text-blue-800 mb-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
                  />
                </svg>
                <h3 class='text-xl lg:text-2xl font-semibold mb-2 text-blue-800 dark:text-gray-200'>
                  Extensive Service Network
                </h3>
                <p class='text-md font-light text-gray-600 max-w-2xl mx-auto mb-12'>
                  Operating at around 22 touchpoints, we are one of the largest
                  automobile dealerships in the state.
                </p>
              </div>
            </div>

            <div class='bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-blue-100 shadow-md text-center'>
              <div class='p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-12 w-12 mx-auto text-blue-800 mb-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
                  />
                </svg>
                <h3 class='text-xl lg:text-2xl font-semibold mb-2 text-blue-800 dark:text-gray-200'>
                  Unwavering Reliability
                </h3>
                <p class='text-md font-light text-gray-600 max-w-2xl mx-auto mb-12'>
                  Backed by years of unwavering commitment and expertise, Saboo
                  RKS Motor is a brand with synonymous trust and dependability.
                </p>
              </div>
            </div>

            <div class='bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border-blue-100 shadow-md border text-center'>
              <div class='p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-12 w-12 mx-auto text-blue-800 mb-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
                  />
                </svg>
                <h3 class='text-xl lg:text-2xl font-semibold mb-2 text-blue-800 dark:text-gray-200'>
                  Market Leader
                </h3>
                <p class='text-md font-light text-gray-600 max-w-2xl mx-auto mb-12'>
                  We are Telangana's No. 1 Maruti Suzuki Dealer, an automobile
                  dealer of choice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
