import React, { useState, Fragment, useRef } from 'react';
import { useEffect } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { Dialog, Transition } from '@headlessui/react';
import {
  altoK10Colors,
  altoK10Sliders,
  altoK10Variants,
  altok10Mileage,
} from '../../constants/altoK10Data';
import AltoK10Banner from '../../assets/banners/vehicles/banners-2024/Saboo_RKS_Maruti_Suzuki_Arena_Dealer_In_Hyderabad_Alto_K10.webp';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import { Link } from 'react-router-dom';

function AltoK10() {
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
          Maruti Suzuki Alto K10 On Road Price in Hyderabad | 2024 Maruti Alto
          K10 Offers
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Alto K10 On Road Price in Hyderabad | 2024 Maruti Alto Offers'
        />
        <meta
          name='description'
          content='Maruti Suzuki Alto K10 Price in Hyderabad & Secunderabad. Alto 2024 Price Starts at 3.39* LakhBest price and offers on Maruti Alto 800 at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals. '
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
        src={AltoK10Banner}
        className='max-w-full w-full lg:mt-16'
        alt='Buy Maruti Suzuki Alto K10 in Hyderabad'
      />
      <CarsSlider scrollToCarEnquiry={scrollToCarEnquiry} />

      <div className='container mx-auto'>
        <div className='mx-5'>
          <div className='flex flex-col lg:flex-row lg:space-x-4 rounded-3xl'>
            <div className='lg:w-1/2 mb-4 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='Alto K10' carName='Alto K10' />
            </div>
            <div className='lg:w-1/2'>
              <Colors />
            </div>
          </div>

          <div className='mt-8'>
            <PriceTable />
            {/* <Table /> */}
          </div>
        </div>
      </div>

      <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-prospectus.webp'
          alt='brochure'
          className='w-full'
        />
      </div>
    </>
  );
}

const CarsSlider = ({ scrollToCarEnquiry }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('AltoK10');
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
      document.getElementById('AltoK10Popup').submit();
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
            items={altoK10Sliders}
          />
        </div>

        <div className='my-auto'>
          <div className='flex flex-col items-center sm:flex-row sm:items-start'>
            <p className='text-3xl font-light mb-2 sm:mb-0 sm:mr-4 text-blue-800'>
              Maruti Suzuki <span className='font-semibold'>Alto K10</span>
            </p>
            <img
              className='w-12 h-7  mr-2 shadow-2xl'
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
              ₹&nbsp;3.99 - 5.85 Lakh*
            </span>
          </p>
          <div className='flex items-center flex-wrap mt-5 text-blue-800'>
            <div className='flex items-center space-x-3 mr-7'>
              <img
                src={require('../../assets/icons/speedometer.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Engine <br />
                <span className='font-semibold'>998 cc</span>
              </p>
            </div>

            <div className='flex items-center space-x-3 mr-7'>
              <img
                src={require('../../assets/icons/gas-station.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Mileage <br />
                <span className='font-semibold'>24.90 kmpl*</span>
              </p>
            </div>

            <div className='flex items-center space-x-3 mr-7'>
              <img
                src={require('../../assets/icons/car.png')}
                className='h-8 w-8'
                alt=''
              />
              <p className='text-sm'>
                Power (kW) <br />
                <span className='font-semibold'>49</span>
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 md:mt-5 md:mb-1 '>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-brochure.pdf'
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
              to='/alto-k10-cng'
              className='flex-1 block px-4 py-2 text-sm bg-white hover:bg-green-600 border border-blue-800 text-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center'
            >
              Get CNG
            </Link>
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <form
                  id='AltoK10Popup'
                  action={
                    pattern.test(phone) && phone.length === 10
                      ? 'https://crm.zoho.in/crm/WebToLeadForm'
                      : '#'
                  }
                  name='WebToLeads54158000083979838'
                  method={'POST'}
                  acceptCharset='UTF-8'
                >
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='xnQsjsdp'
                    value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
                  />
                  <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='xmIwtLD'
                    value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='actionType'
                    value='TGVhZHM='
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='returnURL'
                    value='https://www.saboomaruti.in/thank-you-for-contact-us'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    id='ldeskuid'
                    name='ldeskuid'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    id='LDTuvid'
                    name='LDTuvid'
                  />
                  <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                    <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-lg leading-6 font-medium text-gray-900 text-center'
                        >
                          Book A Test Drive / Get Offers
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='mt-2 py-8 space-y-3'>
                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Name
                              </label>
                              <input
                                type='text'
                                id='Last_Name'
                                name='Last Name'
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                            </div>

                            {/* <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Email
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                            </div> */}

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Phone
                              </label>
                              <input
                                type='text'
                                id='Phone'
                                name='Phone'
                                minLength='10'
                                maxLength='10'
                                value={phone}
                                onChange={(e) =>
                                  setPhone(
                                    e.target.value.replace(/[^1-9 ]/g, '') &&
                                      e.target.value.replace(/ /g, '')
                                  )
                                }
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                              {phone.length > 0 && phone.length < 10 ? (
                                <small className='text-red-500'>
                                  Phone number must be 10 digits
                                </small>
                              ) : !pattern.test(phone) &&
                                phone.length === 10 ? (
                                <small className='text-red-500'>
                                  Phone number is invalid
                                </small>
                              ) : (
                                ''
                              )}
                            </div>

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Model
                              </label>
                              <select
                                id='LEADCF6'
                                name='LEADCF6'
                                onChange={(e) => setModel(e.target.value)}
                                className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                defaultValue='Alto K10'
                              >
                                <option disabled>Select Model</option>

                                <option value='Alto K10'>Alto K10</option>
                              </select>
                            </div>
                          </div>

                          {/* <div className='flex items-center space-x-2 mb-5'>
                            <input
                              id='comments'
                              type='checkbox'
                              className=' h-4 w-4 border-gray-300 rounded'
                              required
                            />
                            <label
                              htmlFor='comments'
                              className='text-gray-700 text-sm'
                            >
                              I agree to the Privacy Policy and Terms of
                              Service.
                            </label>
                          </div> */}
                          <div className='flex items-start '>
                            <div className='ml-2  text-sm'>
                              <label
                                htmlFor='disclaimer'
                                className='font-medium text-gray-700'
                              >
                                <span className='text-black font-bold'>
                                  Disclaimer
                                </span>
                                <span className='text-black'>
                                  : By clicking 'SUBMIT', you have agreed to our
                                </span>
                                <a
                                  href='/maruti-car-terms-and-conditions'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='px-2  text-sm  text-red-600 '
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                      <button
                        type='submit'
                        disabled={!checkFormValidity()}
                        onClick={handleSubmit}
                        className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                          !checkFormValidity()
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                        }`}
                      >
                        {loading ? (
                          <div className='flex items-center justify-center'>
                            <CgSpinner className='animate-spin h-5 mr-2 text-white' />
                            Loading
                          </div>
                        ) : (
                          'SUBMIT'
                        )}
                      </button>
                      <button
                        type='button'
                        className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black  hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500`}
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='border rounded-3xl mt-8 bg-gray-100'>
      {' '}
      <div className='container mx-auto mt-12 py-12 flex flex-col items-center'>
        {altoK10Colors.map((item) => (
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
            } h-5 rounded-full w-5 bg-[#BF001B]`}
            onClick={(e) => setCurrent(1)}
          ></p>
          <p
            className={`${
              current === 2 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#1F2FDC]`}
            onClick={(e) => setCurrent(2)}
          ></p>
          <p
            className={`${
              current === 3 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#3e403f]`}
            onClick={(e) => setCurrent(3)}
          ></p>

          <p
            className={`${
              current === 4 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#b3b5b0]`}
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={`${
              current === 5 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#dce0e1]`}
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={`${
              current === 6 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#dd9c6b]`}
            onClick={() => setCurrent(6)}
          ></p>
          <p
            className={`${
              current === 7 ? 'animate-bounce' : ''
            } h-5 rounded-full w-5 bg-[#0F1112]`}
            onClick={() => setCurrent(7)}
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
          {altok10Mileage?.map((item) => (
            <tr
              key={item.id}
              className='border-b border-gray-200 hover:bg-gray-100'
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
          {altoK10Variants?.map((item) => (
            <tr
              key={item.id}
              className='border-b border-gray-200 hover:bg-gray-100'
            >
              <td className='py-3 px-4'>{item.title}</td>
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

export default AltoK10;
