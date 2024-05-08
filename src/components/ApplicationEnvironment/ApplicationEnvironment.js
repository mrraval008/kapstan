import styles from './ApplicationEnvironment.module.css'
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Environmentpopup from '../EnvironmentPopup/Environmentpopup';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { getLocalStorageData, setLocalStorageData } from '../../Utils/utils';
import { useSelector } from 'react-redux';

export default function ApplicationEnvironment() {
    const [showPopup, setShowpopup] = useState(false);
    const activeApplication = useSelector((state) => state.activeApplication.activeApplication);
    const [envData, setEnvData] = useState([])

    useEffect(() => {
        let localStorageData = getLocalStorageData(activeApplication.id);
        if (localStorageData) {
            setEnvData(localStorageData)
        } else {
            setEnvData([])
        }
    }, [activeApplication])

    function onClosePopup(data) {
        setShowpopup(false)
        if (data) {
            setEnvData((currentData) => {
                let tempCurrentData = [...currentData]
                setLocalStorageData(activeApplication.id, [...tempCurrentData, ...data])
                return [...tempCurrentData, ...data]
            })
        }

    }
    function onRemoveVar(index) {
        setEnvData((currentEnv) => {
            let tempCurrentEnvs = [...currentEnv]
            tempCurrentEnvs.splice(index, 1)
            setLocalStorageData(activeApplication.id, tempCurrentEnvs)
            return tempCurrentEnvs
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Environment variables</h3>
                <div className={styles.user_data}>
                    <AddIcon style={{ fontSize: "20px" }} onClick={() => setShowpopup(true)}></AddIcon>
                    <FileDownloadIcon style={{ fontSize: "20px" }}></FileDownloadIcon>
                </div>
                {showPopup && <Environmentpopup onClosePopup={onClosePopup}></Environmentpopup>}
            </div>
            {envData.length > 0 ? <div>
                {envData.map((data, index) => {
                    return (
                        <div key={index} className={styles.env_container}>
                            <span>{data.name}</span>
                            <span>{data.value}</span>
                            <DeleteIcon onClick={() => { onRemoveVar(index) }}></DeleteIcon>
                        </div>
                    )
                })}
            </div> : <h3>No Environemnt Variable Created</h3>}

        </div>
    )
}