import styles from './Header.module.css'
import toDoListLogo from '../assets/logo.svg'



export function Header() {
    return(
        <div className={styles.header}>
            <img src={toDoListLogo} alt="Logo toDoList" />
        </div>
    )
}