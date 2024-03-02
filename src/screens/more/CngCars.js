import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { cngProducts } from '../../constants';
import { BiRupee } from 'react-icons/bi';
import { Helmet } from 'react-helmet';

function CngCars() {
  return (
    <>
     <Helmet>
        <title>
          Maruti Suzuki CNG Cars in Hyderabad | Buy Maruti CNG Cars in Hyderabad 2024
        </title>
        <meta
          name='title'
          content=' Maruti Suzuki CNG Cars in Hyderabad | Buy Maruti CNG Cars in Hyderabad 2024'
        />
        <meta
          name='description'
          content='Saboo Maruti CNG Cars in Hyderabad.Buy Brezza CNG, Swift CNG, Alto CNG Cars in Hyderabad. Choose the location to find the nearest authorized Maruti Service Center. Free pickup and drop Facility. To Book service Appointment today Call us on 9848898488'
        />
        <meta
          name='keywords'
          content='vitara brezza service in hyderabad, buy maruti cng cars in hyderabad. vitara brezza service centers, vitara brezza service ceneter near me,vitara brezza workshops near me, vitara brezza workshops,  vitara brezza body shop, vitara brezza bodyshop near me, vitara brezza bodyshop in hyderabad, maruti vitara brezza service, maruti vitara brezza service hyderabad, maruti vitara brezza service centers near me, maruti suzuki vitara brezza service, maruti suzki vitara brezza service centers near me, maruti suzuki vitara brezza workshops , maruti suzuki vitara brezza workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki vitara brezza service center hyderabad, maruti suzuki vitara brezza workshop hyderabad, maruti suzuki vitara brezza bodyshop workshop hyderabad,brezza service in hyderabad, brezza service centers, brezza service ceneter near me,brezza workshops near me, brezza workshops,  brezza body shop, brezza bodyshop near me, brezza bodyshop in hyderabad, maruti brezza service, maruti brezza service hyderabad, maruti brezza service centers near me, maruti suzuki brezza service, maruti suzki brezza service centers near me, maruti suzuki brezza workshops , maruti suzuki brezza workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki brezza service center hyderabad, maruti suzuki brezza workshop hyderabad, maruti suzuki brezza bodyshop workshop hyderabad,wagno r service in hyderabad, wagno r service centers, wagno r service ceneter near me,wagno r workshops near me, wagno r workshops,  wagno r body shop, wagno r bodyshop near me, wagno r bodyshop in hyderabad, maruti wagno r service, maruti wagno r service hyderabad, maruti wagno r service centers near me, maruti suzuki wagno r service, maruti suzki wagno r service centers near me, maruti suzuki wagno r workshops , maruti suzuki wagno r workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki wagno r service center hyderabad, maruti suzuki wagno r workshop hyderabad, maruti suzuki wagno r bodyshop workshop hyderabad,eeco service in hyderabad, eeco service centers, eeco service ceneter near me,eeco workshops near me, eeco workshops,  eeco body shop, eeco bodyshop near me, eeco bodyshop in hyderabad, maruti eeco service, maruti eeco service hyderabad, maruti eeco service centers near me, maruti suzuki eeco service, maruti suzki eeco service centers near me, maruti suzuki eeco workshops , maruti suzuki eeco workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki eeco service center hyderabad, maruti suzuki eeco workshop hyderabad, maruti suzuki eeco bodyshop workshop hyderabad,ertiga service in hyderabad, ertiga service centers, ertiga service ceneter near me,ertiga workshops near me, ertiga workshops,  ertiga body shop, ertiga bodyshop near me, ertiga bodyshop in hyderabad, maruti ertiga service, maruti ertiga service hyderabad, maruti ertiga service centers near me, maruti suzuki ertiga service, maruti suzki ertiga service centers near me, maruti suzuki ertiga workshops , maruti suzuki ertiga workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki ertiga service center hyderabad, maruti suzuki ertiga workshop hyderabad, maruti suzuki ertiga bodyshop workshop hyderabad,dzire service in hyderabad, dzire service centers, dzire service ceneter near me,dzire workshops near me, dzire workshops,  dzire body shop, dzire bodyshop near me, dzire bodyshop in hyderabad, maruti dzire service, maruti dzire service hyderabad, maruti dzire service centers near me, maruti suzuki dzire service, maruti suzki dzire service centers near me, maruti suzuki dzire workshops , maruti suzuki dzire workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki dzire service center hyderabad, maruti suzuki dzire workshop hyderabad, maruti suzuki dzire bodyshop workshop hyderabad,celerio service in hyderabad, celerio service centers, celerio service ceneter near me,celerio workshops near me, celerio workshops,  celerio body shop, celerio bodyshop near me, celerio bodyshop in hyderabad, maruti celerio service, maruti celerio service hyderabad, maruti celerio service centers near me, maruti suzuki celerio service, maruti suzki celerio service centers near me, maruti suzuki celerio workshops , maruti suzuki celerio workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki celerio service center hyderabad, maruti suzuki celerio workshop hyderabad, maruti suzuki celerio bodyshop workshop hyderabad,spresso service in hyderabad, spresso service centers, spresso service ceneter near me,spresso workshops near me, spresso workshops,  spresso body shop, spresso bodyshop near me, spresso bodyshop in hyderabad, maruti spresso service, maruti spresso service hyderabad, maruti spresso service centers near me, maruti suzuki spresso service, maruti suzki spresso service centers near me, maruti suzuki spresso workshops , maruti suzuki spresso workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki spresso service center hyderabad, maruti suzuki spresso workshop hyderabad, maruti suzuki spresso bodyshop workshop hyderabad,Maruti Suzuki Service Center,swift service in hyderabad, swift service centers, swift service ceneter near me,swift workshops near me, swift workshops,  swift body shop, swift bodyshop near me, swift bodyshop in hyderabad, maruti swift service, maruti swift service hyderabad, maruti swift service centers near me, maruti suzuki swift service, maruti suzki swift service centers near me, maruti suzuki swift workshops , maruti suzuki swift workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki swift service center hyderabad, maruti suzuki swift workshop hyderabad, maruti suzuki swift bodyshop workshop hyderabad, Maruti Car Service, Maruti Service Center Near Me, Maruti Service Centers in Hyderabad, Maruti Authorized Service Center Near Me,alto service in hyderabad, alto service centers, alto service ceneter near me,alto workshops near me, alto workshops,  alto body shop, alto bodyshop near me, alto bodyshop in hyderabad, maruti alto service, maruti alto service hyderabad, maruti alto service centers near me, maruti suzuki alto service, maruti suzki alto service centers near me, maruti suzuki alto workshops , maruti suzuki alto workshops in hyderabad, maruti suzuki workshop near me,maruti suuzki alto service center hyderabad, maruti suzuki alto workshop hyderabad, maruti suzuki alto bodyshop workshop hyderabad'
        />
        <meta name='author' content='BroaddCast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboomaruti.in/' />
        <meta
          property='og:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='og:description'
          content='Saboo Maruti CNG Cars in Hyderabad.Buy Brezza CNG, Swift CNG, Alto CNG Cars in Hyderabad. Choose the location to find the nearest authorized Maruti Service Center. Free pickup and drop Facility. To Book service Appointment today Call us on 9848898488'
        />
        <meta property='og:image' content='img/og-tags/saboo_rks.jpg' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.saboomaruti.in/' />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Authorized Dealers in Hyderabad & Secunderabad | Saboo Maruti'
        />
        <meta
          property='twitter:description'
          content='Saboo Maruti is an authorized Maruti Suzuki service center in Hyderabad. Visit your nearest authorized Maruti Car Service Center. We offer free pickup & drop facility. To Book car service Appointment Today Call us on 9848898488'
        />
        <meta property='twitter:image' content='img/og-tags/saboo_rks.jpg' />
      </Helmet>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/1920x400-Backdrop.webp'
        className='w-full lg:mt-20'
        alt='banner'
      />
      <p className='text-green-500 text-center text-2xl mt-4'>
        Maruti CNG Cars
      </p>
      <p className='text-sm text-center mb-4 px-5'>
        Our professional and well trained staff is ready to assist you.
      </p>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-5 pb-5'>
        {cngProducts.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] lg:h-[310px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-5' />
                  <div>
                    <p className='flex items-center font-bold'>
                      <BiRupee />
                      &nbsp;{item.price}
                      <sup>*</sup>
                    </p>{' '}
                    <p className='font-light'>ex-showroom</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-3 pb-5'>
                  <Link
                    to={item.explore}
                    className='bg-green-700 hover:bg-red-700 hover:border hover:text-red duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-800 text-blue-800 hover:bg-red-700 hover:border-red-700 hover:text-white  p-2 max-w-[44%] w-full text-center text-sm uppercase rounded-full'
                  >
                    Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CngCars;
