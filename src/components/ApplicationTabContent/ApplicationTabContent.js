import styles from './ApplicationTabContent.module.css'
import ApplicationOverview from '../ApplicationOverview/ApplicationOverview';
import ApplicationEnvironment from '../ApplicationEnvironment/ApplicationEnvironment';
import { useSelector } from 'react-redux';

export default function ApplicationTabContent() {
    const activeTab = useSelector((state)=>state.activeTab.activeTab);

    return (
        <div>
            {activeTab == 1 &&  <ApplicationOverview></ApplicationOverview>}
            {activeTab == 2 &&  <ApplicationEnvironment></ApplicationEnvironment>}
        </div>
    )
}