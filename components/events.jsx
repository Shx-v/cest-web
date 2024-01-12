import { IoIosArrowDroprightCircle } from "react-icons/io";

const Events = () => {
  const eventList = [
    {
      name: "Shake it off",
      desc: "The Club organised this event in INNO'22, where participants had to build sturdy Structure out of toothpicks in 3 hours. Participants who won received certificates as well as prizes.",
      img: "./vercel.svg",
    },
    {
      name: "AutoCAD WorkShop",
      desc: "A workshop is held annually to help students learn the language and thrive academically. All participants who stayed until the end of the programme and completed all activities received participation certificates.",
      img: "./vercel.svg",
    },
    {
      name: "Smarak",
      desc: "SMARAK is NIT Rourkela's annual civil engineering technical fest, organised jointly by the CEST Club of NIT Rourkela and the ICE, UK: NIT Rourkela Chapter, under the Technical Society. NIT Rourkela's Student Activity Centre (SAC).",
      img: "./vercel.svg",
    },
  ];

  return (
    <main className="flex flex-col items-center gap-10">
      <h2 className="text-5xl font-bold text-[#3E3400]">Events</h2>
      <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-5">
        {eventList.map((event, index) => (
          <div key={index} className="bg-[#fff] h-96 w-80 rounded-3xl shadow-xl">
            <img src={event.img} alt="Event" className="w-[100%] h-[50%] bg-gray rounded-t-3xl bg-yellow-800" />
            <div className="px-5 flex flex-col gap-2">
              <h4 className="font-bold text-secondary text-[20px] mt-2">
                {event.name}
              </h4>
              <p className="text-[15px] font-medium ">
                {event.desc.substring(0, 130) + "..."}
              </p>
              <div className="mt-4">Crteators</div>
            </div>
          </div>
        ))}
        <div className="bg-[#fff] h-96 w-80 rounded-3xl shadow-lg flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-2 border-[5px] p-2 rounded-full border-black">
            <div className="font-semibold text-2xl ml-2">View more</div>
            <IoIosArrowDroprightCircle size={35} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;
