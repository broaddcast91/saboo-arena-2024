import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { products } from '../../constants';
import { cngProducts } from '../../constants';
import { tourProducts } from '../../constants';

const HomePageTab = () => {
  const [currentTab, setCurrentTab] = useState('Tab1');
  useEffect(() => {
    // This useEffect hook ensures that when the component mounts,
    // it automatically sets the currentTab to 'Tab1',
    // effectively displaying Tab 1 content by default.
    setCurrentTab('Tab1');
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  return (
    <>
      <div className='container mx-auto mt-8'>
        <Tab.Group>
          <Tab.List className='flex p-1 space-x-1 bg-gray-100 rounded-full'>
            <Tab
              className={({ selected }) =>
                `${
                  selected ? 'bg-blue-800 text-white' : 'bg-white text-black '
                } flex-1 text-center py-2 rounded-full cursor-pointer`
              }
              onClick={() => setCurrentTab('Tab1')}
            >
              PETROL
            </Tab>
            <Tab
              className={({ selected }) =>
                `${
                  selected ? 'bg-blue-800 text-white' : 'bg-white text-black'
                } flex-1 text-center py-2 rounded-full cursor-pointer`
              }
              onClick={() => setCurrentTab('Tab2')}
            >
              CNG
            </Tab>
            <Tab
              className={({ selected }) =>
                `${
                  selected ? 'bg-blue-800 text-white' : 'bg-white text-black'
                } flex-1 text-center py-2 rounded-full cursor-pointer`
              }
              onClick={() => setCurrentTab('Tab3')}
            >
              TOUR
            </Tab>
          </Tab.List>
          <Tab.Panels className='mt-2'>
            <Tab.Panel className='bg-white rounded-xl p-4'>
              {currentTab === 'Tab1' && (
                <Fragment>
                  <ArenaCars />
                </Fragment>
              )}
            </Tab.Panel>
            <Tab.Panel className='bg-white rounded-xl p-4'>
              {currentTab === 'Tab2' && (
                <Fragment>
                  <CNGCars2 />
                </Fragment>
              )}
            </Tab.Panel>
            <Tab.Panel className='bg-white rounded-xl p-4'>
              {currentTab === 'Tab3' && (
                <Fragment>
                  <TourCars />
                </Fragment>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

const ArenaCars = () => {
  return (
    <>
      <div className='grid sm:grid-1 lg:grid-cols-3 gap-2 container mx-auto pb-5'>
        {products.map((item, index) => (
          <div
            className='flex flex-col bg-white rounded-md shadow-md border border-gray-300 hover:shadow-lg  transform transition duration-500 hover:scale-106'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <div className='relative'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center rounded-t-md'
                  />
                  <p className='absolute shadow-xl top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-red-500 py-1 w-28'>
                    offer
                  </p>
                  {/* <div className='flex items-center space-x-3 mx-3 mb-1'>
    <img
      src={require('../../assets/icons/gas-station.png')}
      className='h-8 w-8'
      alt=''
    />
    <p className='text-sm'>
      Mileage <br />
      <span className='font-semibold'>22.05 kmpl*</span>
    </p>
  </div> */}
                  <p className='absolute bottom-3 left-3 text-blue-900 font-normal'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 inline-block mr-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14.452 7.34a1 1 0 01-.636-.636l-4-7a1 1 0 011.732-1l4 7a1 1 0 01-.636 1.636z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M9 8a1 1 0 011-1h1a1 1 0 010 2H10a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M14.5 10a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.946-1.895a1 1 0 01-.604-.303l-3-3a1 1 0 011.414-1.414l3 3a1 1 0 01-.81 1.717z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M15 15a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z'
                        clipRule='evenodd'
                      />
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {item.mileage} km/L
                  </p>
                  <div className='absolute inset-0 opacity-10 rounded-t-md'></div>
                </div>
              </Link>
            </div>
            <div className='flex-auto bg-white rounded-b-md'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-5 w-auto' />

                  <div>
                    <p className='flex items-center font-bold text-xl'>
                      <span className='text-xs'>
                        {' '}
                        <BiRupee />
                      </span>
                      {item.price}
                      <span className='font-extralight'>
                        <sup>*</sup>
                      </span>
                    </p>{' '}
                    <p className='font-extralight text-xs mx-1'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 p-2.5 mb-2'>
                  <Link
                    to='/maruti-suzuki-car-offers-page'
                    className='bg-blue-800 hover:bg-rose-700 hover:border duration-100 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full flex items-center justify-center'
                  >
                    VIEW OFFER
                  </Link>

                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-900 text-blue-900 hover:border-red-700 hover:text-white hover:bg-red-700 p-2 max-w-[44%] w-full flex justify-center items-center text-sm uppercase rounded-full'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 mr-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7l-4-4H4zm2 0v10h12V5l-4-4H6zm6 4.5a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM8 9a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3A.5.5 0 008 9zm4 0a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='sm:col-span-2'>
          <a href='/maruti-suzuki-driving-school'>
            {' '}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/new-tile-banner.webp'
              className='lg:mx-auto product_image lg:h-[400px] lg:w-full rounded-md shadow-2xl'
              alt='banner'
            />
          </a>
        </div>
      </div>
    </>
  );
};
const CNGCars2 = () => {
  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-5 pb-5'>
        {cngProducts.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] lg:h-[310px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-5' />
                  <div>
                    <p className='flex items-center font-bold'>
                      <BiRupee />
                      &nbsp;{item.price}
                      <sup>*</sup>
                    </p>{' '}
                    <p className='font-light'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-3 pb-5'>
                  <Link
                    to={item.explore}
                    className='bg-green-700 hover:bg-red-700 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-800 text-blue-800 hover:bg-red-700 hover:border-red-700 hover:text-white  p-2 max-w-[44%] w-full text-center text-sm uppercase rounded-full'
                  >
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const TourCars = () => {
  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-5 pb-5'>
        {tourProducts.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] lg:h-[310px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-10' />
                  <div>
                    <p className='font-bold'>
                      {item.petrol}
                      <span className='font-light'>*</span>
                    </p>
                    <p className='font-light'>Petrol</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-3 pb-5'>
                  <Link
                    to={item.explore}
                    className='bg-blue-800 hover:bg-red-700 hover:border hover:text-white duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-800  hover:bg-red-700 hover:border-red-700 hover:text-white  duration-300 ease-in p-2 max-w-[44%] w-full text-center text-blue-800 text-sm uppercase rounded-full'
                  >
                    View Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageTab;
