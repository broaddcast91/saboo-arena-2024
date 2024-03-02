import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';

const NewBlog = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=maruti%20suzuki&sortBy=publishedAt&apiKey=3f8c18f89adb4fe1a76d2b61a19ee126&language=en'
        );
        const data = await response.json();
        setNewsData(data.articles.slice(0, 6)); // Limiting to first 6 articles
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section class='bg-gray-200/50 mt-10'>
        <div class='w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl'>
          {/* Blog Heading Section */}

          <div class='flex flex-col items-center sm:px-5 md:flex-row border bg-white rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg border-gray-300'>
            <div class='w-full md:w-1/2'>
              <a href='#_' class='block'>
                <img
                  class='object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96'
                  src='https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202402/Maruti_57.jpg?VersionId=X3ClJC83YytkQi3cIlNsoMpf3Ky5VqDA'
                  alt='page-title'
                />
              </a>
            </div>
            <div class='flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2'>
              <div>
                <div class='flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5'>
                  <div class='bg-red-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block p-2'>
                    <svg
                      class='w-3.5 h-3.5 mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <span>MARUTI SUZUKI</span>
                  </div>
                  <h1 class='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-800 leading-tight'>
                    <a href='#_'>
                      Check the Latest Automobile News and{' '}
                      <span className='italic'>Maruti Suzuki</span> Updates
                    </a>
                  </h1>
                  <p class='pt-2 text-sm font-medium'>
                    by{' '}
                    <Link to='/' class='mr-1 underline'>
                      Saboo Maruti
                    </Link>{' '}
                    <span class='mx-1'>Via</span>
                    <span class='mx-1 text-gray-600'>newsapi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Section */}
          <div className='flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16 bg-white pt-6 border rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'>
            {newsData.map((article, index) => (
              <div
                key={index}
                className='flex flex-col items-start col-span-12  space-y-3 sm:col-span-6 xl:col-span-4 rounded-lg  overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg'
              >
                <a href={article.url} className='block'>
                  <img
                    className='object-cover w-full h-40 md:h-56 rounded-t-lg'
                    src={article.urlToImage}
                    alt={article.title}
                  />
                </a>
                <div
                  className={`bg-${
                    (index % 6) + 1
                  }00 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block`}
                >
                  <span>{article.source.name}</span>
                </div>
                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl font-bold text-blue-800 p-2'>
                  <a href={article.url}>{article.title}</a>
                </h2>
                <p className='text-sm text-gray-500 p-2'>
                  {article.description}
                </p>
                <p className='pt-2 text-xs font-medium p-2'>
                  <span>{article.author}</span> ·{' '}
                  <span>{article.publishedAt}</span> ·{' '}
                  <span className='text-gray-600'>3 min. read</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewBlog;
