import React from "react";
import DashCard from "../components/DashCard";

const Dashboard = () => {
  return (
    <div
      className='mx-auto font-source-sans bg-lavender2'
      style={{ height: "100vh" }}
    >
      <section id='uk-data' className='bg-lavender1'>
        <div className='px-10 pb-10  mx-auto' style={{ maxWidth: "1000px" }}>
          <h1 className='pt-5 mb-5 text-2xl'>United Kingdom summary</h1>

          <div className='flex-none md:flex justify-between w-full'>
            <DashCard
              type='cases'
              newTitle='New cases over 24 hour period'
              totalTitle='Total cases'
              color='honey'
            />

            <DashCard
              type='deaths'
              newTitle='New deaths within 28 days of a positive test'
              totalTitle='Total deaths'
              color='goldenrod'
            />
          </div>
        </div>
      </section>

      <section id='regional-data' className='bg-lavender2'>
        <div className='px-10  mx-auto' style={{ maxWidth: "1000px" }}>
          <h1 className='pt-5 text-2xl'>Regional data</h1>
          <div style={{ height: "300px" }}></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
