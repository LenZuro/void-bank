"use client";

import { apple, bill, google } from "@/app/assets";
import styles, { layout } from "@/app/style";
import Image from "next/image";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image src={bill} alt="billing" className="w-[75%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We stands out as a leader in billing and invoicing services, offering
        the best-in-class solutions for our customers. Our commitment to
        excellence is reflected in our seamless and efficient billing processes,
        tailored to meet the unique needs of businesses and individuals alike.
        With our state-of-the-art electronic invoicing platform, we ensure that
        invoices are generated, delivered, and processed with unparalleled speed
        and accuracy, reducing the risk of errors and delays. Moreover, our
        automated billing system not only facilitates recurring payments but
        also empowers businesses to manage their finances effortlessly, with
        robust reporting and monitoring features. Our dedication to customer
        satisfaction is at the core of our billing and invoicing services, and
        we continue to innovate to provide a superior experience that simplifies
        financial transactions and empowers our customers to stay in control of
        their finances.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="IOS Store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="Google Play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
