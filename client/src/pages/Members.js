import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import AdminCard from "../components/AdminCard";
import YearButton from "../components/YearButton";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


function Members() {
  let allMembers = {
    admin: { core: [] },
    editorial: { core: [], co_comm: [] },
    logistics: { core: [], co_comm: [] },
    creatives: { core: [], co_comm: [] },
    events: { core: [], co_comm: [] },
    marketing: { core: [], co_comm: [] },
    technical: { core: [], co_comm: [] },
    publicity: { core: [], co_comm: [] },
  };

  const [toggle, setToggle] = useState(true);
  const [allMemberData, setallMemberData] = useState(allMembers);

  const reducer = (action) => {
    // eslint-disable-next-line
    const ele = action.info;
    const dept = action.dept;
    const role = action.role;
    // eslint-disable-next-line
    eval(`allMembers.${dept}.${role}.push(ele)`);
  };

  const handleMembers = (members, role) => {
    console.log("recieved member info");
    members.forEach((item) => {
      const info = item.data();
      reducer({ dept: info.department.toLowerCase(), info, role });
    });
    setallMemberData(allMembers);
  };

  useEffect(() => {
    getDocs(collection(db, "members/2021-22/co_comm")).then((value)=>{
        handleMembers(value , "co_comm")
    });
    getDocs(collection(db, "members/2021-22/core")).then((value)=>{
        handleMembers(value , "core")
        setToggle(!toggle)
    });
    console.log("work started");
    // eslint-disable-next-line
  }, []);

  const loadYear = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(allMemberData);

  return (
    <div
      className="bg-gradient-to-tr from-black via-indigo-800 to-fuchsia-600 pt-[4rem]"> 
      {/* <div className='bg-transparent w-full h-[4rem]'></div> */}
      <motion.div
      initial={{y:0}}
      animate={{y:-1000}}
      exit={{y:0}}
      transition={{type:"tween"}}
      className="h-full w-full bg-black fixed z-50 top-0"
      ></motion.div>
      <YearButton handleYearChange={loadYear} />
      <div className="flex flex-col items-center w-full h-auto bg-transparent">
        {Object.entries(allMemberData).map((item, index) => {
          return (

            item[0]==="admin" ?
            <AdminCard info={{ dept: item[0], members: item[1] }} key={index} />
            :
            <CategoryCard info={{ dept: item[0], members: item[1] }} key={index} />
            
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Members;
