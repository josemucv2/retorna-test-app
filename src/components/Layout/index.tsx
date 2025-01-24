import { Outlet } from 'react-router-dom';

import { useDarkMode } from '@/context/dark-mode-provider';
import { Footer } from '../Footer';

import styles from './styles.module.scss'
import { Header } from '../Header';

export const Layout = () => {

    const { isDarkMode } = useDarkMode()

    return (
        <div className={isDarkMode ? styles.container_dark : styles.container}>
            <div className='lg:px-[25%] px-5 pt-20 space-y-10'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};
