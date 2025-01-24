import { useDarkMode } from '@/context/dark-mode-provider'
import styles from './styles.module.scss'

type TCard = {
    children: React.ReactNode
}
export const Card: React.FC<TCard> = ({ children }) => {
    const { isDarkMode } = useDarkMode()
    return <div className={isDarkMode ? styles.container : styles.container_light}>{children}</div>
}