

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux';
import Dropdown from '../../library/Dropdown/Dropdown';
import styles from './Header.module.css'
export default function Header() {
    const applicationData = useSelector((state)=>state.applications.applicationData);

    return (
        <div className={styles.header}>
            <Dropdown list={applicationData}></Dropdown>
            <div className={styles.user_data}>
                <div className={styles.user_image}>
                    <img src="logo192.png"></img>
                </div>
                <span>Jhon Doe</span>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </div>
        </div>
    )
}