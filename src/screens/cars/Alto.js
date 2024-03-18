import React, { useState, useRef } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import AltoBanner from '../../assets/banners/vehicles/banners-2024/Saboo_RKS_Maruti_Suzuki_Arena_Dealer_In_Hyderabad_Alto800.webp';
import {
  altoColors,
  altoSliders,
  altoVariants,
  altoMileage,
} from '../../constants/altoData';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import { Link } from 'react-router-dom';

export function Alto() {
  const carEnquiryRef = useRef(null);
  const scrollToCarEnquiry = () => {
    if (carEnquiryRef.current) {
      carEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Alto 800 Price in Hyderabad | 2024 Offers on Maruti Alto
          800
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Alto 800 Price in Hyderabad | 2024  Offers on Maruti Alto800'
        />
        <meta
          name='description'
          content='Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Best price and offers on Maruti Alto 800 at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals.'
        />
        {/* <meta
          name="keywords"
          content="alto on road price, alto offers, alto price, alto service center, maruti alto on road price, maruti alto offers, maruti alto price, maruti alto service center, maruti alto service center near me, maruti suzuki alto price, maruti suzuki alto on road price, maruti suzuki alto offers,maruti suzuki alto, alto on road price, alto 2022 offers, alto 2022 price, alto on road price in hyderabad, breza offers in hyderabad, alto price in hyderabad, maruti alto 2022 price, maruti alto 2022 on road price, maruti alto 2022 offers, maruti alto 2022 price in hyderabad, maruti alto 2022 on road price in hyderabad, Maruti Suzuki alto 2022 price, Maruti Suzuki alto 2022 on road price, maruti suzuki alto 2022 offers,  vitara alto offers, Vitara alto price, vitara alto on road price, vitara alto 2022 offers, vitara alto 2022 price, vitara alto 2022 on road price, vitara alto 2022 offers"
        /> */}
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-alto-800-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Alto 800 Price in Hyderabad| Alto Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto 2022 Price Starts at 3.39* LakhBest price and offers on Maruti Alto 800 at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals. '
        />
        <meta property='og:image' content='img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-alto-800-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Alto 800 Price in Hyderabad| Alto Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto 2022 Price Starts at 3.39* LakhBest price and offers on Maruti Alto 800 at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals.'
        />
        <meta property='twitter:image' content='img/og-tags/alto.webp' />
      </Helmet>
      <Header />

      <img
        src={AltoBanner}
        className='max-w-full w-full lg:mt-16'
        alt='Maruti Suzuki Alto 800 Price in Hyderabad'
        id='overview'
      />
      <CarsSlider scrollToCarEnquiry={scrollToCarEnquiry} />

      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4 rounded-3xl'>
            <div className='lg:w-1/2 mb-4 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='Alto 800' carName='Alto 800' />
            </div>
            <div className='lg:w-1/2'>
              <Colors />
            </div>
          </div>

          {/* Table and PriceTable */}
          <div className='mt-8'>
            <Table />
            {/* <PriceTable /> */}
          </div>
        </div>
      </div>

      <div id='specs'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-alto-800/Alto_Brand_Brochure-new.webp'
          alt='brochure'
          className='w-full'
        />
      </div>
    </>
  );
}

const CarsSlider = ({ scrollToCarEnquiry }) => {
  return (
    <>
      {/* <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-16'>
        <div className='w-full md:w-1/2 flex-shrink-0'>
          <div className='rounded-lg overflow-hidden shadow-lg'>
            <ImageGallery
              lazyLoad={true}
              autoPlay={true}
              thumbnailPosition='left'
              showPlayButton={false}
              items={altoSliders}
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 px-6 md:px-0 md:ml-12 flex flex-col justify-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-blue-800'>
            Maruti Alto 800
          </h2>
          <div className='flex items-center mb-4'>
            <img
              className='w-12 h-auto mr-2'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/S-CNG_mimimum+black.webp'
              alt=''
            />
            <p className='text-lg text-blue-800 font-semibold'>
              Starting from{' '}
              <span className='text-xl text-red-600'>₹3.54 Lakh*</span>
            </p>
          </div>
          <hr className='border-t border-gray-300 my-4' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='flex items-center space-x-2'>
              <img
                src={require('../../assets/icons/speedometer.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Engine <br />
                <span className='font-semibold'>796cc</span>
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <img
                src={require('../../assets/icons/gas-station.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Mileage <br />
                <span className='font-semibold'>22.05 kmpl*</span>
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <img
                src={require('../../assets/icons/car.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Power (kW) <br />
                <span className='font-semibold'>35.3</span>
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4 mb-4'>
            <button
              className='px-6 py-2 text-sm bg-blue-800 hover:bg-red-500 text-white rounded-full shadow-md transition duration-300'
              onClick={scrollToCarEnquiry}
            >
              Get Best Offers
            </button>
            <Link
              to='/maruti-alto-800-cng-on-road-price-in-hyderabad'
              className='px-6 py-2 text-sm border border-blue-800 text-blue-800 hover:bg-green-600 hover:border-none hover:text-white rounded-full shadow-md transition duration-300'
            >
              Get CNG
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Alto_Brand_Brochure.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 text-sm bg-blue-800 hover:bg-red-500 text-white rounded-full shadow-md transition duration-300'
            >
              View Brochure
            </a>
            <a
              href='/compare-cars'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 text-sm border border-blue-800 text-blue-800 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-full shadow-md transition duration-300'
            >
              Compare
            </a>
          </div>
        </div>
      </div> */}

      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 sm:px-0 px-5'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={altoSliders}
          />
        </div>

        <div className='my-auto '>
          <div className='flex flex-col items-center sm:flex-row sm:items-start'>
            <p className='text-4xl font-light mb-2 sm:mb-0 sm:mr-4 text-blue-800'>
              Maruti Suzuki <span className='font-semibold'>Alto</span>
            </p>
            <img
              className='w-14 h-7 mr-2 shadow-2xl'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/S-CNG_mimimum+black.webp'
              alt=''
            />
          </div>
          <p className='font-light text-blue-800 text-md'>
            Ex-Showroom Price
            <span className='text-red-600 ml-3 text-xl'>
              <span className='text-xs'>₹</span> &nbsp;3.54 - 5.13{' '}
              <span className='text-xs'>Lakh</span>
              <sup>*</sup>
            </span>
          </p>
          <div className='flex items-center flex-wrap mt-5 text-blue-800 '>
            <div className='flex items-center space-x-3 mr-7 '>
              <img
                src={require('../../assets/icons/speedometer.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Engine <br />
                <span className='font-semibold'>796cc</span>
              </p>
            </div>
            <div className='flex items-center space-x-3 mr-7 '>
              <img
                src={require('../../assets/icons/gas-station.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Mileage <br />
                <span className='font-semibold'>22.05 kmpl*</span>
              </p>
            </div>
            <div className='flex items-center space-x-3 mr-7 '>
              <img
                src={require('../../assets/icons/car.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Power (kW) <br />
                <span className='font-semibold'>35.3</span>
              </p>
            </div>
          </div>
          {/* <div className='flex items-center space-x-2 mt-5 mb-1'></div> */}
          <div class='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 md:mt-5 md:mb-1 '>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Alto_Brand_Brochure.pdf'
              target='_blank'
              rel='noopener noreferrer'
              class='flex-1 block px-4 py-2 text-sm bg-blue-800 text-white hover:bg-red-600 border border-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center'
            >
              View Brochure
            </a>
            <Link
              to='/compare-cars'
              target='_blank'
              rel='noopener noreferrer'
              class='flex-1 block px-4 py-2 text-sm bg-white hover:bg-red-600 border border-blue-800 text-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center'
            >
              Compare
            </Link>
            <Link
              to='/maruti-alto-800-cng-on-road-price-in-hyderabad'
              class='flex-1 block px-4 py-2 text-sm bg-white hover:bg-green-600 border border-blue-800 text-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center'
            >
              Get CNG
            </Link>
          </div>

          <p className='h-px my-6 w-full bg-gray-300'></p>
          <p
            className='mt-2 mb-5 text-xl text-blue-800'
            x-intersect="$el.classList.add('fade-in-left')"
          >
            Our professional and well-trained staff is ready to assist you.
          </p>
        </div>
      </div>
    </>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='border rounded-3xl mt-8 bg-gray-100' id='enquiry'>
      <div className='container mx-auto mt-12 py-12 flex flex-col items-center'>
        {altoColors.map((item) => (
          <img
            key={item.id}
            src={item.img}
            className={item.id === current ? 'mb-4 sm:h-80' : 'hidden'}
            alt={item.id}
          />
        ))}
        <div className='flex items-center justify-center space-x-3 sm:space-y-0 space-y-1'>
          <button
            className={`${
              current === 1 ? 'animate-bounce' : ''
            } h-5 w-5 bg-[#c72e40] rounded-full focus:outline-none`}
            onClick={(e) => setCurrent(1)}
          ></button>
          <button
            className={`${
              current === 2 ? 'animate-bounce' : ''
            } h-5 w-5 bg-[#676767] rounded-full focus:outline-none`}
            onClick={(e) => setCurrent(2)}
          ></button>
          <button
            className={`${
              current === 3 ? 'animate-bounce' : ''
            } h-5 w-5 bg-[#acacac] rounded-full focus:outline-none`}
            onClick={(e) => setCurrent(3)}
          ></button>
          <button
            className={`${
              current === 4 ? 'animate-bounce' : ''
            } h-5 w-5 bg-[#ffffff] rounded-full focus:outline-none`}
            onClick={() => setCurrent(4)}
          ></button>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div
      className='overflow-scroll md:overflow-hidden rounded-2xl shadow-sm'
      id='pricetable'
    >
      <table className='min-w-max w-full table-auto bg-white border-collapse border rounded-lg shadow-md'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              Variants
            </th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              Transmission
            </th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              Price
            </th>
          </tr>
        </thead>
        <tbody className='text-gray-700'>
          {altoVariants?.map((item) => (
            <tr
              key={item.id}
              className='border-b border-gray-200 hover:bg-gray-100  uppercase'
            >
              <td className='py-3 px-4  '>{item.title}</td>
              <td className='py-3 px-4'>{item.transmission}</td>
              <td className='py-3 px-4'>
                <span className='text-xs'>₹</span>
                <span className='text-xl '>{item.price}</span>
                <span className='text-xs'>Lakh</span>
              </td>
            </tr>
          ))}
        </tbody>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              Variants
            </th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              Transmission
            </th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              Mileage
            </th>
          </tr>
        </thead>
        <tbody>
          {altoMileage?.map((item) => (
            <tr
              key={item.id}
              className='border-b border-gray-200 hover:bg-gray-100 uppercase'
            >
              <td className='py-3 px-4'>{item.title}</td>
              <td className='py-3 px-4'>{item.transmission}</td>
              <td className='py-3 px-4 text-xl'>
                {item.mileage} <span className='text-xs'>KM/KG</span>
                <span className='font-extralight'>
                  <sup>*</sup>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='overflow-scroll md:overflow-hidden'>
        <p className='w-full container mx-auto my-auto text-left text-sm italic font-extralight text-red-500 mt-2 pb-6'>
          <span className='font-semibold'>Disclaimer:</span> The prices and
          mileage information provided in the table above are indicative and
          subject to change. The actual prices and mileage of Maruti Suzuki
          vehicles may vary based on factors such as location, dealer, variant,
          and other applicable conditions. For the most accurate and up-to-date
          information, please contact your nearest Saboo RKS Motor Maruti Suzuki
          dealership.
        </p>
      </div>
    </div>
  );
};

export default Alto;
