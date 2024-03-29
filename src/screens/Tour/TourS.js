import React, { useState } from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import TourSLogo from '../../assets/banners/tour-s.png';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { Helmet } from 'react-helmet';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';

function TourS() {
  const [price, setPrice] = useState('6,51,000');

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Dzire Tour S Commercial | Commercial Dzire Tour S Car
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Dzire Tour S Commercial | Commercial Dzire Tour S Car'
        />
        <meta
          name='description'
          content='Maruti Suzuki Dzire Tour S commercial is available in CNG and petrol engine option. Know more about the Tour S mileage, features, specifications, performance,exterior and interior of Tour S Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta
          name='keywords'
          content='dzire   Tour S  on road price, dzire offers, dzire price, dzire service center, maruti dzire on road price, maruti dzire offers, maruti dzire price, maruti dzire service center, maruti dzire service center near me, maruti suzuki dzire price, maruti suzuki dzire on road price, maruti suzuki dzire offers,maruti suzuki dzire, dzire on road price, dzire 2022 offers, dzire 2022 price, dzire on road price in hyderabad, breza offers in hyderabad, dzire price in hyderabad, maruti dzire 2022 price, maruti dzire 2022 on road price, maruti dzire 2022 offers, maruti dzire 2022 price in hyderabad, maruti dzire 2022 on road price in hyderabad, Maruti Suzuki dzire 2022 price, Maruti Suzuki dzire 2022 on road price, maruti suzuki dzire 2022 offers,  vitara dzire offers, Vitara dzire price, vitara dzire on road price, vitara dzire 2022 offers, vitara dzire 2022 price, vitara dzire 2022 on road price, vitara dzire 2022 offers'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/tour/maruti-dzire-tour-s-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Dzire Tour S Commercial | Commercial Dzire Tour S Car Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Dzire Tour S commercial is available in CNG and petrol engine option. Know more about the Tour S mileage, features, specifications, performance,exterior and interior of Tour S Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta property='og:image' content='../img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/tour/maruti-dzire-tour-s-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Dzire Tour S Commercial | Commercial Dzire Tour S Car Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Dzire Tour S commercial is available in CNG and petrol engine option. Know more about the Tour S mileage, features, specifications, performance,exterior and interior of Tour S Commercial at Saboo Maruti Suzuki Commercial.'
        />
        <meta property='twitter:image' content='../img/og-tags/alto.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/dzire-banner.jpg'
        className='max-w-full w-full lg:mt-16'
        alt='1'
        id='overview'
      />

      <div className='container mx-auto p-5 lg:px-0 flex justify-between flex-wrap items-center'>
        <img
          className='flex items-center flex-wrap object-left'
          src={TourSLogo}
          alt='vehicle_banner'
        />{' '}
        <div>
          <div className='flex justify-start space-x-5'>
            <div>
              <p>Petrol</p>
              <p>
                22.61 &nbsp; <span className='text-red-600'>km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                31.12 &nbsp; <span className='text-red-600'>km/kg*</span>
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
            <option value='6,51,000'>TOUR S STD (O) Petrol</option>
            <option value='7,46,000'>TOUR S STD (O) CNG</option>
          </select>
        </div>
      </div>
      <div className='container mx-auto p-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Celerio_performance_txt.png'
              className='object-scale-down'
              alt='1'
            />
            <p className='p-2'>
              Tour S is driven by performance. Every time you get behind the
              wheel, you drive into a completely new world where elegance meets
              efficiency in a seamless partnership.
            </p>
            <br></br>

            <h4>
              <strong>K-Series Petrol Engine VVT</strong>
            </h4>
            <p>
              The smooth acceleration, low emission and superb fuel efficiency
              makes it truly special.
            </p>
            <p>
              {' '}
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/safety-txt.png'
                className='object-scale-down p-5'
                alt='1'
              />
            </p>
            <p className='p-2'>
              Safety is of paramount importance. That’s why the Driver Airbag
              you can be assured about the well-being of you and your loved
              ones.
            </p>
            <ul className='list-disc p-2'>
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Dzire_car.png'
            className='max-w-full w-full'
            alt='1'
          />
        </div>
      </div>
      {/* <TourSCarEnquiry /> */}
      <CarEnquiryDown title='Tour S' carName='Tour S' id='enquiry' />
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
                <p className='flex-1 border px-5 py-3 text-center'>PETROL</p>
                <p className='flex-1 border px-5 py-3 text-center'>CNG</p>
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
                        <p className='flex-1 border px-5 py-3 '>Front Grill</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Black
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Black
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Fog Lamp Bezel Ornament
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Black
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Black
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Body Coloured Bumper
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Standard
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Standard
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
                          Internally Adjustable ORVMs
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Door Trim Pocket
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Glove Box</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Folding Assist Grips (Co-Driver & Rear Seat Both
                          Sides)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Sunvisor (Driver & Co - Driver)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Ticket Holder (Driver Side)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Fuel Lid Opener
                        </p>
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
                        STEERING & SEAT
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
                          Power Steering (EPS)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Tiltable Steering Wheel column
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Dual Horn</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          AC & Heater (Manual)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Seat Head Restraint (Adjustable Type)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear Seat</p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Integrated
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Integrated
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
                          Luggage Lamps
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Airbag
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Passenger Airbag
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Optional
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          Optional
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Rear 3 Point Seat Belts + Center 2 Point
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Anti-lock Braking System
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Reverse Parking Sensors
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Security Alarm System (Door + Hood Sensing + Trunk)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speed Sensitive Automatic Door Lock
                        </p>
                        <p className='flex-1 border px-5 py- text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Immobilizer</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Seat Belt Reminder (Driver + Co. Driver)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Light-on Reminder, Buzzer
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Key-on Reminder, Buzzer
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Door Close Warning Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Consumption (Instantaneous)/(Average)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Trip/Odometer
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Low Fuel Warning Lamp
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front Accessory Socket
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Cup Holder in fron console (i-Cup Holder)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Speed Limiting Function
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          80 km/hr
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>
                          80 km/hr
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
                      <span className='text-base uppercase'>
                        AUDIO, HVAC, DOOR
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Antenna</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Manual AC</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Front (Driver, Co Driver) Electric Power Window
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Power Window Lock (Driver)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fabric Accent Door Trim (Front and Reat Door)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Driver Seat Power Window Auto Switch (Auto Down Only)
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Central Locking
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Keyless Entry
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Remote Back Door Opener
                        </p>
                        <p className='flex-1 border px-5 py-3 text-center'>✔</p>
                        <p className='flex-1 border px-5 py-3 text-center  '>
                          ✔
                        </p>
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
                <p className='flex-1 border px-5 py-3'>PETROL</p>
                <p className='flex-1 border px-5 py-3'>CNG</p>
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
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                        <p className='flex-1 border px-5 py-3'>3995 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Width
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1695 mm (Without side molding)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          1695 mm (Without side molding)
                        </p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Overall Height
                        </p>
                        <p className='flex-1 border px-5 py-3'>1555 mm</p>
                        <p className='flex-1 border px-5 py-3'>1675 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Wheelbase</p>
                        <p className='flex-1 border px-5 py-3'>2430 mm</p>
                        <p className='flex-1 border px-5 py-3'>2430 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Track Front (mm)
                        </p>
                        <p className='flex-1 border px-5 py-3'>1485 mm</p>
                        <p className='flex-1 border px-5 py-3'>1484 mm</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Track Rear (mm)
                        </p>
                        <p className='flex-1 border px-5 py-3'>1495 mm</p>
                        <p className='flex-1 border px-5 py-3'>1495 mm</p>
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
                        <p className='flex-1 border px-5 py-3 '>Kerb Weight</p>
                        <p className='flex-1 border px-5 py-3'>945 kg</p>
                        <p className='flex-1 border px-5 py-3'>1045 kg</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 border px-5 py-3'>1415 kg</p>
                        <p className='flex-1 border px-5 py-3'>1480 kg</p>
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
                        <p className='flex-1 border px-5 py-3 '>Engine Type</p>
                        <p className='flex-1 border px-5 py-3'>F8D</p>
                        <p className='flex-1 border px-5 py-3'>F8D</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Number of Cylinders
                        </p>
                        <p className='flex-1 border px-5 py-3'>3</p>
                        <p className='flex-1 border px-5 py-3'>3</p>
                      </div>

                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          No. of Valves
                        </p>
                        <p className='flex-1 border px-5 py-3'>16</p>
                        <p className='flex-1 border px-5 py-3'>16</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Bore X Stroke
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          73 mm x 71.5 mm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          73 mm x 71.5 mm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Compression Ratio
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          (11.0 ± 0.4):1
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          (11.0 ± 0.4):1
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Emission</p>
                        <p className='flex-1 border px-5 py-3'>BS6</p>
                        <p className='flex-1 border px-5 py-3'>BS6</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Power
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          61 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          52.5 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Torque (Petrol)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          113 Nm @4200 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          113 Nm @4200 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Maximum Torque (CNG)
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          113 Nm @4200 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          113 Nm @4200 rpm
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Air Charging System
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          113 Nm @4200 rpm
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          113 Nm @4200 rpm
                        </p>
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
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        Suspension System
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
                        <p className='flex-1 border px-5 py-3'>
                          MacPherson strut
                        </p>
                        <p className='flex-1 border px-5 py-3'>
                          MacPherson strut
                        </p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Torison Beam</p>
                        <p className='flex-1 border px-5 py-3'>Torison Beam</p>
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
                        <p className='flex-1 border px-5 py-3'>5</p>
                        <p className='flex-1 border px-5 py-3'>5</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 border px-5 py-3 '>42 L</p>
                        <p className='flex-1 border px-5 py-3'>55 L</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Body Type</p>
                        <p className='flex-1 border px-5 py-3'>Notch Back</p>
                        <p className='flex-1 border px-5 py-3'>Notch Back</p>
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
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Tyre Size</p>
                        <p className='flex-1 border px-5 py-3'>165/80 R14</p>
                        <p className='flex-1 border px-5 py-3'>145/80 R14</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Brakes</span>
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
                      </div>
                      <div className='flex items-center text-base justify-between'>
                        <p className='flex-1 border px-5 py-3 '>Rear</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
                        <p className='flex-1 border px-5 py-3'>Drum</p>
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

export default TourS;
