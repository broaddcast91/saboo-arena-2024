import React, { useState } from 'react';
import { useEffect } from 'react';
// import { BsCalendarCheck } from "react-icons/bs";
import 'react-image-gallery/styles/css/image-gallery.css';

import { toast } from 'react-toastify';

import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';

export const CarEnquiryDown = ({ title, carName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState(carName);

  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
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

    if (!name || !phone || !model) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
          name: name,
          phone: phone,
          // email: email,
          model: model,
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

    try {
      await axios
        .post('https://arena-backend-zj42.onrender.com/onRoadPrice', {
          name: name,
          phone: phone,
          // email: email,
          model: model,
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

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    // <div className='bg-[#1b72b7] py-12 mt-12'>
    <div className='container mx-auto bg-gray-100 py-6 mt-8 rounded-3xl p-5 lg:p-6 shadow'>
      <h3 className='text-xl font-semibold text-blue-800 normal-case mb-5'>
        Get {title} On-Road price in Hyderabad
      </h3>
      <form
        id='arenaCarEnq2'
        action={
          pattern.test(phone) && phone.length === 10
            ? 'https://crm.zoho.in/crm/WebToLeadForm'
            : '#'
        }
        name='WebToLeads54158000083979838'
        method={'POST'}
        acceptCharset='UTF-8'
        className='grid gap-4'
      >
        <div>
          <input
            className='border h-10 outline-none px-3 rounded-full w-full focus:ring-blue-500 focus:border-blue-500 mb-4'
            placeholder='Name'
            id='Last_Name'
            name='Last Name'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className='border h-10 outline-none px-3 rounded-full w-full focus:ring-blue-500 focus:border-blue-500 mb-4'
            placeholder='Enter your phone number'
            minLength='10'
            maxLength='10'
            id='Phone'
            name='Phone'
            value={phone}
            required
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
        <div>
          <select
            id='LEADCF6'
            name='LEADCF6'
            onChange={(e) => setModel(e.target.value)}
            required
            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-4'
            defaultValue={carName}
          >
            <option disabled>Select Model</option>
            <option value={carName}>{carName}</option>
          </select>
        </div>
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
            className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-4'
          >
            <option disabled>Select Outlet</option>
            <option value='Somajiguda'>Somajiguda</option>
            <option value='Malakpet'>Malakpet</option>
            <option value='Secunderabad'>Secunderabad</option>
            <option value='Kushaiguda'>Kushaiguda</option>
            <option value='Kompally'>Kompally</option>
            <option value='Shamirpet'>Shamirpet</option>
            <option value='Narsingi'>Narsingi</option>
            <option value='Kodangal'>Kodangal</option>
            <option value='Sangeeth Circle'>Sangeeth Circle</option>
          </select>
        </div>

        <button
          type='submit'
          disabled={!checkFormValidity()}
          onClick={handleSubmit}
          className={`h-10 inline-flex justify-center py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
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
              <span className='text-blue-800 font-bold'>Disclaimer</span>
              <span className='text-blue-800 font-extralight'>
                : By clicking 'SUBMIT', you agree to our
              </span>
              <a
                href='/maruti-car-terms-and-conditions'
                target='_blank'
                rel='noopener noreferrer'
                className='px-2  text-sm hover:font-bold hover:underline  text-blue-800 '
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
