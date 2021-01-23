import React from "react";

const Navbar = () => {
  return (
    <div className='bg-charcoal p-4 text-center font-source-sans text-gray-50'>
      <h3 className='text-3xl font-normal'>
        <span className='font-semibold'>covid</span>ata{" "}
        <i className='fas fa-viruses'></i>
      </h3>
      <p className='text-sm font-light mt-1'>
        stay at home {">"} protect the NHS {">"} save lives
      </p>
    </div>
  );
};

export default Navbar;
