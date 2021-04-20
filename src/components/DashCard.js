import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import numeral from "numeral";

const DashCard = ({ type, color, newTitle, totalTitle }) => {
  const [recent, setRecent] = useState(0);
  const [combined, setCombined] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("01/01/1970");
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState(null);

  const fetchCases = async () => {
    try {
      setDataError(null);
      // Get data from gov API
      const {
        data: { data },
      } = await axios.get(
        `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=newCasesByPublishDate&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate"}`
      );

      // Get first object from array (latest date) and set state
      setRecent(data[0].newCasesByPublishDate);
      setCombined(data[0].cumCasesByPublishDate);
      setLastUpdated(data[0].date);

      setLoading(false);

      //
    } catch (error) {
      setLoading(false);
      console.error(error);
      setDataError("Error fetching data. Reload to try again.");
    }
  };

  const fetchDeaths = async () => {
    setDataError(null);
    try {
      // Get data from gov API
      const {
        data: { data },
      } = await axios.get(
        `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&latestBy=newDeaths28DaysByPublishDate&structure={"date":"date","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate" }`
      );

      // Get first object from array (latest date) and set state
      setRecent(data[0].newDeaths28DaysByPublishDate);
      setCombined(data[0].cumDeaths28DaysByPublishDate);
      setLastUpdated(data[0].date);

      setLoading(false);

      //
    } catch (error) {
      setLoading(false);
      console.error(error);
      setDataError("Error fetching data. Reload to try again.");
    }
  };

  useEffect(() => {
    setLoading(true);

    if (type === "cases") {
      fetchCases();
    } else {
      fetchDeaths();
    }
  }, [type]);

  return (
    <div
      className={`w-full md:w-5/12   mb-5 md:mb-0 text-left font-semibold  rounded-md overflow-hidden bg-${color} hover:bg-${color}Hover transform hover:scale-102 ease-in-out duration-200`}
    >
      <Link to={`uk/${type}`}>
        <div className='flex flex-col justify-between h-full p-5'>
          <div>
            <h3 className='text-md mb-1'>{newTitle}</h3>
            <h2 className='text-2xl mb-3 font-bold'>
              {loading ? (
                "-"
              ) : dataError ? (
                <p className='text-sm font-light italic'>{dataError}</p>
              ) : (
                numeral(recent).format("0,0")
              )}
            </h2>
          </div>

          <div>
            <h3 className='text-md mb-1 text-right'>{totalTitle}</h3>
            <h2 className='text-2xl text-right font-bold'>
              {loading ? (
                "-"
              ) : dataError ? (
                <p className='text-sm font-light italic'>{dataError}</p>
              ) : (
                numeral(combined).format("0,0")
              )}
            </h2>
          </div>
          <p className='text-xs italic mt-3 '>{`Last updated ${dayjs(
            lastUpdated
          ).format("DD/MM/YYYY")}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default DashCard;
