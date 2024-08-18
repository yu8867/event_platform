import { Button } from "@/components/ui/button";
import { SignIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5">
        <div className="max-w-7xl w-full p-5 lg:mx-auto md:p-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px]">
              Host Connect, Celebrate: Your Events, Our Platform
            </h1>
            <p>
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-full h-[54px] text-[16px] font-normal sm:w-fit"
            >
              <Link href="/events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            width={1000}
            height={1000}
            alt="hero"
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section className="wrapper bg-green-500">
        <h2 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px];">
          Trust by <br /> Thousands of Events
        </h2>
        <div>
          {/* Search component */}
          {/* CategoryFilter */}
        </div>

        {/* Collection */}
      </section>
    </>
  );
};

export default Home;
