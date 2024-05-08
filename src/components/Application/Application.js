import styles from './Application.module.css'


import ApplicationTabContent from '../ApplicationTabContent/ApplicationTabContent';
import ApplicationSubHeader from '../ApplicationSubHeader/ApplicationSubHeader';

export default function Application() {
    
    return (
        <div className={styles.application}>
            <ApplicationSubHeader></ApplicationSubHeader>
            <ApplicationTabContent></ApplicationTabContent>
        </div>
    )
}