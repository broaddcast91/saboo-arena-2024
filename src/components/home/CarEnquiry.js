import React, { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { useEffect } from 'react';
import { CgSpinner } from 'react-icons/cg';

function CarEnquiry() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('noname@gmail.com');
  const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState('');
  const [loading, setLoading] = useState(false);
  // const [showToast, setShowToast] = useState(false);
  // const [method, setMethod] = useState();
  // const [submitted, setSubmitted] = useState(false);

  const checkFormValidity = () => {
    return (
      name.trim() !== '' &&
      emailPattern.test(email) &&
      phone.length === 10 &&
      model !== '' && // Ensure a model is selected
      !loading
    );
  };

  const checkFormValidity2 = () => {
    return (
      name.trim() !== '' &&
      emailPattern.test(email) &&
      phone.length === 10 &&
      outlet !== '' &&
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
      const response = await fetch('https://crm.zoho.in/crm/WebToLeadForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          xnQsjsdp:
            'c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529',
          zc_gad: '',
          xmIwtLD:
            'adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4',
          actionType: 'TGVhZHM=',
          returnURL: 'https://www.saboomaruti.in/',
          'Last Name': name,
          Email: phone + '@gmail.com',
          Phone: phone,
          LEADCF6: model,
          LEADCF23: outlet,
        }),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
    //       name: name,
    //       phone: phone,
    //       email: email,
    //       model: model,
    //       outlet: outlet,
    //     })
    //     .then((res) => {
    //       toast.success('Enquiry sent successfully');
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       toast.error('Something went wrong!');
    //       console.log(err);
    //     });
    // } catch (error) {
    //   // toast.error("Something went wrong!");
    //   setLoading(false);
    // }

    try {
      await axios
        .post('https://arena-backend-zj42.onrender.com/general', {
          name: name,
          phone: phone,
          email: email,
          model: model,
          outlet: outlet,

          leadFrom: 'Book a Test Drive',
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
        // setSubmitted(true);
        setOpen(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // setSubmitted(true);
        setOpen(false);
        setLoading(false);
      });

    setPhone('');
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://crm.zoho.in/crm/WebToLeadForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          xnQsjsdp:
            'c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529',
          zc_gad: '',
          xmIwtLD:
            'adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4',
          actionType: 'TGVhZHM=',
          returnURL: 'https://www.saboomaruti.in/',
          'Last Name': name,
          Email: phone + '@gmail.com',
          Phone: phone,
          // LEADCF6: model,
          LEADCF23: outlet,
        }),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
    //       name: name,
    //       phone: phone,
    //       email: email,
    //       // model: model,
    //       outlet: outlet,
    //     })
    //     .then((res) => {
    //       toast.success('Enquiry sent successfully');
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       toast.error('Something went wrong!');
    //       console.log(err);
    //     });
    // } catch (error) {
    //   // toast.error("Something went wrong!");
    //   setLoading(false);
    // }

    try {
      await axios
        .post('https://arena-backend-zj42.onrender.com/general', {
          name: name,
          phone: phone,
          email: email,

          outlet: outlet,

          leadFrom: 'Book a Showroom Visit',
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
        // setSubmitted(true);
        setOpen2(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // setSubmitted(true);
        setOpen2(false);
        setLoading(false);
      });

    setPhone('');
  };

  // useEffect(() => {
  //   if (submitted) {
  //     document.getElementById('arenaCarEnq2').submit();
  //   }
  // }, [submitted]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className='container mx-auto py-2'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3 lg:px-0  px-5'>
          {/* 1st from */}
          <button onClick={() => setOpen(true)}>
            <div className='bg-white drop-shadow-lg hover:shadow-lg outline-none rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/test-drive.webp'
                alt='test drive'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-[#293e91]'>
                book a test drive
              </p>
            </div>
          </button>
          <Link to='/showrooms'>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/locate.webp'
                alt='locate a showroom'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-[#293e91]'>
                locate a showroom
              </p>
            </div>
          </Link>
          {/* 2nd button */}
          <button onClick={() => setOpen2(true)}>
            <div className='bg-white drop-shadow-lg outline-none hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Calender.webp'
                alt='test drive'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-[#293e91]'>
                book a showroom visit
              </p>
            </div>
          </button>
          <Link to='/maruti-suzuki-car-insurance-renewal'>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] border mt-5 mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/insurance.webp'
                alt='test drive'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-[#293e91]'>
                insurance renewal
              </p>
            </div>
          </Link>
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
                // id='arenaCarEnq2'
                // action={
                //   pattern.test(phone) && phone.length === 10
                //     ? 'https://crm.zoho.in/crm/WebToLeadForm'
                //     : '#'
                // }
                // name='WebToLeads54158000083979838'
                // method={'POST'}
                // acceptCharset='UTF-8'
                >
                  <Dialog.Panel className='relative bg-gray-100 p-2 text-left  rounded-3xl overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full '>
                    <div className='bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 lg:p-10'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-xl leading-6 font-medium text-blue-900 text-center'
                        >
                          Book A Test Drive
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='mt-2 space-y-3'>
                            <div className=''>
                              <label className='block text-sm font-light text-gray-700'>
                                Name<span className='sub text-red-600'>*</span>
                              </label>
                              <input
                                type='text'
                                id='Last_Name'
                                required
                                name='Last Name'
                                onChange={(e) => setName(e.target.value)}
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm  border-gray-600 rounded-full h-10'
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-light text-gray-700'>
                                Email<span className='sub text-red-600'>*</span>
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm  border-gray-600 rounded-full h-10'
                              />
                              {email.length > 0 && !emailPattern.test(email) ? (
                                <small className='text-red-500'>
                                  Invalid email address
                                </small>
                              ) : (
                                ''
                              )}
                            </div>

                            <div>
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
                              <label className='block text-sm font-light text-gray-700'>
                                Model<span className='sub text-red-600'>*</span>
                              </label>
                              <select
                                id='LEADCF6'
                                name='LEADCF6'
                                onChange={(e) => {
                                  const selectedValue = e.target.value;

                                  // Check if the selected option is not "Select Model"
                                  if (selectedValue !== 'Select Model') {
                                    // Perform the backend call or set the model state here
                                    setModel(selectedValue);
                                  }
                                }}
                                defaultValue='Select Model'
                                className='border-gray-600 block w-full py-2 px-3   bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option disabled>Select Model</option>
                                <optgroup label='Hatchback'>
                                  <option value='Alto K10'>Alto K10</option>
                                  <option value='Alto 800'>Alto</option>
                                  <option value='Wagon R'>Wagon R</option>
                                  <option value='Celerio'>Celerio</option>
                                  <option value='Swift'>Swift</option>
                                </optgroup>

                                <optgroup label='Sedan'>
                                  <option value='Dzire'>Dzire</option>
                                </optgroup>

                                <optgroup label='micro SUV'>
                                  <option value='S-Presso'>S-Presso</option>
                                </optgroup>
                                <optgroup label='MPV'>
                                  <option value='Ertiga'>Ertiga</option>
                                </optgroup>
                                <optgroup label='SUV'>
                                  <option value='Brezza'>Brezza</option>
                                </optgroup>
                                <optgroup label='Mini Van'>
                                  <option value='Eeco'>Eeco</option>
                                </optgroup>
                              </select>
                            </div>

                            {/* <div>
                              <label className='block text-sm font-light text-gray-700'>
                                Outlet
                                <span className='sub text-red-600'>*</span>
                              </label>
                              <select
                                id='LEADCF23'
                                name='LEADCF23'
                                onChange={(e) => {
                                  const selectedValue = e.target.value;

                                  // Check if the selected option is not "Select Outlet"
                                  if (selectedValue !== 'Select Outlet') {
                                    // Perform the backend call or set the model state here
                                    setOutlet(selectedValue);
                                  }
                                }}
                                defaultValue='Select Outlet'
                                className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option disabled>Select Outlet</option>
                                <option value='Somajiguda'>Somajiguda</option>
                                <option value='Malakpet'>Malakpet</option>
                                <option value='Secunderabad'>
                                  Secunderabad
                                </option>
                                <option value='Kushaiguda'>Kushaiguda</option>
                                <option value='Kompally'>Kompally</option>
                                <option value='Shamirpet'>Shamirpet</option>
                                <option value='Narsingi'>Narsingi</option>
                                <option value='Kodangal'>Kodangal</option>
                              </select>
                            </div> */}
                          </div>

                          <div className='flex items-start '>
                            <div className='ml-2 italic text-xs'>
                              <label
                                htmlFor='disclaimer'
                                className='font-medium text-gray-700'
                              >
                                <span className='text-black font-bold'>
                                  Disclaimer
                                </span>
                                <span className='text-black font-light text-xs'>
                                  : By clicking 'SUBMIT',&nbsp; you agree to our
                                </span>
                                <a
                                  href='/maruti-car-terms-and-conditions'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='font-semibold text-xs  text-blue-800 hover:font-bold hover:underline'
                                >
                                  &nbsp;Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-100 p-3 pd-8 sm:px-6 sm:flex sm:flex-row-reverse flex flex-col items-center justify-center'>
                      <button
                        type='submit'
                        disabled={
                          !checkFormValidity() ||
                          phone.length !== 10 ||
                          !pattern.test(phone) ||
                          loading
                        }
                        onClick={handleSubmit}
                        className={`h-10 inline-flex m-4 justify-center w-full sm:w-auto my-2 sm:my-0 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
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
                        className='h-10 rounded-full inline-flex justify-center px-4 py-2 border-solid border-blue-900 border shadow-md bg-white text-base font-medium text-blue-900 hover:bg-red-700 hover:border-red-700 hover:text-white focus:outline-none w-full sm:w-auto sm:text-sm'
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
      <Transition.Root show={open2} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen2}
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
                // id='arenaCarEnq2'
                // action={
                //   pattern.test(phone) && phone.length === 10
                //     ? 'https://crm.zoho.in/crm/WebToLeadForm'
                //     : '#'
                // }
                // name='WebToLeads54158000083979838'
                // method={'POST'}
                // acceptCharset='UTF-8'
                >
                  <Dialog.Panel className='relative bg-gray-100 p-2 text-left  rounded-3xl overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full '>
                    <div className='bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 lg:p-10'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-xl leading-6 font-medium text-blue-900 text-center'
                        >
                          Book A Showroom Visit
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='mt-2 space-y-3'>
                            <div className=''>
                              <label className='block text-sm font-light text-gray-700'>
                                Name<span className='sub text-red-600'>*</span>
                              </label>
                              <input
                                type='text'
                                id='Last_Name'
                                required
                                name='Last Name'
                                onChange={(e) => setName(e.target.value)}
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm  border-gray-600 rounded-full h-10'
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-light text-gray-700'>
                                Email<span className='sub text-red-600'>*</span>
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm  border-gray-600 rounded-full h-10'
                              />
                              {email.length > 0 && !emailPattern.test(email) ? (
                                <small className='text-red-500'>
                                  Invalid email address
                                </small>
                              ) : (
                                ''
                              )}
                            </div>

                            <div>
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
                              <label className='block text-sm font-light text-gray-700'>
                                Outlet
                                <span className='sub text-red-600'>*</span>
                              </label>
                              <select
                                id='LEADCF23'
                                name='LEADCF23'
                                onChange={(e) => {
                                  const selectedValue = e.target.value;

                                  // Check if the selected option is not "Select Outlet"
                                  if (selectedValue !== 'Select Outlet') {
                                    // Perform the backend call or set the model state here
                                    setOutlet(selectedValue);
                                  }
                                }}
                                defaultValue='Select Outlet'
                                className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option disabled>Select Outlet</option>
                                <option value='Somajiguda'>Somajiguda</option>
                                <option value='Malakpet'>Malakpet</option>
                                <option value='Secunderabad'>
                                  Secunderabad
                                </option>
                                <option value='Kushaiguda'>Kushaiguda</option>
                                <option value='Kompally'>Kompally</option>
                                <option value='Shamirpet'>Shamirpet</option>
                                <option value='Narsingi'>Narsingi</option>
                                <option value='Kodangal'>Kodangal</option>
                                <option value='Sangeeth Circle'>
                                  Sangeeth Circle
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className='flex items-start '>
                            <div className='ml-2 italic text-xs'>
                              <label
                                htmlFor='disclaimer'
                                className='font-medium text-gray-700'
                              >
                                <span className='text-black font-bold'>
                                  Disclaimer
                                </span>
                                <span className='text-black font-light text-xs'>
                                  : By clicking 'SUBMIT',&nbsp; you agree to our
                                </span>
                                <a
                                  href='/maruti-car-terms-and-conditions'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='font-semibold text-xs  text-blue-800 '
                                >
                                  &nbsp;Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-100 p-3 sm:px-6 sm:flex sm:flex-row-reverse flex flex-col items-center justify-center'>
                      <button
                        type='submit'
                        disabled={
                          !checkFormValidity2() ||
                          phone.length !== 10 ||
                          !pattern.test(phone) ||
                          loading
                        }
                        onClick={handleSubmit2}
                        className={`h-10 inline-flex m-4 justify-center w-full sm:w-auto my-2 sm:my-0 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
                          !checkFormValidity2()
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
                        className='h-10 rounded-full inline-flex justify-center px-4 py-2 border-solid border-blue-900 border shadow-md bg-white text-base font-medium text-blue-900 hover:bg-red-700 hover:border-red-700 hover:text-white focus:outline-none w-full sm:w-auto sm:text-sm'
                        onClick={() => setOpen2(false)}
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
}

export default CarEnquiry;
