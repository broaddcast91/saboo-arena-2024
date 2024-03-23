import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import RewardSlider from '../../components/home/RewardSlider/RewardSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { toast } from 'react-toastify';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

import Logo1 from '../../assets/icons/reward-points/webp/1.webp';
import Logo2 from '../../assets/icons/reward-points/webp/2.webp';
import Logo3 from '../../assets/icons/reward-points/webp/3.webp';
import Logo4 from '../../assets/icons/reward-points/webp/4.webp';
import Logo5 from '../../assets/icons/reward-points/webp/5.webp';
import Logo6 from '../../assets/icons/reward-points/webp/6.webp';

const cardData = [
  {
    id: 1,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/1.png',
    description: 'Referal bonus',
  },
  {
    id: 2,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/2.png',
    description: 'Loyalty bonus',
  },
  {
    id: 3,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/3.png',
    description: 'No Tier Downgrade',
  },
  {
    id: 4,
    title:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/4.png',
    description: 'Automatic Points Awarding',
  },
];

const RewardPoints = () => {
  return (
    <>
      <Header />
      <RewardSlider />
      <MainLayout />
    </>
  );
};

const MainLayout = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <>
      <div className='text-center w-auto bg-blue-800 text-white p-20 '>
        <div className='text-5xl uppercase p-10'>
          owning a car, now more <br></br>
          <span className='font-semibold'>streamlined</span> than ever
        </div>
        {/* buttons */}
        <div className='flex justify-center mt-10'>
          <button
            className='mr-4 bg-white text-blue-800 rounded-full px-8 py-5'
            onClick={openModal}
          >
            Enroll Now
          </button>
          <Transition show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black/25' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-3xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl leading-6 font-medium text-blue-900 text-center'
                      >
                        Get info about Maruti Reward Points
                      </Dialog.Title>
                      <div className='mt-10 mb-10'>
                        <label className='block text-sm font-light text-gray-700'>
                          Phone<span className='sub text-red-600'>*</span>
                        </label>
                        <input
                          className='mt-1 px-2 focus:ring-blue-200 focus:border-blue-200 block w-full shadow-sm sm:text-sm  border-gray-600 rounded-full h-10'
                          type='text'
                          maxLength='10'
                          minLength='10'
                          required
                          id='Phone'
                          name='Phone'
                          value={phone}
                          onChange={(e) => {
                            // Remove non-numeric characters from the input value
                            const cleanedValue = e.target.value.replace(
                              /\D/g,
                              ''
                            );
                            // Ensure only 10 digits are allowed
                            const formattedValue = cleanedValue.substring(
                              0,
                              10
                            );
                            // Update the phone state with the formatted value
                            setPhone(formattedValue);
                          }}
                        />
                        {phone.length > 0 && phone.length < 10 ? (
                          <small className='text-red-500'>
                            Phone number must be 10 digits
                          </small>
                        ) : !pattern.test(phone) && phone.length === 10 ? (
                          <small className='text-red-500'>
                            Phone number is invalid
                          </small>
                        ) : (
                          ''
                        )}
                      </div>

                      <div className='mt-4'>
                        <button
                          type='button'
                          className='inline-flex justify-center rounded-3xl border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <a
            href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/msrebrochure.pdf'
            class='relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border border-white rounded-full hover:text-blue-800 group hover:bg-white'
          >
            <span class='absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
            <span class='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
              <svg
                class='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </span>
            <span class='relative'>Download Brochure</span>
          </a>
        </div>

        <div className='border-white mt-10 bg-white rounded-3xl text-black'>
          <RewardTabs />
        </div>
      </div>
    </>
  );
};

// Dummy components for each tab
const ProgramOverview = () => {
  return (
    <>
      <div className='flex justify-center items-center h-80  rounded '>
        {/* section a */}
        <div className='flex flex-col justify-between h-full w-full mr-4  rounded'>
          <div className='h-1/3 '>
            <div className='h-full flex'>
              <div className='w-1/4  flex justify-center items-center'>
                <img src={Logo1} alt='' className='w-16 h-16' />
              </div>
              <div className='w-3/4  '>
                <div className='h-1/2 '>
                  <div className='h-full  flex justify-start items-center text-blue-800 font-semibold text-2xl'>
                    Earn Points on Transaction
                  </div>
                </div>
                <div className='h-1/2 '>
                  <div className='h-full flex justify-center items-center text-xs text-left text-gray-500'>
                    Win points on every transaction you make (max 5 points on
                    every 100 rupees spent) where 1 point = 1 rupee.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-1/3 '>
            <div className='h-full flex'>
              <div className='w-1/4  flex justify-center items-center'>
                <img src={Logo2} alt='' className='w-16 h-16' />
              </div>
              <div className='w-3/4  '>
                <div className='h-1/2 '>
                  <div className='h-full  flex justify-start items-center text-blue-800 font-semibold text-2xl'>
                    Win Badges on interactions
                  </div>
                </div>
                <div className='h-1/2 '>
                  <div className='h-full flex justify-start items-center text-xs text-left text-gray-500'>
                    Perform select actions to win badges that also carry points.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-1/3 '>
            <div className='h-full flex'>
              <div className='w-1/4   flex justify-center items-center'>
                <img src={Logo3} alt='' className='w-16 h-16' />
              </div>
              <div className='w-3/4  '>
                <div className='h-1/2 '>
                  <div className='h-full  flex justify-start items-center text-blue-800 font-semibold text-2xl'>
                    Card-less Program
                  </div>
                </div>
                <div className='h-1/2 '>
                  <div className='h-full flex justify-center items-center text-xs text-left text-gray-500'>
                    Your membership is directly linked to your mobile number,
                    which removes the hassle of carrying cards.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section b */}
        <div className='flex flex-col justify-between h-full w-full mr-4  rounded'>
          <div className='h-1/3 '>
            <div className='h-full flex'>
              <div className='w-1/4   flex justify-center items-center'>
                <img src={Logo4} alt='' className='w-16 h-16' />
              </div>
              <div className='w-3/4  '>
                <div className='h-1/2 '>
                  <div className='h-full  flex justify-start items-center text-blue-800 font-semibold text-2xl'>
                    Multiple Tiers
                  </div>
                </div>
                <div className='h-1/2 '>
                  <div className='h-full flex justify-center items-center text-xs text-left text-gray-500'>
                    Climb up to higher tiers and get exciting benefits like
                    exclusive invites, more reward points on spends (max. 5
                    points on every 100 rupees spent) and a lot more.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-1/3 '>
            <div className='h-full flex'>
              <div className='w-1/4   flex justify-center items-center'>
                <img src={Logo5} alt='' className='w-16 h-16' />
              </div>
              <div className='w-3/4  '>
                <div className='h-1/2 '>
                  <div className='h-full  flex justify-start items-center text-blue-800 font-semibold text-2xl'>
                    Attend Exclusive Events
                  </div>
                </div>
                <div className='h-1/2 '>
                  <div className='h-full flex justify-center items-center text-xs text-left text-gray-500'>
                    Get opportunities for passes and exclusive invites to attend
                    the most exclusive and exciting events
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-1/3 '>
            <div className='h-full flex'>
              <div className='w-1/4   flex justify-center items-center'>
                <img src={Logo6} alt='' className='w-16 h-16' />
              </div>
              <div className='w-3/4  '>
                <div className='h-1/2 '>
                  <div className='h-full  flex justify-start items-center text-blue-800 font-semibold text-2xl'>
                    Redeem Points
                  </div>
                </div>
                <div className='h-1/2 '>
                  <div className='h-full flex justify-start items-center text-xs text-left text-gray-500'>
                    Use your points to save on Service costs, Accessories and
                    much more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TierBenefits = () => {
  return (
    <>
      <div className='relative w-full '>
        <div className='flex overflow-x-auto scrollbar-hide h-48 p-2'>
          {cardData.map((card) => (
            <div
              key={card.id}
              className='w-38 sm:w-72 h-38 border shadow-md rounded-md p-4 mx-2 mb-2 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110 '
            >
              <img
                src={card.title}
                alt={card.description}
                className='w-15 h-12 mb-2'
              />
              <h2 className='text-xl font-light mb-2 text-blue-900 '>
                {card.description}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const EarnPoints = () => {
  return <p>Learn how to Earn Points here.</p>;
};

const RedeemPoints = () => {
  return <p>Redeem your points in this tab.</p>;
};

const RewardTabs = () => {
  const [activeTab, setActiveTab] = useState('program');

  // Mapping between tab names and corresponding components
  const tabComponents = {
    program: ProgramOverview,
    'tier benefits': TierBenefits,
    'earn points': EarnPoints,
    'redeem points': RedeemPoints,
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='text-lg font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 uppercase'>
          <ul className='flex flex-wrap -mb-px'>
            {Object.keys(tabComponents).map((tabName) => (
              <li key={tabName} className='me-2'>
                <div
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                    activeTab === tabName
                      ? 'text-blue-600 border-blue-600'
                      : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName.replace(/^\w/, (c) => c.toUpperCase())}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Render tab content based on activeTab */}
      <div className='mt-4 mx-auto max-w-6xl p-2'>
        {activeTab && (
          <div className=' p-4 rounded-lg '>
            {React.createElement(tabComponents[activeTab])}
          </div>
        )}
      </div>
    </>
  );
};

export default RewardPoints;
