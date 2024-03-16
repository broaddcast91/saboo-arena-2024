import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const NewBlog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/news?apikey=pub_39957196bed819c0bec9a9b01230c205f7b79&q=maruti%20suzuki'
        );
        setArticles(response.data.results.slice(0, 6) || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className='container mx-auto pt-14 mt-10 ' id='blog'>
        <div className='flex flex-col items-center sm:px-5 md:flex-row border bg-white rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg border-gray-300'>
          <div className='w-full md:w-1/2'>
            <a href='#_' className='block'>
              <img
                className='object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96'
                src='https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202402/Maruti_57.jpg?VersionId=X3ClJC83YytkQi3cIlNsoMpf3Ky5VqDA'
                alt='page-title'
              />
            </a>
          </div>
          <div className='flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2'>
            <div>
              <div className='flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5'>
                <div className='bg-red-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block p-2'>
                  <svg
                    className='w-3.5 h-3.5 mr-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                  <span>MARUTI SUZUKI</span>
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-800 leading-tight'>
                  <a href='#_'>
                    Check the Latest Automobile News and{' '}
                    <span className='italic'>Maruti Suzuki</span> Updates
                  </a>
                </h1>
                <p className='pt-2 text-sm font-medium'>
                  by{' '}
                  <a href='/' className='mr-1 underline'>
                    Saboo Maruti
                  </a>{' '}
                  <span className='mx-1'>Via</span>
                  <span className='mx-1 text-gray-600'>newsdata.io</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-10'>
          {articles.map((article) => (
            <div
              key={article.id}
              className='bg-white rounded-lg border overflow-hidden flex flex-col'
            >
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className='w-full h-40 object-cover'
                />
              )}
              <div className='p-6 flex flex-col justify-between'>
                <h2 className='text-2xl font-normal mb-4 text-blue-800'>
                  {article.title}
                </h2>
                {/* <p className='text-gray-600 font-light'>
          {article.description}
        </p> */}
                <div className='flex justify-center mt-auto'>
                  <a
                    href={article.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-800 hover:bg-red-700 text-white font-light py-2 px-4 rounded-full'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewBlog;
