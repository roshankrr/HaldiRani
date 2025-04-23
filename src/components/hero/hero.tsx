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
    
        function raf(time:any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        return () => {
        lenis.destroy();
        };
    }, []);
  

  useEffect(() => {
    // y1 -> bg parallax scrollY [0, 1300] => y: "0%" to "60%"
    gsap.to(bgRef.current, {
      yPercent: 60,
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "1300px top",
        scrub: true,
      },
    });

    // scale -> bg zoom scrollY [0, 300] => scale: 1 to 1.2
    gsap.to(bgRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "300px top",
        scrub: true,
      },
    });
    gsap.to(bgmountainRef.current, {
      yPercent: 60,
      scrollTrigger: {
        trigger: bgmountainRef.current,
        start: "top top",
        end: "1300px top",
        scrub: true,
      },
    });

    // scale -> bg zoom scrollY [0, 300] => scale: 1 to 1.2
    gsap.to(bgmountainRef.current, {
      scale: 1.5,
      scrollTrigger: {
        trigger: bgmountainRef.current,
        start: "top top",
        end: "300px top",
        scrub: true,
      },
    });

    // opacity (title) -> scrollY [0, 300] => opacity: 1 to 0
    gsap.to(titleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 200px",
        end: "200px 100px",
        scrub: true,
        // markers: true,
      },
    });

    // y2 (title) -> scrollY [0, 300] => y: 0% to 10%
    // gsap.to(titleRef.current, {
    //   yPercent: 10,
    //   scrollTrigger: {
    //     trigger: titleRef.current,
    //     start: "top top",
    //     end: "300px top",
    //     scrub: true,
    //   },
    // });

    // t2opacity (plot text) scrollY [800, 900] => opacity: 0 to 1
    gsap.fromTo(
      plotTextRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: plotRef.current,
          start: "-200px top",
          end: "top top",
          scrub: true,
        //   markers: true,
        },
      }
    );

    // bgcolor -> scrollY [1000,1300] => #fff to #000
    gsap.to(bgRef.current, {
      backgroundColor: "#ffa500",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "1000px top",
        end: "1300px top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-[200vh] bg-white text-black overflow-hidden">
      {/* Background */}
      
      <div
        ref={bgRef}
        className="absolute  inset-0 z-10 top-0  bg-center bg-cover"
        style={{ backgroundImage: 'url("/SVG/SVG/frame.svg")',width:'100%' }}
      />
      <img ref={bgmountainRef} src="/SVG/mountains-8.png"   className="absolute top-80 scale-110"  alt="" />
      {/* <div
        ref={bgmountainRef}
        className=" absolute inset-0 z-5 bg-center  bg-cover"
        style={{ backgroundImage: 'url("/SVG/mountains-8.png")',height: '100%', // or however tall you want that top section
          width: '100%', }}
      /> */}

      {/* Title Section */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4">

        <div
          ref={titleRef}
          className="pt-20 text-4xl md:text-6xl font-bold font-mono tracking-wider"
        >
          <center>

          <img src="/SVG/SVG/logo.svg" className="w-54" alt="" />
          </center>
          <h1 className="text-6xl md:text-8xl text-yellow-500 font-bold mt-2">Haldi Rani</h1>
        </div>
      </div>

      {/* Plot Section */}
      <div
        ref={plotRef}
        className="lastdiv relative w-full h-screen flex items-center justify-center"
      >
        <div ref={plotTextRef} className="text-center top-1/2 sticky max-w-xl">
          <h2 className="text-4xl font-semibold mb-4">Presents</h2>
          <p className="text-lg opacity-90">
          Haldi Rani offers premium turmeric and spices, blending tradition with modernity. Sourced from trusted farmers, it ensures rich flavor, vibrant color, and wellness. Trust Haldi Rani for purity in every jar.
          </p>
        </div>
        
      </div>

      
    </div>
  );
};

export default Homepage;
