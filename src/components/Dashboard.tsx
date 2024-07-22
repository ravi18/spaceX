import axios from "axios";
import { useState, useEffect } from "react";
import { FaWikipediaW, FaYoutube, FaReddit } from "react-icons/fa";

export default function Dashboard() {
  const [upcomingLaunch, setUpcomingLaunch]: any = useState([]);
  const [previousLaunch, setPreviousLaunch]: any = useState([]);

  const dateStr = upcomingLaunch?.launch_date_utc;
  const date = new Date(dateStr);

  date.setMinutes(0);

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const dateStr2 = previousLaunch?.launch_date_utc;
  const date2 = new Date(dateStr2);

  date.setMinutes(0);

  const formattedDate2 = date2.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });
  const formattedTime2 = date2.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const fetchUpcomingLaunch = async () => {
    const response: any = await axios.get(
      "https://api.spacexdata.com/v3/launches/upcoming"
    );
    setUpcomingLaunch(response.data[0]);
  };

  const fetchPreviousLaunch = async () => {
    const response: any = await axios.get(
      "https://api.spacexdata.com/v3/launches/past"
    );
    setPreviousLaunch(response.data[0]);
  };

  useEffect(() => {
    fetchUpcomingLaunch();
    fetchPreviousLaunch();
  }, []);

  return (
    <div className="absolute top-12 right-[15rem] w-[50rem] flex gap-7 text-white">
      <div className="relative w-[150%] h-[20rem] rounded-xl ps-8 pt-5 pe-14">
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        <div className="relative z-10">
          <h5 className="text-lg font-bold text-white">Upcoming launch</h5>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
              MISSION NAME
            </p>
            {/* <div>
              <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
                ROCKET LOGO
              </p>
              <div className="bg-[#33333380] opacity-50 p-10">Logo</div>
            </div> */}
          </div>
          <p className="text-lg text-white font-bold">
            {upcomingLaunch?.mission_name}
          </p>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">ROCKET</p>
          <p className="text-lg text-white font-bold">
            {upcomingLaunch?.rocket?.rocket_name}
          </p>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
            FLIGHT NUMBER
          </p>
          <p className="text-lg text-white font-bold">
            {upcomingLaunch?.flight_number}
          </p>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
            TIME (UTC)
          </p>
          <p className="text-lg text-white font-bold">
            {formattedDate}, {formattedTime}
          </p>
          <div className="flex justify-between items-center">
            <div className="mt-2">
              <p className="text-xs text-[#FFFFFF80] font-semibold">LINKS</p>
              <div className="flex gap-2">
                <div className="w-5 h-5 flex justify-center items-center bg-[#FFFFFF80] rounded-full">
                  <FaWikipediaW color="#000" size={14} />
                </div>
                <div className="w-5 h-5 flex justify-center items-center bg-white rounded-full">
                  <FaYoutube color="#000" size={14} />
                </div>
                <div className="w-5 h-5 flex justify-center items-center bg-[#FFFFFF80] rounded-full">
                  <FaReddit color="#000" size={14} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#FFFFFF80] font-bold">LAUNCHPAD</p>
              <p className="text-xs text-white font-bold">MISSION NAME</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[150%] h-[20rem] rounded-xl ps-8 pt-5 pe-14">
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        <div className="relative z-10">
          <h5 className="text-lg font-bold text-white">Previous launch</h5>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
            MISSION NAME
          </p>
          <p className="text-lg text-white font-bold">
            {previousLaunch.mission_name}
          </p>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">ROCKET</p>
          <p className="text-lg text-white font-bold">
            {previousLaunch?.rocket?.rocket_name}
          </p>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
            FLIGHT NUMBER
          </p>
          <p className="text-lg text-white font-bold">
            {previousLaunch.flight_number}
          </p>
          <p className="text-xs text-[#FFFFFF80] font-semibold mt-2">
            TIME (UTC)
          </p>
          <p className="text-lg text-white font-bold">
            {formattedDate2}, {formattedTime2}
          </p>
          <div className="flex justify-between items-center">
            <div className="mt-2">
              <p className="text-xs text-[#FFFFFF80] font-semibold">LINKS</p>
              <div className="flex gap-2">
                <div className="w-5 h-5 flex justify-center items-center bg-[#FFFFFF80] rounded-full">
                  <FaWikipediaW color="#000" size={14} />
                </div>
                <div className="w-5 h-5 flex justify-center items-center bg-white rounded-full">
                  <FaYoutube color="#000" size={14} />
                </div>
                <div className="w-5 h-5 flex justify-center items-center bg-[#FFFFFF80] rounded-full">
                  <FaReddit color="#000" size={14} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#FFFFFF80] font-bold">LAUNCHPAD</p>
              <p className="text-xs text-white font-bold">MISSION NAME</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
