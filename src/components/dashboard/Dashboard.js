import Header from "../Header/Header";
import styles from './Dashboard.module.css'
import Application from "../Application/Application";
import { json } from "react-router-dom";
import { getAPIRequest } from "../../Services/apiService";
import { useLoaderData } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { activeApplicationAction, applicationDataAction } from '../../store';
export default function Dashboard() {
    const applicationData = useLoaderData()
    const dispatch = useDispatch()
    dispatch(applicationDataAction.updateApplications({applicationData}))
    dispatch(activeApplicationAction.setActiveApplication({activeApplication:applicationData[0]}))
    return (
        <>
        <div className={styles.dashboard}>
           <Header></Header>
            <Application></Application>
        </div>
        </>
    )
}


export  async function fetchApplicationData(){
    let applicationData = await getAPIRequest("https://retoolapi.dev/71NNjB/applications");
    if(!applicationData.ok){
      throw json({message:"error in fetching events"},{
        status:500
      })
    }else{
        applicationData = await applicationData.json()
       return applicationData
    }
   
  }