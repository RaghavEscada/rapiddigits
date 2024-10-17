"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import brainImage from '@/app/assets/rd.png'; // Ensure this is in the public directory or an appropriate path

const Home: React.FC = () => {
  return (
    <section>
      <div className="flex justify-center items-center min-h-[400px] p-8">
        <div className="relative w-64 h-64">
          {/* Brain Image (Static) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-32 flex items-center justify-center mt-4 ml-3 ">
            <Image
              src={brainImage}
              alt="Brain"
              className="w-28 h-32"
            />
          </div>

          {/* Rotating Container for Operators */}
          <div className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
              const operator = ['+', '÷', '×', '-', '+', '÷', '×', '-'][index];
              return (
                <div
                  key={angle}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-3xl font-bold"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                    animation: `rotate-${angle} 11s linear infinite`
                  }}
                >
                  {operator}
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes rotate-0 {
            from { transform: rotate(0deg) translateY(-80px) rotate(-0deg); }
            to { transform: rotate(360deg) translateY(-80px) rotate(-360deg); }
          }
          @keyframes rotate-45 {
            from { transform: rotate(45deg) translateY(-80px) rotate(-45deg); }
            to { transform: rotate(405deg) translateY(-80px) rotate(-405deg); }
          }
          @keyframes rotate-90 {
            from { transform: rotate(90deg) translateY(-80px) rotate(-90deg); }
            to { transform: rotate(450deg) translateY(-80px) rotate(-450deg); }
          }
          @keyframes rotate-135 {
            from { transform: rotate(135deg) translateY(-80px) rotate(-135deg); }
            to { transform: rotate(495deg) translateY(-80px) rotate(-495deg); }
          }
          @keyframes rotate-180 {
            from { transform: rotate(180deg) translateY(-80px) rotate(-180deg); }
            to { transform: rotate(540deg) translateY(-80px) rotate(-540deg); }
          }
          @keyframes rotate-225 {
            from { transform: rotate(225deg) translateY(-80px) rotate(-225deg); }
            to { transform: rotate(585deg) translateY(-80px) rotate(-585deg); }
          }
          @keyframes rotate-270 {
            from { transform: rotate(270deg) translateY(-80px) rotate(-270deg); }
            to { transform: rotate(630deg) translateY(-80px) rotate(-630deg); }
          }
          @keyframes rotate-315 {
            from { transform: rotate(315deg) translateY(-80px) rotate(-315deg); }
            to { transform: rotate(675deg) translateY(-80px) rotate(-675deg); }
          }
        `}</style>
        <div></div>
      </div>

      <div className="flex justify-center align-center">
        <Button variant="secondary">Get started</Button>
      </div>
    </section>
  );
};

export default Home;
