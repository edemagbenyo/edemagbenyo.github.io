import React from "react";
import NavMenu from "./NavMenu";
import Me from '../../assets/me.jpg'
import Projects from "./Projects";
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
                    I am a Software Engineer, a husband, a father and a child of God. I am always striving to be a better person each day.
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
          <Projects/>
        </div>
        </div>
      </div>
    </div>
  );
}
