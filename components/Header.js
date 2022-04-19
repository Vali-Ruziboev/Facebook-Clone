import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';
import{
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"


const Header = () => {
    return ( 
        <div>
            <h1>Header</h1>

            {/* Left */}
            <div className="flex items-center">
                <Image src='https://links.papareact.com/5me' width={40}
                height={40}
                layout='fixed'
                />
                <div className="flex">
                    <SearchIcon  className="h-6 "/>
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            {/* Center */}

            {/* Right */}

        </div>
     );
}
 
export default Header; 