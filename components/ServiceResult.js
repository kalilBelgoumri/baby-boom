import React from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const ServiceResult = ({
  activity,
  src,
  note,
  nb,
  name,
  city,
  price,
  description,
  vaccined,
  car,
}) => {
  return (
    <div className="flex flex-col justify-center m-4">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-100 bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <Image
            src={src}
            alt="tailwind logo"
            className="rounded-full shadow-md"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">
              {activity}
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                {note}
                <span className="text-gray-500 font-normal">
                  ({nb} commentaires)
                </span>
              </p>
            </div>
            <div className=" px-3 py-1 flex flex-col p-4 ">
              {vaccined}
              <div className="inset-y-4">{car}</div>
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {name}
          </h3>
          <div className="ml-8">
            <LocationOnIcon /> {city}
          </div>
          <p className="text-ml italic m-6 text-gray-500 mb-12">
            {description}
          </p>
          <div className="mt-12 mb-12">
            <p className="text-xl font-black text-one mt-12">
              Prestation à partir de {price}€
              <span className="font-normal text-gray-600 text-base">/h</span>
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <Link passHref href="/service/details">
              <button className="py-2 mt-8 text-ml uppercase font-bold w-2/4 text-one text-center bg-four rounded-lg hover:bg-three hover:text-five focus:ring-4 focus:ring-blue-300 ">
                Plus d&#39;information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceResult;
