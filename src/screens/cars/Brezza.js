import React, { useState, useRef } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

import {
  brezzaColors,
  brezzaSliders,
  brezzaVariants,
  brezzaMileage,
} from '../../constants/brezzaData';
import BrezzaBanner from '../../assets/banners/vehicles/Buy Maruti Suzuki Brezza 2023 in Hyderabad.webp';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import axios from 'axios';

import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import { Link } from 'react-router-dom';

function Brezza() {
  // // const [email, setEmail] = useState('');
  const carEnquiryRef = useRef(null);
  const scrollToCarEnquiry = () => {
    if (carEnquiryRef.current) {
      carEnquiryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // const [phone, setPhone] = useState('');
  // const [model, setModel] = useState('');
  // const [method, setMethod] = useState();
  // const [loading, setLoading] = useState(false);
  // const [outlet, setOutlet] = useState('');
  // const [showToast, setShowToast] = useState(false);
  // function handleSubmit() {
  //   setLoading(true);

  //   // First API call
  //   axios
  //     .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
  //       name: name,

  //       phone: phone,
  //       model: model,
  //       outlet: outlet,
  //     })
  //     .then((res) => {
  //       setMethod('POST');
  //       toast.success('Enquiry sent successfully');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       toast.error('Something went wrong!');
  //       console.log(err);
  //     });

  //   // Second API call
  //   axios
  //     .get(
  //       `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
  //     Our Sales consultant will contact you shortly.

  //     Regards
  //     RKS Motor Pvt. Ltd.
  //     98488 98488
  //     www.saboomaruti.in
  //     www.saboonexa.in&type=1&template_id=1407168967467983613`
  //     )
  //     .then((res) => {
  //       console.log('SMS API Response:', res.data);
  //       // Handle the response from the SMS API if needed
  //     })
  //     .catch((err) => {
  //       console.error('Error sending SMS:', err);
  //       // Handle errors from the SMS API if needed
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  // const pattern = useMemo(() => {
  //   return /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  // }, []);

  // useEffect(() => {
  //   if (
  //     phone !== '' &&
  //     phone.length === 10 &&
  //     !pattern.test(phone) &&
  //     !loading
  //   ) {
  //     if (!showToast) {
  //       toast.error('Enter a valid phone number', {
  //         theme: 'colored',
  //       });
  //       setShowToast(true);
  //     }
  //   } else {
  //     setShowToast(false);
  //   }
  // }, [phone, pattern, loading, showToast]);

  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Brezza On Road Price in Secunderabad, Hyderabad & 2024
          Offers | All New Hot and Techy Brezza
        </title>
        <meta
          name='title'
          content=' Maruti Suzuki Brezza On Road Price in Secunderabad, Hyderabad & 2024
          Offers | All New Hot and Techy Brezza'
        />
        <meta
          name='description'
          content='Maruti Suzuki Brezza in Secunderabad & Hyderabad. Best price & offers on Maruti Suzuki Brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. '
        />
        {/* <meta
          name="keywords"
          content="Suzuki brezza on road price, Suzuki brezza offers, Suzuki brezza price, Suzuki brezza service center, maruti Suzuki brezza on road price, maruti Suzuki brezza offers, maruti Suzuki brezza price, maruti Suzuki brezza service center, maruti Suzuki brezza service center near me, maruti suzuki  brezza price, maruti suzuki Vitara brezza on road price, maruti suzuki Vitara brezza offers,maruti suzuki Vitara brezza, Vitara brezza on road price, Vitara brezza 2022 offers, Vitara brezza 2022 price, Vitara brezza on road price in hyderabad, breza offers in hyderabad, Vitara brezza price in hyderabad, maruti Vitara brezza 2022 price, maruti Vitara brezza 2022 on road price, maruti Vitara brezza 2022 offers, maruti Vitara brezza 2022 price in hyderabad, maruti Vitara brezza 2022 on road price in hyderabad, Maruti Suzuki Vitara brezza 2022 price, Maruti Suzuki Vitara brezza 2022 on road price, maruti suzuki Vitara brezza 2022 offers,  vitara Vitara brezza offers, Vitara Vitara brezza price, vitara Vitara brezza on road price, vitara Vitara brezza 2022 offers, vitara Vitara brezza 2022 price, vitara Vitara brezza 2022 on road price, vitara Vitara brezza 2022 offers,Vitara brezza on road price, Vitara brezza offers, Vitara brezza price, Vitara brezza service center, maruti Vitara brezza on road price, maruti Vitara brezza offers, maruti Vitara brezza price, maruti Vitara brezza service center, maruti Vitara brezza service center near me, maruti suzuki Vitara brezza price, maruti suzuki Vitara brezza on road price, maruti suzuki Vitara brezza offers,maruti suzuki Vitara brezza, Vitara brezza on road price, Vitara brezza 2022 offers, Vitara brezza 2022 price, Vitara brezza on road price in hyderabad, breza offers in hyderabad, ,Vitara brezza price in hyderabad, maruti Vitara brezza 2022 price, maruti Vitara brezza 2022 on road price, maruti Vitara brezza 2022 offers, maruti Vitara brezza 2022 price in hyderabad, maruti Vitara brezza 2022 on road price in hyderabad, Maruti Suzuki Vitara brezza 2022 price, Maruti Suzuki Vitara brezza 2022 on road price, maruti suzuki Vitara brezza 2022 offers,"
        /> */}
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-new-brezza-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Vitara Brezza Price | Vitara Brezza Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.84* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals.'
        />
        <meta property='og:image' content='img/og-tags/breeza.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-new-brezza-on-road-price-in-hyderabad'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Vitara Brezza Price | Vitara Brezza Mileage, Features, Specification | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.84* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals.'
        />
        <meta property='twitter:image' content='img/og-tags/breeza.webp' />
      </Helmet>
      <Header />
      <img
        src={BrezzaBanner}
        className='max-w-full w-full lg:mt-16'
        alt='Buy Maruti Suzuki Brezza 2023 in Hyderabad'
      />
      <CarsSlider scrollToCarEnquiry={scrollToCarEnquiry} />
      <div className='container mx-auto'>
        <div className='mx-5'>
          {/* Car Enquiry and Colors */}
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <div className='lg:w-1/2 mb-4 lg:mb-0' ref={carEnquiryRef}>
              <CarEnquiryDown title='Brezza' carName='Brezza' />
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
      <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/specifications/Brezza2022_new.webp'
          alt='brochure'
          className='w-full'
        />
      </div>
    </>
  );
}

//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [model, setModel] = useState('Brezza');
//   // const [method, setMethod] = useState();
//   const [loading, setLoading] = useState(false);
//   const [outlet, setOutlet] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   // Inside your component function
//   // const [showToast, setShowToast] = useState(false);
//   const checkFormValidity = () => {
//     return (
//       name.trim() !== '' &&
//       phone.length === 10 &&
//       model.trim() !== '' &&
//       !loading
//     );
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!name || !phone) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios
//         .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     try {
//       await axios
//         .post('https://arena-backend-zj42.onrender.com/onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     // Second API call
//     await axios
//       .get(
//         `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
//    Our Sales consultant will contact you shortly.

//    Regards
//    RKS Motor Pvt. Ltd.
//    98488 98488
//    www.saboomaruti.in
//    www.saboonexa.in&type=1&template_id=1407168967467983613`
//       )
//       .then((res) => {
//         console.log('SMS API Response:', res.data);
//         setSubmitted(true);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error sending SMS:', err);
//         setSubmitted(true);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (submitted) {
//       document.getElementById('arenaCarEnq2').submit();
//     }
//   }, [submitted]);

//   const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
//   if (phone !== '' && phone.length === 10) {
//     if (!pattern.test(phone)) {
//       toast.error('Enter valid phone number', {
//         theme: 'colored',
//       });
//     }
//   }

//   return (
//     <div className='bg-[#1b72b7] py-12 mt-12'>
//       <div className='container mx-auto space-y-5 lg:px-0 px-5'>
//         <h3 className='text-xl font-normal text-white normal-case'>
//           Get New Brezza On-Road price in Hyderabad
//         </h3>
//         <form
//           id='arenaCarEnq2'
//           action={
//             pattern.test(phone) && phone.length === 10
//               ? 'https://crm.zoho.in/crm/WebToLeadForm'
//               : '#'
//           }
//           name='WebToLeads54158000083979838'
//           method={'POST'}
//           acceptCharset='UTF-8'
//         >
//           <input
//             type='text'
//             className='hidden'
//             name='xnQsjsdp'
//             value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
//           />
//           <input type='hidden' name='zc_gad' id='zc_gad' value='' />
//           <input
//             type='text'
//             className='hidden'
//             name='xmIwtLD'
//             value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='actionType'
//             value='TGVhZHM='
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='returnURL'
//             value='https://www.saboomaruti.in/thank-you-for-contact-us'
//           />
//           <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
//             <div>
//               <input
//                 className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Name'
//                 id='Last_Name'
//                 name='Last Name'
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Enter your phone number'
//                 minlength='10'
//                 maxlength='10'
//                 id='Phone'
//                 name='Phone'
//                 value={phone}
//                 required
//                 minLength='10'
//                 maxLength='10'
//                 onChange={(e) =>
//                   setPhone(
//                     e.target.value.replace(/[^1-9 ]/g, '') &&
//                       e.target.value.replace(/ /g, '')
//                   )
//                 }
//               />
//               {phone.length > 7 && phone.length < 10 ? (
//                 <small className='text-red-500'>
//                   Phone number must be 10 digits
//                 </small>
//               ) : !pattern.test(phone) && phone.length === 10 ? (
//                 <small className='text-red-500'>Phone number is invalid</small>
//               ) : (
//                 ''
//               )}
//             </div>
//             <div>
//               <select
//                 id='LEADCF6'
//                 name='LEADCF6'
//                 onChange={(e) => setModel(e.target.value)}
//                 className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//                 defaultValue='Brezza'
//               >
//                 <option disabled>Select Model</option>

//                 <option value='Brezza'>Brezza</option>
//               </select>
//             </div>
//             <div>
//               <select
//                 id='LEADCF23'
//                 name='LEADCF23'
//                 onChange={(e) => {
//                   const selectedValue = e.target.value;

//                   // Check if the selected option is not "Select Outlet"
//                   if (selectedValue !== 'Select Outlet') {
//                     // Perform the backend call or set the model state here
//                     setOutlet(selectedValue);
//                   }
//                 }}
//                 defaultValue='Select Outlet'
//                 className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//               >
//                 <option disabled>Select Outlet</option>
//                 <option value='Somajiguda'>Somajiguda</option>
//                 <option value='Malakpet'>Malakpet</option>
//                 <option value='Secunderabad'>Secunderabad</option>
//                 <option value='Kushaiguda'>Kushaiguda</option>
//                 <option value='Kompally'>Kompally</option>
//                 <option value='Shamirpet'>Shamirpet</option>
//                 <option value='Narsingi'>Narsingi</option>
//                 <option value='Kodangal'>Kodangal</option>
//               </select>
//             </div>
//           </div>
//           {/* <div className='flex items-center space-x-1 my-3'>
//           <input id='comments' name='comments' type='checkbox' required />
//           <label htmlFor='comments' className='font-medium text-gray-200'>
//             I Agree
//           </label>
//         </div>
//         <p className='text-gray-200 mb-2'>
//           <span className='font-semibold'>Disclaimer :</span> I agree that
//           by clicking the ‘Submit’ button below, I am explicitly soliciting
//           a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
//           Representatives on my ‘Mobile’
//         </p> */}
//           <button
//             type='submit'
//             disabled={!checkFormValidity()}
//             onClick={handleSubmit}
//             className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
//               !checkFormValidity()
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
//             }`}
//           >
//             {loading ? (
//               <div className='flex items-center justify-center'>
//                 <CgSpinner className='animate-spin h-5 mr-2 text-white' />
//                 Loading
//               </div>
//             ) : (
//               'SUBMIT'
//             )}
//           </button>
//           <div className='flex items-start py-1 '>
//             <div className='ml-2 text-sm'>
//               <label
//                 htmlFor='disclaimer'
//                 className='font-medium text-gray-700 italic'
//               >
//                 <span className='text-white font-bold'>Disclaimer</span>
//                 <span className='text-white font-extralight'>
//                   : By clicking 'SUBMIT', you agree to our
//                 </span>
//                 <a
//                   href='/maruti-car-terms-and-conditions'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-2  text-sm font-bold  text-red-700 '
//                 >
//                   Terms and Conditions
//                 </a>
//               </label>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

const CarsSlider = ({ scrollToCarEnquiry }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('Brezza');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');

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
      document.getElementById('brezzaPopup').submit();
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
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 sm:px-0 px-5'>
      <div>
        <ImageGallery
          lazyLoad={true}
          autoPlay={true}
          thumbnailPosition='left'
          showPlayButton={false}
          items={brezzaSliders}
        />
      </div>

      <div className='my-auto'>
        <div className='flex flex-col items-center sm:flex-row sm:items-start'>
          <p className='text-3xl font-light mb-2 sm:mb-0 sm:mr-4 text-blue-800'>
            Maruti Suzuki <span className='font-semibold'>Brezza</span>
          </p>
          <img
            className='w-14 h-7  mr-2 shadow-xl'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/AGS.webp'
            alt=''
          />
          <img
            className='w-14 h-7 mr-2'
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
          Ex-Showroom Price:
          <span className='text-red-600 ml-3 text-xl'>
            ₹&nbsp;8.34 - 14.14 Lakh*
          </span>
        </p>
        <div className='flex items-center flex-wrap mt-5 text-blue-800'>
          <div className='flex items-center space-x-3 mr-7'>
            <img
              src={require('../../assets/icons/speedometer.png')}
              className='h-8 w-8'
              alt='speedometer'
            />
            <p className='text-sm'>
              Engine <br />
              <span className='font-semibold'>1462 CC</span>
            </p>
          </div>

          <div className='flex items-center space-x-3 mx-3 mb-1'>
            <img
              src={require('../../assets/icons/gas-station.png')}
              className='h-8 w-8'
              alt='gas-station'
            />
            <p className='text-sm'>
              Mileage (KM/L)
              <br />
              <span className='font-semibold'>
                19.80<sup>*</sup>
              </span>
            </p>
          </div>

          <div className='flex items-center space-x-3 mr-7 mb-1'>
            <img
              src={require('../../assets/icons/car.png')}
              className='h-8 w-8'
              alt='car-icon'
            />
            <p className='text-sm'>
              Power (kW) <br />
              <span className='font-semibold'>75.8</span>
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 md:mt-5 md:mb-1 '>
          {/* <button
            className='px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm'
            onClick={scrollToCarEnquiry}
          >
            Get Best Offers
          </button> */}
          <a
            href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Brezza2022_Hot_Techy_SUV_Broucher.pdf'
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
            to='/maruti-brezza-cng-on-road-price'
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
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className='container mx-auto bg-gray-100 rounded-3xl mt-16 py-8 flex flex-col items-center'>
      {brezzaColors.map((item) => (
        <img
          key={item.id}
          src={item.img}
          className={item.id === current ? 'mx-auto sm:h-80' : 'hidden'}
          alt={item.id}
        />
      ))}
      <div className='flex items-center justify-center space-x-3 sm:space-y-0 space-y-1'>
        <p
          className={
            current === 1
              ? 'h-5 rounded-full w-5 animate-bounce bg-[#5d5135]'
              : 'h-5 rounded-full w-5 bg-[#5d5135]'
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? 'h-5 rounded-full w-5 bg-[#264b9c] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#264b9c]'
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? 'h-5 rounded-full w-5 bg-[#8d8d8d] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#8d8d8d] '
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #5d5135 50%, #ffffff 50%)',
          }}
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300 animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300'
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #e62924 50%, #3e403f 50%)',
          }}
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? 'h-5 rounded-full w-5 bg-[#e62924] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#e62924]'
          }
          onClick={(e) => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? 'h-5 rounded-full w-5 animate-bounce'
              : 'h-5 rounded-full w-5'
          }
          style={{
            background: 'linear-gradient(61deg, #5d5135 50%, #000 50%)',
          }}
          onClick={(e) => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? 'h-5 rounded-full w-5 bg-[#c5c5c5] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#c5c5c5]'
          }
          onClick={(e) => setCurrent(9)}
        ></p>
        <p
          className={
            current === 10
              ? 'h-5 rounded-full w-5 bg-[#141316] animate-bounce'
              : 'h-5 rounded-full w-5 bg-[#141316]'
          }
          onClick={(e) => setCurrent(10)}
        ></p>
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
          {brezzaVariants?.map((item) => (
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
          {brezzaMileage?.map((item) => (
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
              Variants
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Transmission
            </th>
            <th className='border border-slate-300 font-normal px-3 py-1.5'>
              Mileage
            </th>
          </tr>
        </thead>
        <tbody>
          {brezzaMileage?.map((item) => (
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
export default Brezza;
