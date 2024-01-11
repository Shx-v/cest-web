import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const navOptions = ["Home", "Team", "Gallery", "About"];

    return ( 
        <nav className='flex flex-row items-center justify-between px-[2%] py-[1%] bg-black bg-opacity-50 fixed w-[100vw]'>
            <img src="./CEST_Logo.svg" alt="CEST Club" className='select-none w-[4vw]'/>
            <div className='flex flex-row gap-[1vw] select-none'>
                {navOptions.map((option, index) => (
                    <div>{option}</div>
                ))}
            </div>
        </nav>
     );
}
 
export default Navbar;