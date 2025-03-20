import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel'; // Import your carousel component here
import Recon from './Recon';

function Stress() {
  return (
    <div>
      <NavBar />
      <section className="relative bg-gradient-to-r from-violet-50 to-orange-50 mt-10 bg-gray-200">
        {/* Content */}
        {/* Container */}
        <div className="stress1 mx-auto w-full px-5 md:px-10 md:py-24 lg:py-16">
          {/* Content Grid */}
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2 w-full">
            {/* Heading Content */}
            <div className="max-w-[720px] p-8 bg-gray-900 bg-opacity-80 shadow-lg rounded-lg ml-20 mt-20">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-green-700 md:text-6xl">Reduce Stress and Anxiety</h1>
              <p className="mb-6 max-w-[528px] text-xl text-white md:mb-10">Discover effective strategies to manage stress and reduce anxiety, from mindfulness practices to lifestyle changes that promote mental well-being.</p>
              <div className="flex items-center">
                <a href="#"
                  className="mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8">
                  Learn More
                </a>
                <a href="#"
                  className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold text-white">
                  <p>View Tips</p>
                </a>
              </div>
            </div>
            {/* Carousel */}
            <div className="ml-10">
              <Carousel /> {/* Replace this with your carousel component */}
            </div>
          </div>
        </div>
      </section>
      <Recon/>
    </div>
  );
}

export default Stress;
