import React from "react";
import image1 from "../assets/image1.jpg";
import imageava from "../assets/image-avatar.png";
import eth_icon from "../assets/icon-ethereum.svg";
import clock from "../assets/icon-clock.svg";
import view from "../assets/icon-view.svg";
export default function Card() {
  return (
    <>
      {/* <div className="h-screen w-screen flex justify-center items-center Figtree">
        <div className="cardo border-[1.5px] border-black md:w-[384px] w-[89%] bg-white rounded-3xl p-6 text-[#111111]">

        </div> */}
      <div className="h-screen w-screen text-center mx-auto flex overflow-hidden justify-center items-center">
        <div className="bg-[hsl(216,50%,16%)] text-white cardo md:w-[24%] w-[89%] rounded-xl p-6 lg:p-6 text-left shadow-2xl translate-y-[20px]">
          <div class="relative group">
            <img
              class="shadow-lg w-full h-full object-cover rounded-lg group-hover:opacity-75 transition duration-300 ease-in-out"
              src={image1}
              alt="NFT preview card"
            />
            <div class="absolute inset-0 bg-[hsl(178,100%,50%)] cursor-pointer rounded-lg opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out flex justify-center items-center">
              {/* <i class="fas fa-eye text-white w-8 h-8"></i> */}
              <img src={view} alt="view" className="" />
            </div>
          </div>

          {/* <img
            src={image1}
            alt="card1"
            className="rounded-xl hover:bg-[hsl(178,100%,50%)]"
          /> */}
          <div>
            <h1 className="outfit-semibold my-5 text-2xl hover:text-[hsl(178,100%,50%)] cursor-pointer">
              Equilibrium #3429
            </h1>
            <p className="outfit-light text-[19px] text-[hsl(215,51%,70%)]">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="grid grid-cols-2 items-center justify-center outfit-semibold py-5">
              <div>
                <span className=" content-center justify-center text-[hsl(178,100%,50%)]">
                  <img
                    src={eth_icon}
                    alt="eth_icon"
                    className="inline -mt-1 pr-1"
                  />
                  0.041 ETH
                </span>
              </div>
              <div className="text-right">
                <img src={clock} alt="eth_icon" className="inline -mt-1" />
                <span className="outfit-semibold text-[hsl(215,51%,70%)] pl-1">
                  3 days left
                </span>
              </div>
            </div>
            <div className="bg-[hsl(215,51%,70%)] w-full h-[0.5px] opacity-20" />
            <div className="flex items-center mt-5 mb-2 ">
              <img
                src={imageava}
                alt="author"
                className="rounded-full w-9 border-white border-2"
              />
              <p className="text-[17px] outfit-regular ml-3 text-[hsl(215,51%,70%)]">
                Creation of{" "}
                <span className="text-white hover:text-[hsl(178,100%,50%)] cursor-pointer">
                  Jules Wyvern
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
