import axios from "axios";
import { useEffect, useState } from "react";

export default function Rockets() {
  const [rockets, setRockets] = useState([]);

  const fetchRockets = async () => {
    const response: any = await axios.get(
      "https://api.spacexdata.com/v3/rockets"
    );
    setRockets(response.data);
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <div className="absolute top-10 right-[14rem] flex flex-col gap-7 text-white">
      <div className="relative w-[55rem] h-[26rem] rounded-xl px-5 pt-5 flex gap-7">
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        {rockets.map((item: any) => (
          <div key={item.id}>
            <h5 className="text-lg text-white font-bold">{item.rocket_name}</h5>
            <img
              className="w-[12rem] h-[21rem] mt-3"
              src={item.flickr_images[0]}
              alt="Rockets"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
