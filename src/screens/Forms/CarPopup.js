// import React from 'react';
// import { useEffect, useState } from 'react';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import Header from '../../components/header/Header';
// import AltoCNG1 from '../../assets/banners/Alto800_Mojito_Green.webp';
// import { Tab } from '@headlessui/react';
// import { Disclosure } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { CgSpinner } from 'react-icons/cg';
// import { Helmet } from 'react-helmet';
// import { CarEnquiryDown } from '../Forms/CarEnquiryDown';

// export const CarPopup = () => {
//   const [name, setName] = useState('');
//   const [model, setModel] = useState('Alto');

//   const [loading, setLoading] = useState(false);
//   const [phone, setPhone] = useState('');
//   const [open, setOpen] = useState(false);
//   const cancelButtonRef = useRef(null);
//   const [submitted, setSubmitted] = useState(false);

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

//           model: model,
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
//           // outlet: outlet,
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
//       document.getElementById('alto800Popup').submit();
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
//     <>
//       <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 sm:px-0 px-5'>
//         <div>
//           <ImageGallery
//             lazyLoad={true}
//             autoPlay={true}
//             thumbnailPosition='left'
//             showPlayButton={false}
//             items={altoSliders}
//           />
//         </div>

//         <div className='my-auto'>
//           <div className='flex flex-col items-center sm:flex-row sm:items-start'>
//             <p className='text-3xl font-bold mb-2 sm:mb-0 sm:mr-4'>{title}</p>
//             <img
//               className='w-14 h-7 mr-2 shadow-2xl'
//               src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/S-CNG_mimimum+black.webp'
//               alt=''
//             />
//           </div>
//           <p className='font-semibold text-lg'>
//             Ex-Showroom Price
//             <span className='text-red-600 ml-3 text-xl'>
//               ₹&nbsp;{price} Lakh*
//             </span>
//           </p>
//           <div className='flex items-center flex-wrap mt-5'>
//             <div className='flex items-center space-x-3 mr-7'>
//               <img
//                 src={require('../../assets/icons/speedometer.png')}
//                 className='h-8 w-8'
//                 alt=''
//               />
//               <p className='text-sm'>
//                 Engine <br />
//                 <span className='font-semibold'>{engine}cc</span>
//               </p>
//             </div>
//             <div className='flex items-center space-x-3 mx-3 mb-1'>
//               <img
//                 src={require('../../assets/icons/gas-station.png')}
//                 className='h-8 w-8'
//                 alt=''
//               />
//               <p className='text-sm'>
//                 Mileage <br />
//                 <span className='font-semibold'>{mileage}kmpl*</span>
//               </p>
//             </div>
//             <div className='flex items-center space-x-3 mr-7 mb-1'>
//               <img
//                 src={require('../../assets/icons/car.png')}
//                 className='h-8 w-8'
//                 alt=''
//               />
//               <p className='text-sm'>
//                 Power (kW) <br />
//                 <span className='font-semibold'>{power}</span>
//               </p>
//             </div>
//           </div>
//           <div className='flex items-center space-x-2 mt-5 mb-1'>
//             <button
//               className='px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm'
//               onClick={() => setOpen(true)}
//             >
//               Get Best Offers
//             </button>
//           </div>
//           <p className='h-px my-6 w-full bg-gray-300'></p>
//           <p className='mt-2 mb-5 text-sm'>
//             Our professional and well-trained staff is ready to assist you
//           </p>
//           <div className='flex items-center space-x-2 mt-5 mb-1'>
//             <a
//               href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Alto_Brand_Brochure.pdf'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm uppercase'
//             >
//               View Brochure
//             </a>
//             <a
//               href='/compare-cars'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm'
//             >
//               Compare
//             </a>
//           </div>
//         </div>
//       </div>

//       <Transition.Root show={open} as={Fragment}>
//         <Dialog
//           as='div'
//           className='relative z-10'
//           initialFocus={cancelButtonRef}
//           onClose={setOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter='ease-out duration-300'
//             enterFrom='opacity-0'
//             enterTo='opacity-100'
//             leave='ease-in duration-200'
//             leaveFrom='opacity-100'
//             leaveTo='opacity-0'
//           >
//             <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
//           </Transition.Child>

//           <div className='fixed z-10 inset-0 overflow-y-auto'>
//             <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
//               <Transition.Child
//                 as={Fragment}
//                 enter='ease-out duration-300'
//                 enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
//                 enterTo='opacity-100 translate-y-0 sm:scale-100'
//                 leave='ease-in duration-200'
//                 leaveFrom='opacity-100 translate-y-0 sm:scale-100'
//                 leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
//               >
//                 <form
//                   id='alto800Popup'
//                   action={
//                     pattern.test(phone) && phone.length === 10
//                       ? 'https://crm.zoho.in/crm/WebToLeadForm'
//                       : '#'
//                   }
//                   name='WebToLeads54158000083979838'
//                   method={'POST'}
//                   acceptCharset='UTF-8'
//                 >
//                   <input
//                     type='text'
//                     style={{ display: 'none' }}
//                     name='xnQsjsdp'
//                     value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
//                   />
//                   <input type='hidden' name='zc_gad' id='zc_gad' value='' />
//                   <input
//                     type='text'
//                     style={{ display: 'none' }}
//                     name='xmIwtLD'
//                     value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
//                   />
//                   <input
//                     type='text'
//                     style={{ display: 'none' }}
//                     name='actionType'
//                     value='TGVhZHM='
//                   />
//                   <input
//                     type='text'
//                     style={{ display: 'none' }}
//                     name='returnURL'
//                     value='https://www.saboomaruti.in/thank-you-for-contact-us'
//                   />
//                   <input
//                     type='text'
//                     style={{ display: 'none' }}
//                     id='ldeskuid'
//                     name='ldeskuid'
//                   />
//                   <input
//                     type='text'
//                     style={{ display: 'none' }}
//                     id='LDTuvid'
//                     name='LDTuvid'
//                   />
//                   <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
//                     <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
//                       <div className='mt-3'>
//                         <Dialog.Title
//                           as='h3'
//                           className='text-lg leading-6 font-medium text-gray-900 text-center'
//                         >
//                           Book A Test Drive / Get Offers
//                         </Dialog.Title>
//                         <div className='mt-2 space-y-3'>
//                           <div className='mt-2 py-8 space-y-3'>
//                             <div>
//                               <label className='block text-sm font-medium text-gray-700'>
//                                 Name
//                               </label>
//                               <input
//                                 type='text'
//                                 id='Last_Name'
//                                 name='Last Name'
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                                 className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
//                               />
//                             </div>

//                             {/* <div>
//                               <label className='block text-sm font-medium text-gray-700'>
//                                 Email
//                               </label>
//                               <input
//                                 type='email'
//                                 ftype='email'
//                                 id='Email'
//                                 name='Email'
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
//                               />
//                             </div> */}

//                             <div>
//                               <label className='block text-sm font-medium text-gray-700'>
//                                 Phone
//                               </label>
//                               <input
//                                 type='text'
//                                 id='Phone'
//                                 name='Phone'
//                                 minLength='10'
//                                 maxLength='10'
//                                 value={phone}
//                                 onChange={(e) =>
//                                   setPhone(
//                                     e.target.value.replace(/[^1-9 ]/g, '') &&
//                                       e.target.value.replace(/ /g, '')
//                                   )
//                                 }
//                                 className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
//                               />
//                               {phone.length > 0 && phone.length < 10 ? (
//                                 <small className='text-red-500'>
//                                   Phone number must be 10 digits
//                                 </small>
//                               ) : !pattern.test(phone) &&
//                                 phone.length === 10 ? (
//                                 <small className='text-red-500'>
//                                   Phone number is invalid
//                                 </small>
//                               ) : (
//                                 ''
//                               )}
//                             </div>

//                             <div>
//                               <label className='block text-sm font-medium text-gray-700'>
//                                 Model
//                               </label>
//                               <select
//                                 id='LEADCF6'
//                                 name='LEADCF6'
//                                 onChange={(e) => setModel(e.target.value)}
//                                 className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//                                 defaultValue={carname}
//                               >
//                                 <option disabled>Select Model</option>

//                                 <option value={carname}>{carname}</option>
//                               </select>
//                             </div>
//                           </div>

//                           {/* <div className='flex items-center space-x-2 mb-5'>
//                             <input
//                               id='comments'
//                               type='checkbox'
//                               className=' h-4 w-4 border-gray-300 rounded'
//                               required
//                             />
//                             <label
//                               htmlFor='comments'
//                               className='text-gray-700 text-sm'
//                             >
//                               I agree to the Privacy Policy and Terms of
//                               Service.
//                             </label>
//                           </div> */}
//                           <div className='flex items-start '>
//                             <div className='ml-2  text-sm'>
//                               <label
//                                 htmlFor='disclaimer'
//                                 className='font-medium text-gray-700'
//                               >
//                                 <span className='text-black font-bold'>
//                                   Disclaimer
//                                 </span>
//                                 <span className='text-black'>
//                                   : By clicking 'SUBMIT', you have agreed to our
//                                 </span>
//                                 <a
//                                   href='/maruti-car-terms-and-conditions'
//                                   target='_blank'
//                                   rel='noopener noreferrer'
//                                   className='px-2  text-sm  text-red-600 '
//                                 >
//                                   Terms and Conditions
//                                 </a>
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
//                       <button
//                         type='submit'
//                         disabled={!checkFormValidity()}
//                         onClick={handleSubmit}
//                         className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
//                           !checkFormValidity()
//                             ? 'bg-gray-400 cursor-not-allowed'
//                             : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
//                         }`}
//                       >
//                         {loading ? (
//                           <div className='flex items-center justify-center'>
//                             <CgSpinner className='animate-spin h-5 mr-2 text-white' />
//                             Loading
//                           </div>
//                         ) : (
//                           'SUBMIT'
//                         )}
//                       </button>
//                       <button
//                         type='button'
//                         className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black  hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500`}
//                         onClick={() => setOpen(false)}
//                         ref={cancelButtonRef}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </Dialog.Panel>
//                 </form>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </>
//   );
// };
