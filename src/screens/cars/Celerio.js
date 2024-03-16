import React, { useState, Fragment, useRef } from 'react';
import { useEffect } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { Dialog, Transition } from '@headlessui/react';
import {
  celerioColors,
  celerioMileage,
  celerioSliders,
  celerioVariants,
} from '../../constants/celerioData';

import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import { Link } from 'react-router-dom';

function Celerio() {
  const carEnquiryRef = useRef(null);
  const scrollToCarEnquiry = () => {
    if (carEnquiryRef.current) {
      carEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Celerio On Road Price in Secunderabad, Hyderabad & 2024 Offers
        </title>
        <meta
          name='title'
          content='Maruti Celerio On Road Price in Secunderabad, Hyderabad & 2024 Offers'
        />
        <meta
          name='description'
          content='Maruti Celerio in Secunderabad & Hyderabad. Best price & offers on Maruti Celerio at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Celerio online.'
        />
        {/* <meta
          name="keywords"
          content="Maruti Celerio in Secunderabad & Hyderabad. New Celerio 2022 Price Starts at5.25* Lakh. Best price & offers on Maruti Celerio at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. Also, Get On-Road Price for Maruti Celerio online."
        /> */}
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/the-all-new-celerio'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Celerio Price | Celerio Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Celerio hatchback car is available in LXI, VXI, ZXI variants with a 1.0L BS6 Petrol engine, and comes in 6 exciting colors. Visit our nearest branch to get offers or call us 9848898488.'
        />
        <meta property='og:image' content='img/og-tags/celerio.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/the-all-new-celerio'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Celerio Price | Celerio Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Celerio hatchback car is available in LXI, VXI, ZXI variants with a 1.0L BS6 Petrol engine, and comes in 6 exciting colors. Visit our nearest branch to get offers or call us 9848898488.'
        />
        <meta property='twitter:image' content='img/og-tags/celerio.webp' />
      </Helmet>
      <img
        src={require('../../assets/banners/Celerio Petrol.webp')}
        className='max-w-full w-full lg:mt-16'
        alt='Buy Maruti Suzuki Celerio 2023 in Hyderabad'
      />
      <CarsSlider scrollToCarEnquiry={scrollToCarEnquiry} />
      <div className='container mx-auto '>
        <div className='mx-5 '>
          <div className='flex flex-col lg:flex-row lg:space-x-4  rounded-3xl'>
            <div className='lg:w-1/2 mb-4 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='Celerio' carName='Celerio' />
            </div>
            <div className='lg:w-1/2'>
              <Colors />
            </div>
          </div>
          {/* Table and PriceTable */}
          <div className='mt-8'>
            <PriceTable />
            {/* <Table /> */}
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-new-celerio/New_Celerio_Product_Brand_Brochure.webp'
          alt='brochure'
          className='w-full'
        />
      </div>
    </>
  );
}

const CarsSlider = ({ scrollToCarEnquiry }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('Celerio');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const cancelButtonRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const checkFormValidity = () => {
    return (
      name.trim() !== '' &&
      phone.length === 10 &&
      model.trim() !== '' &&
      !loading
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,

          model: model,
        })
        .then((res) => {
          toast.success('Enquiry sent successfully');
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something went wrong!');
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    try {
      await axios
        .post('https://arena-backend-zj42.onrender.com/onRoadPrice', {
          name: name,
          phone: phone,
          // email: email,
          model: model,
          // outlet: outlet,
        })
        .then((res) => {
          toast.success('Enquiry sent successfully');
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something went wrong!');
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    // Second API call
    await axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
   Our Sales consultant will contact you shortly.
   
   Regards
   RKS Motor Pvt. Ltd.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log('SMS API Response:', res.data);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        setSubmitted(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (submitted) {
      document.getElementById('celerioPopup').submit();
    }
  }, [submitted]);

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
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 sm:px-0 px-5'>
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition='left'
            showPlayButton={false}
            items={celerioSliders}
          />
        </div>

        <div className='my-auto'>
          <div className='flex flex-col items-center sm:flex-row sm:items-start'>
            <p className='text-3xl font-light mb-2 sm:mb-0 sm:mr-4 text-blue-800'>
              Maruti Suzuki <span className='font-semibold'>Celerio</span>
            </p>
            <img
              className='w-14 h-7 mr-2 shadow-2xl'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/AGS.webp'
              alt=''
            />
            <img
              className='w-14 h-7 mr-2 shadow-2xl'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/S-CNG_mimimum+black.webp'
              alt=''
            />
            <img
              className='w-14 h-7 mr-2 shadow-2xl'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/K-SERIES.webp'
              alt=''
            />
          </div>
          <p className='font-light text-lg text-blue-800'>
            Ex-Showroom Price
            <span className='text-red-600 ml-3 text-xl'>
              ₹&nbsp;5.36 - 7.09 Lakh*
            </span>
          </p>
          <div className='flex items-center flex-wrap mt-5 text-blue-800 '>
            <div className='flex items-center space-x-3 mr-7 '>
              <img
                src={require('../../assets/icons/speedometer.png')}
                className='h-8 w-8'
                alt='speedometer'
              />
              <p className='text-sm'>
                Engine <br />
                <span className='font-semibold'>998 CC</span>
              </p>
            </div>

            <div className='flex items-center space-x-3 mx-3'>
              <img
                src={require('../../assets/icons/gas-station.png')}
                className='h-8 w-8'
                alt='gas-station'
              />
              <p className='text-sm'>
                Mileage <br />
                <span className='font-semibold'>26.68 kmpl*</span>
              </p>
            </div>

            <div className='flex items-center space-x-3 mr-7'>
              <img
                src={require('../../assets/icons/car.png')}
                className='h-8 w-8'
                alt='car-icon'
              />
              <p className='text-sm'>
                Power (kW) <br />
                <span className='font-semibold'>49</span>
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 md:mt-5 md:mb-1 '>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_All_New_Celerio.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 block px-4 py-2 text-sm bg-blue-800 text-white hover:bg-red-600 border border-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center'
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
              to='/maruti-celerio-cng-on-road-price-in-hyderabad'
              className='flex-1 block px-4 py-2 text-sm bg-white hover:bg-green-600 border border-blue-800 text-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center'
            >
              Get CNG
            </Link>
            {/* <button
              className="px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm"
              onClick={() => setOpen(true)}
            >
              Book a Test Drive
            </button> */}
          </div>
          <p className='h-px my-6 w-full bg-gray-300'></p>
          {/* <p className="flex items-center">
          <BsCalendarCheck className="mr-1" />
          Delivery from Saboo RKS, 7-30 days
        </p> */}
          <p
            className='mt-2 mb-5 text-xl text-blue-800'
            x-intersect="$el.classList.add('fade-in-left')"
          >
            Our professional and well-trained staff is ready to assist you
          </p>
        </div>
      </div>
    </>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='border rounded-3xl mt-8 bg-gray-100'>
      {' '}
      <div className='container mx-auto mt-12 py-12 flex flex-col items-center'>
        {celerioColors.map((item) => (
          <img
            key={item.id}
            src={item.img}
            className={item.id === current ? 'mx-auto sm:h-80' : 'hidden'}
            alt={item.id}
          />
        ))}
        <div className='flex items-center justify-center space-x-3 sm:space-y-0 space-y-1'>
          <p
            className={`${
              current === 1 ? 'animate-bounce' : ''
            } h-5 rounded-full bg-[#6A717B] w-5`}
            onClick={() => setCurrent(1)}
          ></p>
          <p
            className={
              current === 2
                ? 'h-5 rounded-full w-5 bg-[#b3b5b0] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#b3b5b0]'
            }
            onClick={() => setCurrent(2)}
          ></p>
          <p
            className={
              current === 3
                ? 'h-5 rounded-full w-5 bg-[#FFFFFF] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#FFFFFF]'
            }
            onClick={() => setCurrent(3)}
          ></p>
          <p
            className={
              current === 4
                ? 'h-5 rounded-full w-5 bg-[#2a2967] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#2a2967]'
            }
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={
              current === 5
                ? 'h-5 rounded-full w-5 bg-[#d21314] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#d21314]'
            }
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={
              current === 6
                ? 'h-5 rounded-full w-5 bg-[#0F0F11] animate-bounce'
                : 'h-5 rounded-full w-5 bg-[#0F0F11]'
            }
            onClick={() => setCurrent(6)}
          ></p>
        </div>
      </div>
    </div>
  );
};

const PriceTable = () => {
  return (
    <div className='overflow-scroll md:overflow-hidden rounded-2xl shadow-sm'>
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
          {celerioVariants?.map((item) => (
            <tr
              key={item.id}
              className='border-b border-gray-200 hover:bg-gray-100 uppercase'
            >
              <td className='py-3 px-4'>{item.title}</td>
              <td className='py-3 px-4'>{item.transmission}</td>
              <td className='py-3 px-4'>&nbsp;{item.price}</td>
            </tr>
          ))}
        </tbody>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
              FUEL TYPE
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
          {celerioMileage?.map((item) => (
            <tr
              key={item.id}
              className='border-b border-gray-200 hover:bg-gray-100 uppercase'
            >
              <td className='py-3 px-4'>{item.fueltype}</td>
              <td className='py-3 px-4'>{item.transmission}</td>
              <td className='py-3 px-4'>
                {item.mileage} <sup>*</sup>
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

const Table = () => {
  return (
    <div className='overflow-scroll md:overflow-hidden'>
      <table className='table-auto border-collapse border border-slate-400 uppercase w-full container mx-auto my-8 text-left text-sm'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Fuel Type
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Variant
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Mileage
            </th>
          </tr>
        </thead>
        <tbody>
          {celerioMileage?.map((item) => (
            <tr key={item.id}>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.fueltype}
              </td>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.transmission}
              </td>
              <td className='border border-slate-300 px-3 py-1.5'>
                {item.mileage} <sup>*</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='w-full container mx-auto my-auto text-left text-sm italic font-extralight text-red-500'>
        <span className='font-semibold'>Disclaimer:</span> The prices and
        mileage information provided in the table above are indicative and
        subject to change. The actual prices and mileage of Maruti Suzuki
        vehicles may vary based on factors such as location, dealer, variant,
        and other applicable conditions. For the most accurate and up-to-date
        information, please contact your nearest Saboo RKS Motor Maruti Suzuki
        dealership.
      </p>
    </div>
  );
};
export default Celerio;
