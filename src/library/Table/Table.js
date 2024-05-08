import styles from './Table.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { convertTimeFromTimeStamp } from '../../Utils/utils';
export default function Table({tableData}) {
    return (
        <table id='employee' className={styles.table}>
            <tr>
                <th>Event</th>
                <th>Version</th>
                <th>Status</th>
            </tr>
            <tbody>
                {tableData.map((data)=>{
                    return(
                        <tr key={data.id}>
                        <td className={styles.title_container}>
                            <span>{data.event}</span>
                            <span className={styles.subtitle}>{convertTimeFromTimeStamp(data.timestamp,false,true)} Minutes ago</span>
                        </td>
                        <td>{data.version}</td>
                        <td><button className={`${styles.table_button} ${styles[data.status]} `}>
                            <FiberManualRecordIcon style={{fontSize:"10px"}}></FiberManualRecordIcon>
                            {data.status}
                            </button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}