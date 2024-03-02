import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// import loginkey from "../../assets/others/login_key.svg";

// Inside your component
import { object, string } from 'yup';
import { SlCallOut } from 'react-icons/sl';
import { IoLogoWhatsapp } from 'react-icons/io5';

import { useComponentState } from '../Context/StateProvide';

const phoneRegExp = /^[6-9]\d{9}$/;

const proposelSchema = object().shape({
  phone: string()
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'Required 10 digit phone number')
    .max(10, 'Required 10 digit phone number'),
});

function Popup2() {
  const { open2, setOpen2 } = useComponentState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem('popup') !== 'true') {
        setOpen2(true);
        // sessionStorage.setItem("popup", "true");
      }
    }, 3000);
  }, [setOpen2]);

  return (
    <Transition.Root show={open2} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-y-auto select-none'
        onClose={() => {
          setOpen2(true);
        }}
      >
        <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 h-[90vh] md:min-h-screen'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75' />
          </Transition.Child>

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
                <div
                  onClick={() => setOpen2(false)}
                  className='absolute flex items-center justify-center border rounded-full cursor-pointer hover:border-red-600 right-4 top-4 group hover:bg-red-500 '
                >
                  <div className='mx-2 text-xl font-light group-hover:text-white -mt-0.5 flex items-center gap-1  '>
                    x
                  </div>
                </div>
                <Dialog.Title as='h3' className='leading-6 text-center '>
                  {/* <img
                    src={loginkey}
                    alt="logo"
                    className="h-16 py-1 mx-auto"
                  /> */}
                  <div className='mt-2 text-center uppercase md:text-lg'>
                    Get a <span className='text-red-500 '>Free </span>
                    Quote & New
                    <span className='text-red-500 '> Offers</span>
                  </div>
                </Dialog.Title>

                <Formik
                  initialValues={{
                    phone: '',
                  }}
                  validationSchema={proposelSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    setLoading(true);
                    setSubmitting(true);
                    const allQuery = [];
                    const allErrors = [];
                    // First API call - Zoho Web Form - name="WebToLeads54158000007156717"
                    try {
                      await axios
                        .post(
                          'https://crm.zoho.in/crm/WebToLeadForm',
                          new URLSearchParams({
                            xnQsjsdp:
                              '5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b',
                            zc_gad: '',
                            xmIwtLD:
                              '3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283',
                            actionType: 'TGVhZHM=',
                            returnURL: 'https://saboonexa.in/',
                            'Last Name': 'Nexa Popup',
                            Email: `${values.phone}@gmail.com`,
                            LEADCF6: 'SABOO NEXA Popup',
                            Phone: values.phone,
                          }),
                          {
                            headers: {
                              'Content-Type':
                                'application/x-www-form-urlencoded',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.status === 200) {
                            console.log(response);
                            allQuery.push('Zoho, ');
                            // Handle success, e.g., show a success message
                          } else {
                            // allQuery.push(`Zoho - error, `);
                            allErrors.push(`zoho - ${response.statusText}, `);
                            // Handle error, e.g., show an error message
                          }
                        })
                        .catch((error) => {
                          console.error('Error:', error);
                          // allQuery.push(`Zoho - error, `);
                          allErrors.push(`zoho - ${error}, `);
                          // Handle network or other errors
                        });
                    } catch (error) {
                      // allQuery.push("Zoho - error, ");
                      allErrors.push(`zoho - ${error}, `);
                      // Handle network or other errors
                    }

                    sessionStorage.setItem('popup', 'true');

                    // Second API call - Old SQL Backend

                    try {
                      await axios
                        .post('https://saboogroups.com/admin/api/popup', {
                          phone: values.phone,
                        })
                        .then((res) => {
                          allQuery.push('old backend ');
                        })
                        .catch((err) => {
                          // allQuery.push("old backend - Error, ");
                          allErrors.push(`old backend - ${err}`);
                          setLoading(false);
                          toast.error('Something went wrong!-old Backend');
                          console.log(err);
                        });
                    } catch (error) {
                      // setLoader(false);
                      toast.error('Something went wrong!');
                    }

                    // Third API call - SMS Strikker
                    try {
                      await axios
                        .get(
                          `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${values.phone}&msg=Thank you for showing interest in Maruti Suzuki.
                       Our Sales consultant will contact you shortly.
                       Regards
                       RKS Motor Pvt. Ltd.
                       98488 98488
                       www.saboomaruti.in
                       www.saboonexa.in&type=1&template_id=1407168967467983613`
                        )
                        .then((res) => {
                          // console.log("SMS API Response:", res.data);
                          //   setSubmitted(true);
                          // setOpen2(false);
                          // allQuery.push("Sms, ");
                        })
                        .catch((err) => {
                          console.error('Error sending SMS:', err);
                          // setSubmitted(true);
                          // allQuery.push("Sms - Error, ");
                          // allErrors.push(`sms - ${err}`);

                          // setOpen2(false);
                        });
                      // Handle response for the third API call
                    } catch (error) {
                      // Handle error for the third API call
                    }

                    // Fourth API call - New MongoDB backend
                    // allQuery.push(allQuery.length);

                    try {
                      await axios
                        .post('https://saboo-nexa.onrender.com/popup', {
                          phone: values.phone,
                          allQuery: allQuery,
                          error: allErrors,
                        })
                        .then((res) => {
                          // toast.success("Enquiry sent successfully");
                          toast('Enquiry sent successfully', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                            //   transition: Bounce,
                          });
                          setOpen2(false);
                          setLoading(false);
                        })
                        .catch((err) => {
                          // setLoader(false);
                          setOpen2(false);
                          setLoading(false);
                          toast.error('Something went wrong!');
                          console.log(err);
                        });
                    } catch (error) {
                      setLoading(false);
                      setOpen2(false);
                      toast.error('Something went wrong!');
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className='space-y-4'>
                        <div className='relative flex flex-col items-center pt-4 pb-3'>
                          {/* <label
                              htmlFor="phone"
                              className="leading-7 text-gray-600 whitespace-nowrap"
                            >
                             Mobile Number  :
                            </label> */}

                          <Field
                            type='tel'
                            id='phone'
                            name='phone'
                            required
                            autoComplete='off'
                            maxLength={10}
                            placeholder=' Enter your mobile no here'
                            className='w-full h-10 px-3 text-center border border-black rounded-lg outline-none focus:bg-white'
                          />

                          <ErrorMessage
                            name='phone'
                            component='div'
                            className=' text-white bg-[#FF0000] text-sm px-2 py-0.5 w-min whitespace-nowrap mt-1 rounded  text-center opacity-70 '
                          />
                        </div>
                        <div className='flex items-center justify-center gap-2 mt-2 mb-6 '>
                          <a
                            href='tel:+919848898488'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-1/2 py-2 duration-200 bg-blue-500 border-b rounded-lg hover:shadow-lg group hover:text-white bg-opacity-5 hover:bg-opacity-100'
                          >
                            <SlCallOut
                              size={20}
                              className='mr-2 text-blue-700 duration-200 group-hover:text-white'
                            />
                            Call now
                          </a>
                          <a
                            href='https://wa.me/919848898488'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex justify-center w-1/2 py-2 duration-200 bg-green-500 border-b rounded-lg hover:shadow-lg item-center group hover:text-white bg-opacity-5 hover:bg-opacity-100'
                          >
                            <IoLogoWhatsapp
                              size={20}
                              className='mr-2 text-green-700 duration-200 group-hover:text-white '
                            />
                            WhatsApp
                          </a>
                        </div>

                        <div className='flex pt-2'>
                          <button
                            type='submit'
                            disabled={isSubmitting}
                            className={`${
                              loading
                                ? 'mx-auto w-10 rounded-full'
                                : 'w-full rounded-md '
                            }  mb-3 text-sm font-medium text-white bg-black cursor-pointer hover:scale-95 duration-300 shadow-lg `}
                          >
                            <div className='flex items-center justify-center min-h-8'>
                              <CgSpinner
                                className={`w-8 h-8 m-1 text-white animate-spin ${
                                  !loading && 'hidden'
                                }`}
                              />
                              <span
                                className={`${loading ? 'hidden ' : 'py-2'}`}
                              >
                                SUBMIT
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className='container mb-2 text-xs text-gray-600 '>
                        <span className='font-semibold'>*Disclaimer:</span> By
                        clicking 'Submit', you have agreed to our Terms and
                        Conditions.
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Popup2;
