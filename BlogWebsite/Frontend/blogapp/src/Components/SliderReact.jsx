// // import React from 'react'

// // export const Slider = () => {
// //   return (
// //     <div> <h1 className='text-center font-bold text-3xl m-40 p-40'>My Latest Blogs</h1></div>
// //   )
// // }

// import React from "react";
// import Slider from "react-slick";

// function Responsive() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1550,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div> <h1 className='text-center font-bold text-3xl m-5 p-40'>My Latest Blogs</h1>
//     <div className="">

//       <Slider {...settings}>

//         <div>
//           <img className="w-50 h-50" src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"/>
//         </div>
//         <div>
//         <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"/>
//         </div>
//         <div>
//         <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"/>
//         </div>
//         <div>
//         <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"/>
//         </div>

//       </Slider>
//     </div>
//     </div>
//   );
// }

// export default Responsive;

// // import React, { useState } from "react";
// // import Slider from "react-slick";

// // function Resizable() {
// //   const [display, setDisplay] = useState(true);
// //   const [width, setWidth] = useState(600);

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1
// //   };
// //   return (
// //     <div className="slider-container">
// //       <h2> Resizable Collapsible </h2>
// //       <button className="button" onClick={() => setWidth(width + 500)}>
// //         {" "}
// //         increase{" "}
// //       </button>
// //       <button className="button" onClick={() => setWidth(width - 100)}>
// //         {" "}
// //         decrease{" "}
// //       </button>
// //       <button className="button" onClick={() => setDisplay(!display)}>
// //         {" "}
// //         toggle{" "}
// //       </button>
// //       <div
// //         style={{
// //           width: width + "px",
// //           display: display ? "block" : "none"
// //         }}
// //       >
// //         <Slider {...settings}>
// //           <div>
// //           <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"/>
// //           </div>
// //           <div>
// //           <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"/>
// //           </div>
// //           <div>
// //             <h3>3</h3>
// //           </div>
// //           <div>
// //             <h3>4</h3>
// //           </div>
// //           <div>
// //             <h3>5</h3>
// //           </div>
// //           <div>
// //             <h3>6</h3>
// //           </div>
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Resizable;
