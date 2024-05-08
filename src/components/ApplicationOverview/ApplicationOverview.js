import styles from './ApplicationOverview.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from '@mui/material/colors';
import Charts from '../../library/Charts/Charts';
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import { convertTimeFromTimeStamp } from '../../Utils/utils';
import Table from '../../library/Table/Table';
import { getAPIRequest } from '../../Services/apiService';
import { useSelector } from 'react-redux';

function getProductName(productData, ID) {
    let product = productData.find((product) => product.id == ID);
    if (product) {
        return product.name
    }
}

async function prepareChartData(utilizationResult, productDetails, key) {
    let utlization = await utilizationResult.json();
    let seriesObj = {}
    let xLabels = []
    if (utlization.length > 0) {
        utlization.forEach(util => {
            if (seriesObj[util["applicationId"]]) {
                seriesObj[util["applicationId"]].data.push(util[key])
            } else {
                seriesObj[util["applicationId"]] = { data: [util[key]], label: getProductName(productDetails, util["applicationId"]) }
            }
            xLabels.push(convertTimeFromTimeStamp(Number(util["timestamp"])))
        });
    }
    let series = [];
    for (let key in seriesObj) {
        series.push(seriesObj[key])
    }
    return {
        "xLabels": xLabels,
        "series": series
    }
}


export default function ApplicationOverview() {
    const [chartData, setChartData] = useState([])
    const [currentApplicationHistory, setCurrentApplicationHistory] = useState([]);
    const activeApplication = useSelector((state) => state.activeApplication.activeApplication);
    const productDetails = useSelector((state) => state.applications.applicationData);

    let TabData = [
        {
            label: "CPU",
            identifier: "cpuUtlization"
        },
        {
            label: "Memory",
            identifier: "memoryUtlization"
        }
    ]
    useEffect(() => {
        async function getUtilizationData() {
            const memoryUtlizationResponse = getAPIRequest("https://retoolapi.dev/ybFVVH/memoryutilization");
            const cpuUtlizationResponse = getAPIRequest("https://retoolapi.dev/Ymxfa2/cpuutilization");
            Promise.all([memoryUtlizationResponse, cpuUtlizationResponse]).then(async (results) => {
                let tempChartData = [];
                let memoryUtilizationResult = results[0];
                let cpuUtilizationResult = results[1];
                if (memoryUtilizationResult) {
                    tempChartData.push({ ...await prepareChartData(memoryUtilizationResult, productDetails, "memoryUtilization") })
                }
                if (cpuUtilizationResult) {
                    tempChartData.push({ ...await prepareChartData(cpuUtilizationResult, productDetails, "cpuUtilization") })
                }
                setChartData(tempChartData)
            })
            let eventHistoryRepsonse = getAPIRequest("https://retoolapi.dev/TYjDIe/eventhistory")
            eventHistoryRepsonse.then(async (history) => {
                history = await history.json()
                setCurrentApplicationHistory(history.filter((his) => his.applicationId == activeApplication.id))
            })
        }
        getUtilizationData()

    }, [])
    // usually there will be seperate call for each application history so making call on every change of application
    useEffect(() => {
        async function getHistoryData() {
            let eventHistoryRepsonse = getAPIRequest("https://retoolapi.dev/TYjDIe/eventhistory")
            eventHistoryRepsonse.then(async (history) => {
                history = await history.json()
                setCurrentApplicationHistory(history.filter((his) => his.applicationId == activeApplication.id))
            })
        }
        getHistoryData()
    }, [activeApplication])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>Service Info</h3>
                    <div className={styles.user_data}>
                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </div>
                </div>
                <div className={styles.overviewDetails}>
                    <div className={styles.overViewItem}>
                        <span>Current Version</span>
                        <div className={styles.overViewItemDetails}>
                            <CheckCircleOutlineIcon style={{ fontSize: "12px", color: green }}></CheckCircleOutlineIcon>
                            <span>In Sync</span>
                        </div>
                    </div>
                    <div>
                        <span>Desired Version</span>
                        <div className={styles.overViewItemDetails}>{activeApplication.desiredVersion}</div>
                    </div>
                </div>
                <div className={styles.overviewButtonContainer}>
                    <button className={styles.overviewButton}>Deploy</button>
                    <div className={styles.user_data}>
                        <span>Last updated {convertTimeFromTimeStamp(activeApplication.updatedAt, true)} hours ago</span>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={`${styles.card} ${styles.chart_card}`}>
                    <p className={styles.card_title}>System Metrics</p>
                    {chartData.length > 0 ? <Charts chartData={chartData} TabData={TabData}></Charts> : <h3>Loading Data  ...</h3>}
                </div>
                <div className={styles.card}>
                    <p className={styles.card_title}>Event History</p>
                    {currentApplicationHistory.length > 0 ? <Table tableData={currentApplicationHistory}></Table> : <h3>Loading Data ...</h3>}
                </div>

            </div>
        </>
    )
}