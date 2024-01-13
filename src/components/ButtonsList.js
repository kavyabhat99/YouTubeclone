import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";

const ButtonsList = () => {

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const list = ["All", "HTML", "css", "Javascript", "ReactJS"];
  const mdList = [
    "NextJs",
    "Live",
    "Laptops",
    "Music",
    "Computer",
    "Games",
    "React",
    "Frontend",
    "Development",
  ];

  const ButtonsList = (list, style) =>
  list.map((btn, i) => (
    <Link key={i} to={"/?filter=" + btn}>
      <button 
        className={`${
          filter === btn ? "bg-gray-800 text-gray-50" : "bg-gray-100"
        } ${style} m-3`}
      >
        {btn}
      </button>
    </Link>
  ));

const style = "p-1 m-1 rounded-lg";
const mdStyle = "p-1 m-1 rounded-lg hidden md:block";

return (
  <div>
    <div className='flex p-14 ml-[80px] font-medium text-sm'>
      {ButtonsList(list, style)}
      {ButtonsList(mdList, mdStyle)}
    </div>
  </div>
);
};

export default ButtonsList
