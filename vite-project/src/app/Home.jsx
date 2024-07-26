import React from "react"
function Home() {
  return (
    <>
    <div>
      <div className="lg:flex">
        <div className="h-screen lg:w-1/2 bg-[#D4EAF5] grid justify-center items-center">
          <div className="">
            <h1 className="text-pretty font-thin text-5xl">Best Design of</h1>
            <h1 className="font-bold text-5xl text-nowrap mt-2">
              Furnite collections
            </h1>
            <h1 className="font-medium opacity-50 mt-6">
              A small river named Duden flows by their place
            </h1>
            <h1 className="font-medium opacity-50">
              and supplies it with the necessary regelia.
            </h1>
            <button className="bg-white p-3 w-32 rounded-3xl font-semibold  text-blue-300 my-10">
              DISCOVER
            </button>
          </div>
        </div>
        <div className="h-screen  lg:w-1/2 hidden">
          <img
            className="h-full w-full"
            src="https://preview.colorlib.com/theme/furnish/images/bg_2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-[#F5EBEB] h-60 p-14">
          <h1 className="font-bold text-xl">Amazing Deals</h1>
          <div className="text-base font-semibold">
            <h2>Far far away the word mountains</h2>
            <h2>far from the country</h2>
            <h2>Vokalia</h2>
          </div>
        </div>
        <div className="bg-[#DCEBDD] h-60 p-14">
          <h1 className="font-bold text-xl">Quality Furniture</h1>
          <div className="text-base font-semibold">
            <h2>Far far away the word mountains</h2>
            <h2>far from the country</h2>
            <h2>Vokalia</h2>
          </div>
        </div>
        <div className="bg-[#F5EFD8] h-60 p-14">
          <h1 className="font-bold text-xl">Modern Design</h1>
          <div className="text-base font-semibold">
            <h2>Far far away the word mountains</h2>
            <h2>far from the country</h2>
            <h2>Vokalia</h2>
          </div>
        </div>
        <div className="bg-[#F4E6D8] h-60 p-14">
          <h1 className="font-bold text-xl">Best Support</h1>
          <div className="text-base font-semibold">
            <h2>Far far away the word mountains</h2>
            <h2>far from the country</h2>
            <h2>Vokalia</h2>
          </div>
        </div>
      </div>
      <div className="relative  h-screen flex justify-center">
        <img
          className="lg:h-4/5 w-screen object-cover"
          src="https://preview.colorlib.com/theme/furnish/images/bg_4.jpg"
          alt=""
        />
        <div className="absolute p-10 top-0 w-fit mx-auto left-0 right-0 bottom-0 flex  flex-col justify-center">
          <h1 className="text-sm text-gray-400">About furnish</h1>
          <h1 className="text-3xl font-bold">
            Quality Makes the belief for customer
          </h1>
        </div>
      </div>
    </div>
    </>
  );
}
export default Home;
