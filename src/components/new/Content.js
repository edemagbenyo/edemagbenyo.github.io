import React from "react";
import NavMenu from "./NavMenu";
import Me from '../../assets/me.jpg'
export default function Content() {
  return (
    <div>
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <NavMenu/>
          <div
          className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t"
        >
          <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <a
              href="post.html"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <div className="w-full md:w-1/3 rounded-t bg-cover" style={{backgroundImage:`url(${Me})`}}>
                
              </div>

              <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink">
                <div
                  className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
                >
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mt-4">
                    Hi there👋, My name is 
                  </div>
                  <p className="w-full font-extrabold text-3xl md:text-5xl text-gray-600 pt-6 px-6">
                    Edem Agbenyo
                  </p>
                  <p className="text-gray-800 font-serif text-2xl text-base px-6 mb-5">
                    I am a Software Engineer, a father and a child of God. 
                  </p>
                </div>

                <div
                  className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-xs md:text-sm">Download my resume here</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
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
                    src=""
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Web app
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Covid-19 Tracker
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    at ip Aliquam at ipsum eu nunc commodo posuere et sit amet
                    ligula.
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
                    src=""
                    className="h-64 w-full rounded-t pb-6"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    IoT
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    Air +
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
        </div>
        </div>
      </div>
    </div>
  );
}
