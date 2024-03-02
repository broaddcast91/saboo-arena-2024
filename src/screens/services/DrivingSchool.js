import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function DrivingSchool() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Driving School in Hyderabad | Fees & Offers on Maruti Driving
          School
        </title>
        <meta
          name='title'
          content='Maruti Driving School in Hyderabad | Fees & Offers on Maruti Driving School'
        />
        <meta
          name='description'
          content='Maruti Driving School in Hyderabad. Special initiatives that have lady instructors for women learners. Get world-class driving training at Maruti Driving School. Call now 9848898488 for fees & Offers.'
        />
        <meta name='keywords' content='suzuki, maruti suzuki suzuki' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-suzuki-driving-school'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Driving School in Hyderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Saboo Maruti Driving School in Hyderabad. Maruti Driving School locations in Hyderabad & Secunderabad. Call now for more info 98488 98488.'
        />
        <meta
          property='og:image'
          content='img/og-tags/maruti_driving_school.webp'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboomaruti.in/maruti-suzuki-driving-school'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Driving School in Hyderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti Driving School in Hyderabad. Maruti Driving School locations in Hyderabad & Secunderabad. Call now for more info 98488 98488.'
        />
        <meta
          property='twitter:image'
          content='img/og-tags/maruti_driving_school.webp'
        />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/saboo-driving-school-december-2023.webp'
        className='w-full mt-16'
        alt='default - dont delete'
      />
      {/* <RegisterInterest /> */}
      {/* <CarEnquiry /> */}

      <p className='mx-auto text-center max-w-6xl my-5 p-6 sm:px-0 text-3xl font-semibold text-[#232053]'>
        A pioneer in driving training since 2005, sets the gold standard with
        state-of-the-art technology and a progressive curriculum. <br></br>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container'>
        {/* Card 1: Happy Students */}
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/happy-student.webp'
            alt='Happy Student'
            className='object-cover mb-4 '
          />
          <p className='text-gray-500 text-3xl font-semibold mb-2 animate-pulse'>
            10,656
          </p>
          <p className=' font-semibold mb-2 text-[#232053]'>HAPPY STUDENTS</p>
          <p className='text-center font-light text-gray-500 text-sm'>
            We have successfully transformed 14,57,712 beginners into skilled
            and confident drivers.
          </p>
        </div>

        {/* Card 2: Certified Trainers */}
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/trained-faculty.webp'
            alt='Certified Trainers'
            className='object-cover mb-4 '
          />
          <p className='text-gray-500 text-3xl font-semibold mb-2 animate-pulse'>
            10
          </p>
          <p className=' font-semibold mb-2 text-[#232053]'>
            CERTIFIED TRAINERS
          </p>
          <p className='text-center font-light text-gray-500 text-sm'>
            Get driving training from our team of driving professionals that has
            1,328 certified male and female trainers.
          </p>
        </div>

        {/* Card 3: Training Schools */}
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/authorised-dealers.webp'
            alt='Training Schools'
            className='object-cover mb-4 '
          />
          <p className='text-gray-500 text-3xl font-semibold mb-2 animate-pulse'>
            3
          </p>
          <p className='text-gray-700 font-semibold mb-2'>TRAINING SCHOOLS</p>
          <p className='text-center font-light text-gray-500 text-sm'>
            We have made quality driving training accessible with our widespread
            network of 475+ Training Schools.
          </p>
        </div>
      </div>

      {/* <p className='mx-auto text-center max-w-6xl my-5 p-6 sm:px-0 text-3xl font-bold text-[#232053]'>
        Our commitment to excellence has redefined driving training nationwide,
        ensuring learners receive unparalleled instruction and confidence on the
        roads. <br></br>
      </p> */}
      <Confidence />
      <Tabs />
      {/* <LearnerCourse />
      <AdvanceCourse />
      <CorporateCourse /> */}
      {/* <DrivingSchoolForm /> */}
      <DrivingSchoolEnquiry />
    </>
  );
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='container mx-auto p-2'>
      <div className='flex flex-col sm:flex-row mb-4'>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 1 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(1)}
        >
          STANDARD
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 2 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(2)}
        >
          EXTENDED
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 3 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(3)}
        >
          DETAILED
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 4 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(4)}
        >
          ADVANCED
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 rounded-t flex items-center justify-center ${
            activeTab === 5 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(5)}
        >
          CORPORATE
        </div>
      </div>

      <div className='bg-white rounded'>
        {activeTab === 1 && <LearnerCourse />}
        {activeTab === 2 && <LearnerExtendedCourse />}
        {activeTab === 3 && <LearnerDetailedCourse />}
        {activeTab === 4 && <AdvanceCourse />}
        {activeTab === 5 && <CorporateCourse />}
      </div>
    </div>
  );
};

const DrivingSchoolEnquiry = ({ title, carName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // const [method, setMethod] = useState();
  // const [email, setEmail] = useState('noname@gmail.com');
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // Inside your component function
  // const [showToast, setShowToast] = useState(false);

  const checkFormValidity = () => {
    return name.trim() !== '' && phone.length === 10 && !loading;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !phone || !outlet) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-driving-school', {
    //       name: name,
    //       phone: phone,
    //       // email: email,

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
        .post('https://arena-backend-zj42.onrender.com/drvingSchool', {
          name: name,
          phone: phone,
          // email: email,

          outlet: outlet,
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
      document.getElementById('arenaCarEnq2').submit();
    }
  }, [submitted]);

  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <div className='bg-blue-800 py-12 mt-12'>
      <div className='container mx-auto space-y-5 lg:px-0 px-5'>
        <h3 className='text-xl font-normal text-white normal-case'>
          Start Your Driving Journey
        </h3>
        <form
          id='arenaCarEnq2'
          action={
            pattern.test(phone) && phone.length === 10
              ? 'https://crm.zoho.in/crm/WebToLeadForm'
              : '#'
          }
          name='WebToLeads54158000086119144'
          method={'POST'}
          acceptCharset='UTF-8'
        >
          <input
            type='text'
            className='hidden'
            name='xnQsjsdp'
            value='e90826c3339d3ba260a0d53e08a10af72619bc0156dbc13c479cffbba0f90eb0'
          />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input
            type='text'
            className='hidden'
            name='xmIwtLD'
            value='fa1ac1c97e29ced20fe77c2e3e1f30966c62a31509e502e343c8914d44ef78454149ad0bebf0a241396d5a54d9439aee'
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
          />
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            <div>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                placeholder='Name'
                id='Last_Name'
                name='Last Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter your phone number'
                minlength='10'
                maxlength='10'
                id='Phone'
                name='Phone'
                value={phone}
                required
                minLength='10'
                maxLength='10'
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9 ]/g, '') &&
                      e.target.value.replace(/ /g, '')
                  )
                }
              />
              {phone.length > 7 && phone.length < 10 ? (
                <small className='text-red-500'>
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className='text-red-500'>Phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            {/* email */}
            {/* <div>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500'
                type='email'
                ftype='email'
                id='Email'
                name='Email'
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && !emailPattern.test(email) ? (
                <small className='text-red-500'>Invalid email address</small>
              ) : (
                ''
              )}
            </div> */}
            <div>
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
                <option value='Kushaiguda'>Kushaiguda</option>
                <option value='Malakpet'>Malakpet</option>
                <option value='Nampally'>Nampally</option>
              </select>
            </div>
          </div>
          {/* <div className='flex items-center space-x-1 my-3'>
          <input id='comments' name='comments' type='checkbox' required />
          <label htmlFor='comments' className='font-medium text-gray-200'>
            I Agree
          </label>
        </div>
        <p className='text-gray-200 mb-2'>
          <span className='font-semibold'>Disclaimer :</span> I agree that
          by clicking the ‘Submit’ button below, I am explicitly soliciting
          a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
          Representatives on my ‘Mobile’
        </p> */}
          <button
            type='submit'
            disabled={
              !checkFormValidity() ||
              phone.length !== 10 ||
              !pattern.test(phone) ||
              loading
            }
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
          <div className='flex items-start py-1 '>
            <div className='ml-2 text-sm'>
              <label
                htmlFor='disclaimer'
                className='font-medium text-gray-700 italic'
              >
                <span className='text-white font-bold'>Disclaimer</span>
                <span className='text-white font-extralight'>
                  : By clicking 'SUBMIT', you agree to our
                </span>
                <a
                  href='/maruti-car-terms-and-conditions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-2  text-sm font-bold  text-red-700 '
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Confidence = () => {
  return (
    <div className='container mx-auto border text-center p-5 my-7 rounded shadow-md '>
      <p className='font-semibold text-3xl text-[#232053] normal-case'>
        Elevate your driving skills with our expert courses.
      </p>
      <p className='text-gray-500 text-lg mt-3 font-extralight'>
        Discover confidence on the road through our thoughtfully crafted driving
        courses. Whether you're a beginner or looking to refine your skills, our
        diverse training programs are tailored to make you a skilled and
        self-assured driver. <br />
        <br />
        <span className='font-light text-[#232053]'>
          Join Saboo Maruti Suzuki Driving School and embark on a journey
          towards driving excellence,{' '}
          <span className='text-red-700 font-extralight'>
            pick your favourite course below.
          </span>
        </span>
      </p>
    </div>
  );
};

const LearnerCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded p-5 mb-7'>
      <div className='grid sm:grid-cols-2 items-center'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/learner-course.webp'
          alt='1'
          className='mx-auto w-full md:w-2/3 h-auto object-cover'
        />
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Learner Standard Track Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Session</p>
              <p className='text-sm text-gray-500'>10 Hours</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            If you’ve never been behind the steering wheel, this course is for
            you. At the end of 21 days, you’ll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What’s more, you’ll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};
const LearnerExtendedCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded p-5 mb-7'>
      <div className='grid sm:grid-cols-2 items-center'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/Learner+Extended+Track+Course.webp'
          alt='1'
          className='mx-auto w-full md:w-2/3 h-auto object-cover'
        />
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Learner Extended Track Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Session</p>
              <p className='text-sm text-gray-500'>15 Hours</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            f you've never been behind the steering wheel, this course is for
            you. At the end of 26 days, you'll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What's more, you'll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};
const LearnerDetailedCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded p-5 mb-7'>
      <div className='grid sm:grid-cols-2 items-center'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/Learner+Detailed+Track+Course.webp'
          alt='1'
          className='mx-auto w-full md:w-2/3 h-auto object-cover'
        />
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Learner Detailed Track Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Session</p>
              <p className='text-sm text-gray-500'>20 Hours</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            f you've never been behind the steering wheel, this course is for
            you. At the end of 31 days, you'll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What's more, you'll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};

const AdvanceCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded  p-5 mb-7'>
      <div className='grid sm:grid-cols-2 items-center'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/advance-course.webp'
          alt='1'
          className='w-full h-auto'
        />
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Advance Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>02 Hours</p>
            </div>

            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Practical Session</p>
              <p className='text-sm text-gray-500'>06 Hours</p>
            </div>
            {/* <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div> */}
          </div>
          <p className='my-5'>
            If you’re the one who has a license but feels under-confident while
            driving alone, this course is for you. At the end of these exciting
            8 days, you’ll take on the roads effortlessly. How? By training
            under proficient trainers, of course.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};

const CorporateCourse = () => {
  return (
    <div className='bg-white container mx-auto shadow-lg rounded  p-5'>
      <div className='grid sm:grid-cols-2 items-center'>
        <div className='p-6'>
          <p className='text-blue-800 font-semibold text-2xl mb-5'>
            Corporate Course
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Theory Session */}
            <div className='text-center border py-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-white p-4 mx-2 my-4'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='mx-auto w-16 h-16 object-cover'
                alt='1'
              />
              <p className='text-lg font-semibold mt-4'>Theory Session</p>
              <p className='text-sm text-gray-500'>01 Hour</p>
            </div>
            {/* ... (Repeat for other sessions) */}
          </div>
          <p className='my-5'>
            Hiring a driver? Or Looking to brush up the skills of your
            executives? Have them take this course. By the end of it, you’ll be
            able to access the proficiency of the driver on 25 parameters like
            the ability to manage cars, adherence to traffic rules and practice
            of safety norms, among others. For the executives, special emphasis
            is laid on changing their attitude and road culture.
          </p>
          <a
            href='tel:9848898488'
            className='px-4 py-2 bg-blue-800 rounded text-white uppercase inline-block hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/corporate-course.webp'
          alt='1'
          className='w-full h-auto'
        />
      </div>
    </div>
  );
};

export default DrivingSchool;
