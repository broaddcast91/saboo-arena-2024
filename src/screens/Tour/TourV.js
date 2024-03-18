import React, { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import EecoLogo from '../../assets/banners/eeco-tour.png';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { Helmet } from 'react-helmet';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';

function TourV() {
  const [price, setPrice] = useState('4,96,200');

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Eeco Tour V Commercial | Commercial Eeco Tour V Car
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Eeco Tour V Commercial | Commercial Eeco Tour V Car'
        />
        <meta
          name='description'
          content='Maruti Suzuki Eeco Tour V commercial is available in CNG and petrol engine option. Know more about the Tour V mileage, features, specifications, performance,exterior and interior of Tour V Commercial at Saboo Maruti Suzuki Commercial. '
        />
        <meta
          name='keywords'
          content='eeco on road price, eeco offers, eeco price, eeco service center, maruti eeco on road price, maruti eeco offers, maruti eeco price, maruti eeco service center, maruti eeco service center near me, maruti suzuki eeco price, maruti suzuki eeco on road price, maruti suzuki eeco offers,maruti suzuki eeco, eeco on road price, eeco 2022 offers, eeco 2022 price, eeco on road price in hyderabad, breza offers in hyderabad, eeco price in hyderabad, maruti eeco 2022 price, maruti eeco 2022 on road price, maruti eeco 2022 offers, maruti eeco 2022 price in hyderabad, maruti eeco 2022 on road price in hyderabad, Maruti Suzuki eeco 2022 price, Maruti Suzuki eeco 2022 on road price, maruti suzuki eeco 2022 offers,  vitara eeco offers, Vitara eeco price, vitara eeco on road price, vitara eeco 2022 offers, vitara eeco 2022 price, vitara eeco 2022 on road price, vitara eeco 2022 offers'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/tour/maruti-eeco-tour-v-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Eeco Tour V Commercial | Commercial Eeco Tour V Car Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Eeco Tour V commercial is available in CNG and petrol engine option. Know more about the Tour V mileage, features, specifications, performance,exterior and interior of Tour V Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta property='og:image' content='../img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/tour/maruti-eeco-tour-v-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Eeco Tour V Commercial | Commercial Eeco Tour V Car Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Eeco Tour V commercial is available in CNG and petrol engine option. Know more about the Tour V mileage, features, specifications, performance,exterior and interior of Tour V Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta property='twitter:image' content='../img/og-tags/alto.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/Eeco-banner_01.jpg'
        className='max-w-full w-full lg:mt-16'
        alt='1'
        id='overview'
      />

      <div className='container mx-auto p-5 lg:px-0 flex justify-between flex-wrap items-center'>
        <img
          className='flex items-center flex-wrap object-left'
          src={EecoLogo}
          alt='vehicle_banner'
        />
        <div>
          <div className='flex items-center space-x-5 p-5'>
            <div>
              <p>Petrol</p>
              <p>
                19.71 &nbsp; <span className='text-red-600'>km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                26.78 &nbsp; <span className='text-red-600'>km/kg*</span>
              </p>
            </div>
          </div>
          <p className='text-xs'>
            *As certified by Test Agency Under Rule 115 (G) of CMVR 1989
          </p>
        </div>
        <div className='p-5'>
          <p className='font-bold'>
            ₹ {price} <span className='text-red-600'>*</span>
          </p>
          <p>Select Car Variant</p>
          <select
            onChange={(e) => setPrice(e.target.value)}
            className='w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          >
            <option value='5,60,000'>TOUR V 5 STR AC (O) 1.2L</option>
            <option value='5,24,000'>TOUR V 5 STR STD (O) 1.2L</option>
            <option value='5,53,000'>TOUR V 7 STR STD (O) 1.2L</option>
            <option value='6,50,000'>TOUR V 5 STR AC (O) CNG</option>
          </select>
        </div>
      </div>
      <div className='container mx-auto p-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/performance_txt.png'
              className='object-scale-down'
              alt='1'
            />
            <p className='p-2'>
              When it comes to performance, the Tour V is an exciting surprise.
              It comes with a powerful 1196cc BS6* compliant engine that makes
              every journey a delightful experience. At the same time, its
              Engine Management System provides an astounding mileage.
            </p>
            <br></br>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/safety-txt.png'
              className='object-scale-down p-5'
              alt='1'
            />
            <p className='p-2'>
              Maruti Suzuki Tour V is designed to ensure a high level of safety
              for everyone. Packed with features like ABS, Driver Airbag and
              Reverse Parking Sensors, it guarantees peace of mind with every
              drive.
            </p>
            <ul className='list-disc p-2'>
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/eeco-tour-v/Eeco_Car.png'
            className='w-full md:w-auto pt-10'
            alt='1'
          />
        </div>
      </div>

      <CarEnquiryDown title='Tour V' carName='Tour V' id='enquiry' />

      <div className='container mx-auto' id='specs'>
        <Accordian />
      </div>
    </>
  );
}

const Accordian = () => {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-start'>
          <Tab.List className='space-x-1 p-5'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className='flex items-center bg-gray-100  justify-between'>
                <p className='flex-1 border px-5 py-3'>Features</p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  PETROL 5 SEATER AC
                </p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  PETROL 5 SEATER STD
                </p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  PETROL 7 SEATER STD
                </p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  CNG 5 SEATER STD
                </p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Exterior</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Center Cap from Central Cap
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Mud Flaps
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Badging (Tour V) Decal
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Outside Rear View Mirror (Left & Right)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>INTERIOR</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Both Side Sunvisor
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Assist Grip (Co-Driver + Rear)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Molded Roof Lining
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Molded Floor Carpet
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Cabin Light
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear Cabin Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>COMFORT</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Heater</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Reclining Front Seats
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Sliding Driver Seat
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Integrated Head Rest-Front Row
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        SAFETY AND SECURITY
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          HeadLamp Leveling
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Side Impact Beams
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seat Belts for all Seats
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          High Mount Stop Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Speed Limit (80 km/h)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Reverse Parking Sensor System
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Diver Airbag</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>ABS with EBD</p>
                        <p className='flex-1 border px-5 py- text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        INSTRUMENT PANEL & CONSOLE
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speedometer Illumination Colour (Amber)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Multi Tripmeter
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Digital Meter cluster (Fuel Level, Odometer &
                          Tripmeter)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          12 Volt Accessory Socket
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className='flex items-center bg-gray-100  justify-between'>
                <p className='flex-1 border px-5 py-3'>Specifications</p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  PETROL 5 SEATER AC
                </p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  PETROL 5 SEATER STD
                </p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  PETROL 7 SEATER STD
                </p>
                <p className='flex-1 border px-5 py-3 text-center'>
                  CNG 5 SEATER STD
                </p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Length
                        </p>
                        <p className='flex-1 border px-5 py-3'>3675 mm</p>
                        <p className='flex-1 border px-5 py-3'>3675 mm</p>
                        <p className='flex-1 border px-5 py-3'>3675 mm</p>
                        <p className='flex-1 border px-5 py-3'>3675 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Width
                        </p>
                        <p className='flex-1 border px-5 py-3'>1475 mm</p>
                        <p className='flex-1 border px-5 py-3'>1475 mm</p>
                        <p className='flex-1 border px-5 py-3'>1475 mm</p>
                        <p className='flex-1 border px-5 py-3'>1475 mm</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Height
                        </p>
                        <p className='flex-1 border px-5 py-3'>1825 mm</p>
                        <p className='flex-1 border px-5 py-3'>1825 mm</p>
                        <p className='flex-1 border px-5 py-3'>1825 mm</p>
                        <p className='flex-1 border px-5 py-3'>1825 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheelbase</p>
                        <p className='flex-1 border px-5 py-3'>2350 mm</p>
                        <p className='flex-1 border px-5 py-3'>2350 mm</p>
                        <p className='flex-1 border px-5 py-3'>2350 mm</p>
                        <p className='flex-1 border px-5 py-3'>2350 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Track Front (mm)
                        </p>
                        <p className='flex-1 border px-5 py-3'>1280</p>
                        <p className='flex-1 border px-5 py-3'>1280</p>
                        <p className='flex-1 border px-5 py-3'>1280</p>
                        <p className='flex-1 border px-5 py-3'>1280</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Track Rear (mm)
                        </p>
                        <p className='flex-1 border px-5 py-3'>1290</p>
                        <p className='flex-1 border px-5 py-3'>1290</p>
                        <p className='flex-1 border px-5 py-3'>1290</p>
                        <p className='flex-1 border px-5 py-3'>1290</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Minimum Turning Radius
                        </p>
                        <p className='flex-1 border px-5 py-3'>4.5 mm</p>
                        <p className='flex-1 border px-5 py-3'>4.5 mm</p>
                        <p className='flex-1 border px-5 py-3'>4.5 mm</p>
                        <p className='flex-1 border px-5 py-3'>4.5 mm</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Weight</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 border px-5 py-3'>1510 kg</p>
                        <p className='flex-1 border px-5 py-3'>1510 kg</p>
                        <p className='flex-1 border px-5 py-3'>1510 kg</p>
                        <p className='flex-1 border px-5 py-3'>1510 kg</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Kerb Weight</p>
                        <p className='flex-1 border px-5 py-3'>940 kg</p>
                        <p className='flex-1 border px-5 py-3'>940 kg</p>
                        <p className='flex-1 border px-5 py-3'>940 kg</p>
                        <p className='flex-1 border px-5 py-3'>940 kg</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Engine Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>1196 cc</p>
                        <p className='flex-1 border px-5 py-3'>1196 cc</p>
                        <p className='flex-1 border px-5 py-3'>1196 cc</p>
                        <p className='flex-1 border px-5 py-3'>1196 cc</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Engine Type</p>
                        <p className='flex-1 border px-5 py-3'>G12B</p>
                        <p className='flex-1 border px-5 py-3'>G12B</p>
                        <p className='flex-1 border px-5 py-3'>G12B</p>
                        <p className='flex-1 border px-5 py-3'>G12B</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Number of Cylinders
                        </p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                        <p className='flex-1 border px-5 py-3'>4</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          No. of Valves
                        </p>
                        <p className='flex-1 border px-5 py-3'>16</p>
                        <p className='flex-1 border px-5 py-3'>16</p>
                        <p className='flex-1 border px-5 py-3'>16</p>
                        <p className='flex-1 border px-5 py-3'>16</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Fuel Type</p>
                        <p className='flex-1 border px-5 py-3'>Petrol</p>
                        <p className='flex-1 border px-5 py-3'>Petrol</p>
                        <p className='flex-1 border px-5 py-3'>Petrol</p>
                        <p className='flex-1 border px-5 py-3'>Petrol</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Distribution
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Multi Point Injection
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          Multi Point Injection
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Power
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          54kW @6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          54kW @6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          54kW @6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          54kW @6000 rpm <br></br>46kW @ 6000rpm (CNG)
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Transmission Type
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          5 Speed-MT (Rear Drive)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          5 Speed-MT (Rear Drive)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          5 Speed-MT (Rear Drive)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          5 Speed-MT (Rear Drive)
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Torque
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          98 Nm @4200 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          98 Nm @4200 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          98 Nm @4200 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          98 Nm @4200 rpm <br></br> 85Nm @3000rpm (CNG)
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Capacity</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3'>5 (AC)</p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                        <p className='flex-1 border px-5 py-3'>7</p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3 '>40 L</p>
                        <p className='flex-1 border px-5 py-3'>40 L</p>
                        <p className='flex-1 border px-5 py-3 '>40 L</p>
                        <p className='flex-1 border px-5 py-3'>40 L</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        Brakes/Tyre Size
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Front</p>
                        <p className='flex-1 border px-5 py-3'>Disc</p>
                        <p className='flex-1 border px-5 py-3'>Disc</p>
                        <p className='flex-1 border px-5 py-3'>Disc</p>
                        <p className='flex-1 border px-5 py-3'>Disc</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tyre Size</p>
                        <p className='flex-1 border px-5 py-3'>155R13 LT</p>
                        <p className='flex-1 border px-5 py-3'>155R13 LT</p>
                        <p className='flex-1 border px-5 py-3'>155R13 LT</p>
                        <p className='flex-1 border px-5 py-3'>155R13 LT</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className='text-xs px-5'>
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <br></br>
    </>
  );
};

export default TourV;
