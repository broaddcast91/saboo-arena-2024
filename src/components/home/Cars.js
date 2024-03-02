import React, { Fragment } from 'react';

import HomePageTab from '../../screens/home/HomePageTab';

function Cars() {
  return (
    <>
      <div className='container mx-auto px-5 lg:px-0 md:px-3 mt-5 '>
        <div className='grid  grid-cols-1 gap-2'>
          {/* <div className='flex items-center justify-center my-3'>
            <Link
              to='/maruti-suzuki-car-offers-page'
              className=' bg-blue-800 text-white py-2 font-light tracking-wide px-4 md:px-6 md:py-2 text-sm md:text-base rounded hover:bg-rose-700 hover:border-red duration-300 ease-in'
            >
              View Offers
            </Link>
          </div> */}
          <div className='text-center space-y-1'>
            <section class='h-auto bg-white'>
              <div class='max-w-4xl mx-auto py-5 px-2 sm:py-10 sm:px-6 lg:px-8 sm:text-center'>
                <p class='mt-1 text-3xl font-extrabold text-[#293e91] sm:text-4xl sm:tracking-tight lg:text-5xl'>
                  Discover Your Dream Car at <br />
                  <span className='text-blue-800'>Saboo</span>{' '}
                  <span className='text-red-600'>RKS</span>
                </p>
                <p class='max-w-3xl mt-5 mx-auto text-xl text-[#293e91]'>
                  At Saboo RKS, we're dedicated to providing you with the finest
                  vehicles that match your style and needs. From sleek
                  hatchbacks to rugged SUVs, our extensive inventory offers
                  something for every discerning driver. <br></br>
                  <br></br>Browse our collection today and experience automotive
                  excellence like never before.
                </p>
              </div>
            </section>

            {/* <p className='text-base max-w-5xl md:max-w-3xl md:pb-8 mx-auto '>
              Saboo RKS is the leading Maruti Suzuki dealer in Hyderabad. Built
              with innovations that stand out with a whole new world of enhanced
              driving experience. Any Questions? Our professional and
              well-trained staff are always ready to assist!
            </p> */}
          </div>
        </div>
        <VehicleProducts />
        {/* <div className="flex-auto overflow-hidden">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Brezza2022_June30_banner.webp"
          className="mx-auto product_image h-full w-full"
          alt="banner"
        />
      </div> */}
      </div>
    </>
  );
}

const VehicleProducts = () => {
  return (
    <>
      <HomePageTab />
    </>
  );
};

export default Cars;
