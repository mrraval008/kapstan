import styles from './ApplicationSubHeader.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TabItem from '../../library/TabItem/Tabitem';
import { useDispatch, useSelector } from 'react-redux';
import { TabConfigs } from '../../configs/configs';
import { activeTab } from '../../store';
export default function ApplicationSubHeader() {
    const activeApplication = useSelector((state) => state.activeApplication.activeApplication);
    const dispatch = useDispatch()
    function clickHandler(tabId) {
        dispatch(activeTab.setActiverTab({ activeTab: tabId }))
    }
    let curreentActiveTab = useSelector((state) => state.activeTab.activeTab);

    return (
        <div className={styles.subHeader}>
            <div className={styles.tab_container}>
                <h3>{activeApplication.name}</h3>
                <div className={styles.tab_items}>
                    {TabConfigs.map((tab) => {
                        return (
                            <TabItem key={tab.id} isActive={tab.id == curreentActiveTab} title={tab.title} icon={tab.icon} id={tab.id} clickHandler={clickHandler}></TabItem>
                        )
                    })}

                </div>
            </div>
            <div className={styles.right_application}>
                <button className={styles.deployed_button}>{activeApplication.status}</button>
                <MoreVertIcon></MoreVertIcon>
            </div>
        </div>
    )
}