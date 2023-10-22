"use client";
import Image from "next/image";
import { card } from "@/app/assets";
import styles, { layout } from "@/app/style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Take a look at our new deals and promotions for new users, All cards
        will hvae a credit check and backround check asscociated with the
        application.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} loading="lazy" alt="Card_deal" />
    </div>
  </section>
);
export default CardDeal;
