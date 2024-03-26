import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Tab } from '@headlessui/react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
// import ReCAPTCHA from 'react-google-recaptcha';
import { TextField, MenuItem } from '@mui/material';

function Contact() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [outlet, setOutlet] = useState('');
  const [model, setModel] = useState('');
  const [modelError, setModelError] = useState('');
  // const [selectedModel, setSelectedModel] = useState('');
  const [subject, setSubject] = useState('');
  // const [method, setMethod] = useState();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState(null);

  // adding date
  var result = '';
  var d = new Date();
  result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

  const checkFormValidity = () => {
    return (
      name.trim() !== '' &&
      emailPattern.test(email) &&
      phone.length === 10 &&
      model.trim() !== '' &&
      !loading
    );
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone || !model || !subject) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // if (!captchaValue) {
    //   toast.error('Please complete the reCAPTCHA challenge.');
    //   return;
    // }
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
          // adding date
          LEADCF83: result,
          Company: 'BroaddCast',
        }),
      });
      if (response.ok) {
        navigate('/thank-you-for-contact-us');
        // Handle success, e.g., show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }

    try {
      await axios
        .post('https://arena-backend-zj42.onrender.com/contactUs', {
          name: name,
          phone: phone,
          subject: subject,
          email: email,
          model: model,
          outlet: outlet,
          message: message,
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
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // setSubmitted(true);
        setLoading(false);
        // setLoading(false);
      });
  };

  // useEffect(() => {
  //   if (submitted) {
  //     document.getElementById('ContactCarEnq2').submit();
  //   }
  // }, [submitted]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Clear email error when email input changes
    setEmailError('');
  };

  const handleEmailBlur = () => {
    if (email.length > 0 && !emailPattern.test(email)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (phoneValue.length !== 10) {
      setPhoneError('Phone number must be 10 digits');
    } else {
      setPhoneError('');
    }
    // Update phone state
    setPhone(phoneValue);
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setModel(selectedModel);

    // Check if a model is selected
    if (!selectedModel) {
      setModelError('Please select a model');
    } else {
      // Clear model error when model is selected
      setModelError('');
    }
  };

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
      <Helmet>
        <title>
          Saboo Maruti | Contact us for any Maruti Car Sales, Feedback &
          Complaints
        </title>
        <meta
          name='title'
          content='Saboo Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        />
        <meta
          name='description'
          content='Contact your nearest Saboo Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488'
        />
        <meta
          name='keywords'
          content='car smowrooms, saboo sontact us, saboo true value'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Saboo Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        />
        <meta
          property='og:description'
          content='Contact your nearest Saboo Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488.'
        />
        <meta property='og:image' content='img/og-tags/contact_us.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Saboo Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        />
        <meta
          property='twitter:description'
          content='Contact your nearest Saboo Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488.'
        />
        <meta property='twitter:image' content='img/og-tags/contact_us.webp' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/Contact-Us-Banner.webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />
      <p className='text-4xl font-extrabold text-blue-800 text-center mt-8 mb-4'>
        Get In Touch
      </p>
      <p className='text-lg text-center text-gray-700 mb-6'>
        If you have any questions or concerns, please fill out the form below.
      </p>

      <div className='max-w-7xl mx-auto pt-14 pb-12 px-5 md:px-0'>
        <div className='grid md:grid-cols-4 p-2 lg:gap-10'>
          <div className='col-span-3'>
            <Tab.Group>
              {/* <Tab.List className='space-x-3 mb-7'>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-blue-800 text-gray-50 mb-3 max-w-[260px] w-full ml-3 focus:outline-none rounded-t-xl'
                      : 'bg-gray-100 text-blue-800 border hover:bg-blue-800 rounded-t-lg hover:text-gray-300 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                  }
                >
                  <p className='inline-flex py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent group uppercase '>
                    <FaCar className='mr-2 w-5 h-5' />
                    Car Enquiry
                  </p>
                </Tab>
              </Tab.List> */}
              <Tab.Panels>
                {/* Car Enquiry */}
                <Tab.Panel>
                  <form
                  // id='ContactCarEnq2'
                  // action={
                  //   pattern.test(phone) && phone.length === 10
                  //     ? 'https://crm.zoho.in/crm/WebToLeadForm'
                  //     : '#'
                  // }
                  // name='WebToLeads54158000083979838'
                  // method={'POST'}
                  // acceptCharset='UTF-8'
                  >
                    {/* <input
                      type='text'
                      className='hidden'
                      name='xnQsjsdp'
                      value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
                    />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input
                      type='text'
                      className='hidden'
                      name='xmIwtLD'
                      value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
                    />
                    <input
                      type='text'
                      className='hidden'
                      name='actionType'
                      value='TGVhZHM='
                    />
                    <input
                      type='text'
                      className='hidden'
                      name='returnURL'
                      value='https://www.saboomaruti.in/thank-you-for-contact-us'
                    /> */}
                    {/* <input
                      type='text'
                      className='hidden'
                      name='returnURL'
                      value='https://www.saboomaruti.in/thank-you-for-contact-us'
                    /> */}
                    <div className='space-y-4'>
                      <div className='grid md:grid-cols-2 gap-3 mb-3'>
                        <div>
                          {/* <label className='block text-sm font-medium text-gray-700'>
                            &nbsp;Name
                            <span className='sub text-red-600'>*</span>
                          </label> */}
                          <TextField
                            label='Name'
                            type='text'
                            id='Last Name'
                            name='Last Name'
                            onChange={(e) => setName(e.target.value)}
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            required
                          />
                        </div>
                        <div>
                          {/* <label className='block text-sm font-medium text-gray-700'>
                            Phone<span className='sub text-red-600'>*</span>
                          </label> */}
                          <TextField
                            label='Phone'
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your phone number'
                            id='Phone'
                            name='Phone'
                            value={phone}
                            required
                            inputProps={{ minLength: 10, maxLength: 10 }} // Setting minLength and maxLength as inputProps
                            onChange={handlePhoneChange}
                            error={!!phoneError} // Set error prop based on whether phoneError exists
                            helperText={phoneError} // Display phoneError as helper text
                          />
                        </div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'>
                          <div className='relative'>
                            <TextField
                              className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                              type='email'
                              label='Email'
                              id='Email'
                              name='Email'
                              placeholder='Enter your email'
                              value={email}
                              onChange={handleEmailChange}
                              onBlur={handleEmailBlur}
                              error={!!emailError} // Set error prop based on whether emailError exists
                              helperText={emailError} // Display emailError as helper text
                            />
                          </div>
                        </div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        {/* model */}
                        <div className=''>
                          <TextField
                            id='LEADCF23'
                            name='LEADCF23'
                            select
                            onChange={handleModelChange}
                            // defaultValue='Select Outlet'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            label='Model'
                            error={!!modelError}
                            helperText={modelError}
                          >
                            <MenuItem disabled>Select Model</MenuItem>
                            <MenuItem value='Alto 800'>Alto 800</MenuItem>
                            <MenuItem value='Alto K10'>Alto K10</MenuItem>
                            <MenuItem value='Wagon R'>Wagon R</MenuItem>
                            <MenuItem value='Celerio'>Celerio</MenuItem>
                            <MenuItem value='Swift'>Swift</MenuItem>
                            <MenuItem value='Dzire'>Dzire</MenuItem>
                            <MenuItem value='S-Presso'>S-Presso</MenuItem>
                            <MenuItem value='Ertiga'>Ertiga</MenuItem>
                            <MenuItem value='Brezza'>Brezza</MenuItem>
                            <MenuItem value='Eeco'>Eeco</MenuItem>
                          </TextField>
                        </div>
                        <div className=''>
                          <TextField
                            id='LEADCF23'
                            name='LEADCF23'
                            select
                            onChange={(e) => setOutlet(e.target.value)}
                            // defaultValue='Select Outlet'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            label='Outlet'
                          >
                            <MenuItem disabled>Select Outlet</MenuItem>
                            <MenuItem value='Somajiguda'>Somajiguda</MenuItem>
                            <MenuItem value='Malakpet'>Malakpet</MenuItem>
                            <MenuItem value='Secunderabad'>
                              Secunderabad
                            </MenuItem>
                            <MenuItem value='Kushaiguda'>Kushaiguda</MenuItem>
                            <MenuItem value='Kompally'>Kompally</MenuItem>
                            <MenuItem value='Shamirpet'>Shamirpet</MenuItem>
                            <MenuItem value='Narsingi'>Narsingi</MenuItem>
                            <MenuItem value='Kodangal'>Kodangal</MenuItem>
                            <MenuItem value='Sangeeth Circle'>
                              Sangeeth Circle
                            </MenuItem>
                          </TextField>
                        </div>
                      </div>
                      {/* subject */}
                      <div className='col-span-2'>
                        <TextField
                          id='LEADCF23'
                          name='LEADCF23'
                          select
                          // defaultValue='General Enquiry'
                          onChange={(e) => setSubject(e.target.value)}
                          className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          label='Subject'
                        >
                          <MenuItem disabled>Select Category</MenuItem>
                          <MenuItem value='General Enquiry'>
                            General Enquiry
                          </MenuItem>

                          <MenuItem value='Sales'>Sales</MenuItem>
                          <MenuItem value='Service'>Service</MenuItem>
                          <MenuItem value='Driving School'>
                            Driving School
                          </MenuItem>
                          <MenuItem value='Offers'>Latest Offers</MenuItem>
                          <MenuItem value='Finance'>Finance</MenuItem>
                          <MenuItem value='Insurance'>Insurance</MenuItem>
                          <MenuItem value='Accessories'>Accessories</MenuItem>
                          <MenuItem value='Other'>Other</MenuItem>
                        </TextField>
                        <div className='col-span-2'></div>
                      </div>
                      <div>
                        <TextField
                          label='Comments'
                          className='border h-20 outline-none px-1 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                          type='text'
                          id='message'
                          name='message'
                          placeholder='Enter your message'
                          onChange={(e) => setMessage(e.target.value)}
                        ></TextField>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='Lead Source'
                            name='Lead Source'
                          >
                            <option selected value='WEBSITE&#x20;VISIT'>
                              WEBSITE VISIT
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF4'
                            name='LEADCF4'
                          >
                            <option selected value='ARENA'>
                              ARENA
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='zcwf_row wfrm_fld_dpNn hidden'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF3'
                            name='LEADCF3'
                          >
                            <option selected value='INBOUND'>
                              INBOUND
                            </option>
                          </select>
                        </div>
                      </div>

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
                              className='px-2  text-sm  text-blue-800 hover:font-bold'
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>

                      {/* <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : I agree that by clicking the ‘Submit’ button below, I
                        am explicitly soliciting a call/Message from Saboo
                        Maruti (RKS Motor Pvt. Ltd) or its Representatives on my
                        ‘Mobile’.
                      </p>
                      <div className='flex my-3'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div> */}
                      {/* <ReCAPTCHA
                        sitekey='6LcXK0wpAAAAAM_YuNjB0Q3c_5_ee9vTG8aQFjFn'
                        onChange={(value) => setCaptchaValue(value)}
                      /> */}
                      <button
                        className={`h-12 inline-flex justify-center mr-3 py-3 px-12 mt-4 mb-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
                          !checkFormValidity()
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                        }`}
                        disabled={
                          !checkFormValidity() ||
                          phone.length !== 10 ||
                          !pattern.test(phone) ||
                          loading
                        }
                        onClick={handleSubmit}
                      >
                        {loading ? (
                          <div className='flex items-center justify-center'>
                            <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                            Loading
                          </div>
                        ) : (
                          'SUBMIT'
                        )}
                      </button>
                    </div>
                  </form>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className='col-span-1 px-3 mt-4 space-y-3'>
            <a
              href='tel:9848898488'
              className='flex items-center text-blue-800'
            >
              <FaPhoneAlt className='mr-2 text-blue-800' />
              <span className='font-extralight text-blue-800'>
                Customer Support
              </span>{' '}
              &nbsp;| 9848898488
            </a>
            <a
              href='tel:9848898488'
              className='flex items-center text-blue-800'
            >
              <FaEnvelope className='mr-2 text-blue-800' />
              <span className='font-extralight text-blue-800'>Email </span>
              &nbsp;| info@saboomaruti.in
            </a>
            <div className='flex items-center text-center flex-col space-y-3'>
              <Link
                to='/showrooms'
                className='w-full py-2 bg-blue-800 text-gray-50 rounded-full'
              >
                Our Showrooms
              </Link>
              <Link
                to='/maruti-suzuki-car-service-center'
                className='w-full py-2 bg-blue-800 text-gray-50 rounded-full'
              >
                Our Workshops
              </Link>
              <Link
                to='/true-value'
                className='w-full py-2 bg-blue-800 text-gray-50 rounded-full'
              >
                True Value
              </Link>
              <Link
                to='/maruti-driving-school-locations'
                className='w-full py-2 bg-blue-800 text-gray-50 rounded-full'
              >
                Driving School
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
