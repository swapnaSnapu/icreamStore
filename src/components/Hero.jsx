// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
// <section className="text-gray-600 body-font">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Melting Moments
//         <br className="hidden lg:inline-block"/>Scoop it Like You Mean It
//       </h1>
//       <p className="mb-8 leading-relaxed">🍨 Descriptive and Tempting:
// Indulge in our rich and velvety ice creams, churned to perfection with the finest ingredients. From timeless vanilla to exotic mango kulfi, we have something for every sweet tooth.<br></br>
// 🍧 For a Professional Website:
// Our handcrafted ice creams are made using traditional methods and premium ingredients to deliver a luxurious taste experience. Whether it's a hot summer day or a cozy evening, our flavors bring joy in every scoop.</p>
//       <div className="flex justify-center">
//         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View</button>
//         <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">order</button>
//       </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img className="object-cover object-center rounded" alt="hero" src='../public/img4.jpg'/>
//     </div>
//   </div>
// </section>


//     </div>
//   )
// }

// export default Hero




import React from 'react';


const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Melting Moments
              <br className="hidden lg:inline-block" />Scoop it Like You Mean It
            </h1>
            <p className="mb-8 leading-relaxed">
              🍨 Descriptive and Tempting:
              Indulge in our rich and velvety ice creams, churned to perfection with the finest ingredients. From timeless vanilla to exotic mango kulfi, we have something for every sweet tooth.<br />
              🍧 For a Professional Website:
              Our handcrafted ice creams are made using traditional methods and premium ingredients to deliver a luxurious taste experience. Whether it's a hot summer day or a cozy evening, our flavors bring joy in every scoop.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Order</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded w-[330px] " alt="hero" src='../public/image.jpg' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
