"use client";

import React from "react";
import styles from "@/app/style";
import { arrowUp } from "@/app/assets";
import Image from "next/image";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-purple-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={` ${styles.flexCenter} felx-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1 ">
          <span className="text-gradient">Get</span>
        </p>
        <Image
          src={arrowUp}
          alt="Arrow-Up"
          className="w-[23px] h-[23px] object-contain "
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px] ml-1">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
