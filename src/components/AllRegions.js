import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const AllRegions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      // Get data from gov API
      const {
        data: { data },
      } = await axios.get(
        `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla&latestBy=date&structure={"date":"date","newCases":"newCasesByPublishDate","newDeaths":"newDeaths28DaysByPublishDate","region":"areaName","regionId":"areaCode"}`
      );

      console.log(data);

      setLoading(false);
      setData(data);

      //
    } catch (error) {
      setLoading(false);
      console.error(error);
      //   setDataError("Error fetching data. Reload to try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loading type='regional' />
  ) : (
    <div>
      <div className='mb-5'>
        <span className='z-10  leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
          <i className='fas fa-search'></i>
        </span>

        <div className='flex'>
          <input
            type='text'
            placeholder='Search regions'
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
            className='px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10'
          />
          <button
            className='bg-charcoal ml-1 w-10 rounded'
            onClick={(e) => setSearch("")}
          >
            <i className='fas fa-undo text-gray-50'></i>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-4 mb-5'>
        {/* Map through all regions and show new cases/deaths */}
        {loading
          ? null
          : data
              .filter((region) =>
                region.region.toLowerCase().includes(search.toLowerCase())
              )
              .map((region) => (
                <Link to={`region/${region.regionId}`} key={region.regionId}>
                  <div
                    className={`w-full  p-5 mb-5 md:mb-0 text-left font-semibold  rounded-md bg-pacific text-gray-50`}
                  >
                    <div className='flex flex-col'>
                      <p className='text-md font-normal'>{region.region}</p>
                      {/* API can return 'null' cases/deaths, so check for this and change to 0 if so */}
                      <p className='text-xl'>{`${
                        region.newCases == null ? "0" : region.newCases
                      } new cases`}</p>
                      <p className='text-xl'>{`${
                        region.newDeaths == null ? "0" : region.newDeaths
                      } new deaths`}</p>
                    </div>
                  </div>
                </Link>
              ))}
      </div>
    </div>
  );
};

export default AllRegions;
