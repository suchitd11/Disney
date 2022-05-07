import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  return (
    <section>
      <Head>
        <title>Log in | Disney+</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
          alt="bg"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col sapce-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16 gap-1">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
            alt="logo"
          />
          <button
            className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]"
            onClick={() =>
              router.push(
                "http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
              )
            }
          >
            Get all there
          </button>
          <p className="text-xs text-center">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 30th June 2022, the price of
            Disney+ and The Disney Bundle will increase by ₹100
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
            alt="brands"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
