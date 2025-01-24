import { useDarkMode } from "@/context/dark-mode-provider";

import iconMoon from '@/assets/images/icon-moon.svg';
import iconSun from '@/assets/images/icon-sun.svg';


export const Header = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="flex justify-between items-center w-full">
            <h1 className="text-4xl text-white font-bold">T O D O</h1>
            <button onClick={toggleDarkMode}>
                <img
                    src={isDarkMode ? iconMoon : iconSun}
                    alt="Mode Toggle"
                    width={25}
                    height={25}
                />
            </button>
        </div>
    )
}