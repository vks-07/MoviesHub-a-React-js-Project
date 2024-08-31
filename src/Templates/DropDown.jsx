// import React, { useState } from "react";

// export default function DropDown({ title, options, func }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative w-[50%]">
//       <select
//         className="w-[50%] right-0  absolute p-3 text-xl text-zinc-200 bg-[#1f2937] border border-zinc-500 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#6556CD] transition ease-in-out duration-200"
//         defaultValue="0"
//         name="format"
//         id="format"
//         onClick={() => handleToggle()} // Fix function to toggle
//         onChange={(e) => {
//           func(e);
//           handleToggle();
//         }}
//       >
//         {options.map((o, i) => (
//           <option key={i} value={o} className="bg-zinc-900 text-zinc-200">
//             {o.toUpperCase()}
//           </option>
//         ))}
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
//         <h2 className=" text-2xl">
//           <i
//             className={`text-white ${
//               isOpen ? "ri-arrow-drop-left-line" : "ri-arrow-drop-down-line"
//             } text-2xl`} // Increase icon size here
//           ></i>
//         </h2>
        
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// export default function DropDown({ title, options, func }) {
//   return (
//     <div className="relative w-[50%]">
//       <select
//         className="w-[50%] right-0  absolute p-3 text-xl text-zinc-200 bg-[#1f2937] border border-zinc-500 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#6556CD] transition ease-in-out duration-200"
//         defaultValue="0"
//         name="format"
//         id="format"
//         onChange={func}
//       >
//         {/* <option value="0" disabled>
//           {title}
//         </option> */}
//         {options.map((o, i) => (
//           <option key={i} value={o} className="bg-zinc-900 text-zinc-200">
//             {o.toUpperCase()}
//           </option>
//         ))}
//       </select>
//       <div className="pointer-events-none  absolute inset-y-0 right-0 flex top-1/2 items-center pr-4">
//         <svg
//           className="w-5 h-5  text-zinc-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function DropDown({ title, options, func }) {
  return (
    <div className="relative">
      <select
        onChange={(e) => func(e.target.value)} // Pass the selected value to func
        className="bg-zinc-400 border border-black rounded-lg px-4 py-2"
      >
        <option value="" disabled>{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
