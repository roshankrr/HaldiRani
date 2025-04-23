"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const plotRef = useRef(null);
  const plotTextRef = useRef(null);
  const bgmountainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const createScrollAnimation = (element: any, properties: any, trigger: any, options = {}) => {
      gsap.to(element, {
        ...properties,
        scrollTrigger: {
          trigger,
          scrub: true,
          ...options,
        },
      });
    };

    createScrollAnimation(bgRef.current, { y: 58 }, bgRef.current, { start: "top top", end: "2000px top" });
    createScrollAnimation(bgRef.current, { scale: 1.2 }, bgRef.current, { start: "top top", end: "300px top" });
    // createScrollAnimation(bgmountainRef.current, { yPercent: 60 }, bgmountainRef.current, { start: "top top", end: "1800px top", pin: true, pinSpacing: true, anticipatePin: 1 });
    // createScrollAnimation(bgmountainRef.current, { scale: 1.5 }, bgmountainRef.current, { start: "top top", end: "300px top" });
    createScrollAnimation(titleRef.current, { opacity: 0 }, titleRef.current, { start: "top 200px", end: "200px 100px" });
    gsap.fromTo(plotTextRef.current, { opacity: 0 }, {
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: plotRef.current,
        start: "top top",
        end: "top+=1100",
        scrub: true,
        pin: true,
      },
    });

    const mountainTL = gsap.timeline({
      scrollTrigger: {
        trigger: bgmountainRef.current,
        start: "top top",
        end: "3200px top", // Adjust scroll distance
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
    
    mountainTL
      .fromTo(bgmountainRef.current, {
        yPercent: 0,
        scale: 2,
      }, {
        yPercent: 0,
        scale: 1.5,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(bgmountainRef.current, {
        yPercent: -300,
        scale: 2,
        duration: 1,
        ease: "power2.inout",
      })


  }, []);

  return (
    <div className="relative md:h-[200vh] h-[180vh] w-full bg-[#FDB737]  text-black overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 z-10 -top-5    bg-center bg-cover  bg-no-repeat "
        style={{ backgroundImage: 'url("/SVG/SVG/frame3.svg")',  }}
      />
      <img
        ref={bgmountainRef}
        src="/SVG/mountains-8.png"
        className="absolute z-9 md:top-80 top-180 md:scale-110 scale-200"
        alt=""
      />

      <div className="relative z-8 h-screen flex flex-col justify-center items-center text-center px-4">
        <div
          ref={titleRef}
          className="pt-20 text-4xl md:text-6xl font-bold font-mono tracking-wider"
        >
          <center>
            <img src="/SVG/SVG/logo.svg" className="w-54" alt="" />
          </center>
          <h1 className="text-6xl md:text-8xl text-black font-bold mt-2">
            Haldi Rani
          </h1>
        </div>
      </div>

      <div
        ref={plotRef}
        className="lastdiv relative w-full h-screen flex items-center justify-center"
      >
        <div ref={plotTextRef} className="text-center  max-w-xl">
          <h2 className="text-4xl font-semibold mb-4">Presents</h2>
          <p className="text-lg opacity-90">
            Haldi Rani offers premium turmeric and spices, blending tradition
            with modernity. Sourced from trusted farmers, it ensures rich
            flavor, vibrant color, and wellness. Trust Haldi Rani for purity in
            every jar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

