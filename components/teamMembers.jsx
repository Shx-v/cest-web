import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const TeamMembers = () => {
  const executiveBody = [
    {
      name: "Satyan Raj",
      designation: "President",
    },
    {
      name: "Biswaprakash Bahinipati",
      designation: "Vice-president",
    },
    {
      name: "Mehek Fatima",
      designation: "Secretary",
    },
    {
      name: "Shivranjan Bharadwaj",
      designation: "Treasurer",
    },
  ];
  return (
    <main className="flex flex-col items-center gap-10">
      <h2 className="text-5xl font-bold text-[#3E3400]">Faculty Advisor</h2>
      <div className="flex flex-col gap-12">
        <div
          className={`w-[88vw] bg-white rounded-[3vw] p-10 flex max-[800px]:flex-col justify-center items-center gap-16 cursor-pointer`}
        >
          <img
            src="./vercel.svg"
            alt="Member"
            className="w-[250px] h-[250px] bg-slate-600 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-4xl font-bold w-[30vw]">
              Faculty Advisor
            </p>
            <p className="text-2xl font-medium">Subhojit Mandal</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              laborum aspernatur minus, eius expedita tempora aperiam maiores,
              magni possimus numquam modi delectus qui nulla ipsum id error
              placeat, a dolorem?lorem
            </p>
          </div>
          <div className="flex flex-col gap-3 max-[800px]:flex-row">
            <IoLogoInstagram size={25} />
            <IoMailOutline size={25} />
            <BiLogoGmail size={25} />
            <RiFacebookBoxLine size={25} />
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-bold text-[#3E3400]">Executive Body</h2>
      <div className="flex flex-col gap-12">
        {executiveBody.map((member, index) => (
          <div
            key={index}
            className={`w-[88vw] bg-white rounded-[3vw] p-10 flex ${
              index % 2 != 1 ? "flex-row" : "flex-row-reverse"
            } max-[800px]:flex-col justify-center items-center gap-16 cursor-pointer`}
          >
            <img
              src="./vercel.svg"
              alt="Member"
              className="w-[250px] h-[250px] bg-slate-600 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-4xl font-bold w-[20vw]">
                {member.designation}
              </p>
              <p className="text-2xl font-medium">{member.name}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                laborum aspernatur minus, eius expedita tempora aperiam maiores,
                magni possimus numquam modi delectus qui nulla ipsum id error
                placeat, a dolorem?lorem
              </p>
            </div>
            <div className="flex flex-col gap-3 max-[800px]:flex-row">
              <IoLogoInstagram size={25} />
              <IoMailOutline size={25} />
              <BiLogoGmail size={25} />
              <RiFacebookBoxLine size={25} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 border-[5px] p-2 rounded-full border-black cursor-pointer">
        <div className="font-semibold text-2xl ml-2">View all members</div>
        <IoIosArrowDroprightCircle size={35} />
      </div>
    </main>
  );
};

export default TeamMembers;
