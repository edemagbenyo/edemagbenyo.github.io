import React from 'react'
import AirPlus from '../../assets/airplus.png'
import Covid from '../../assets/covid.png'
export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
            <div className="w-full">
              <h1>My best works</h1>

            </div>
            <div
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src=""
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Chrome extension
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Remotic
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Remotic is a chrome extension that helps job seekers get curated list of open positions right in their browsers. Remotic search for job openings from a list of platforms.
                  </p>
                </a>
              </div>
              <div
                className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  
                  <p className="text-gray-600 text-xs md:text-sm">HTML, CSS, Chrome Extension API</p>
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src={Covid}
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Web app
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Covid-19 Out
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Covid-19 Out is web dashboard for real time Covid-19 data. Get updates on the case count globally and per country right. Covid-19 Out provides data in both graphical and table format.
                  </p>
                </a>
              </div>
              <div
                className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  
                  <p className="text-gray-600 text-xs md:text-sm">HTML, CSS, ReatJS, Covid19 API</p>
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src={AirPlus}
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    IoT
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Air +
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Air+ is an IoT application for a S.O.E. device. The application is built on a Raspberry Pi3 that controls the medical device. Patients with insomnia and fatigue and other related diseases can benefit from it.
                  </p>
                </a>
              </div>
              <div
                className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  
                  <p className="text-gray-600 text-xs md:text-sm">Node.js, Vue.js, SQLite</p>
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/3657445/800x600"
                    className="h-full w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/764827/800x600"
                    className="h-full w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
              <div
                className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <img
                    className="w-8 h-8 rounded-full mr-4 avatar"
                    data-tippy-content="Author Name"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
