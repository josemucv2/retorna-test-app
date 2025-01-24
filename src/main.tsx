import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import router from './router'

import { DarkModeProvider } from './context/dark-mode-provider'
import "react-toastify/dist/ReactToastify.css";
import './assets/styles/globals.scss'


createRoot(document.getElementById('root')!).render(
    <DarkModeProvider>
        <RouterProvider router={router} />
        <ToastContainer />
    </DarkModeProvider>
)
