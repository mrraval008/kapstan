
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef, useState } from 'react';
import styles from './Environmentpopup.module.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';
export default function Environmentpopup({ onClosePopup }) {
    const fileRef = useRef()
    const [showFileSelction, setShowFileSelection] = useState(true)
    const [envVar, setEnvVar] = useState([])
    function onFileInputClick() {
        fileRef.current.click()
    }
    function onFileSelect(event) {
        console.log(event.target)
        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = (event.target.result)
            console.log(text)
            let splittedVar = text.split("\n")
            let envVar = []
            splittedVar.forEach(spVar => {
                    let spVarSplit = spVar.split("=")
                    envVar.push({name:spVarSplit[0],value:spVarSplit[1]})
            });
            setEnvVar(envVar)
            setShowFileSelection(false)

        };
        reader.readAsText(event.target.files[0])
    }
    function onRemoveVar(index){
        setEnvVar((currentEnv)=>{
            let tempCurrentEnvs = [...currentEnv] 
            tempCurrentEnvs.splice(index,1)
            return tempCurrentEnvs
        })
    }
    function onChange(event,index,identifier){
        let currentEnvs = [...envVar] //this should be deep clone
        currentEnvs[index][identifier] = event.target.value
        setEnvVar(currentEnvs)
    }
    return (
        <div className={styles.popup}>
            <CloseIcon onClick={() => { onClosePopup(false) }}></CloseIcon>
            <div className={styles.variable_container}>
                {showFileSelction && <>
                    <div className={styles.fileInput} onClick={onFileInputClick}>
                        <FileUploadIcon></FileUploadIcon>
                        <span>Click here to upload</span>
                    </div>
                    <span className={styles.subtitie}>Upload a .env file. It should not be greate than 5KB</span>
                    <input style={{visibility:"hidden",width:"10px"}} type='file' ref={fileRef} onChange={onFileSelect} />
                </>}
                {!showFileSelction &&
                    <div>
                        {envVar.map((env,index) => {
                            return (
                                <div key={env.index} className={styles.variable_inner_container}>
                                    <div>
                                        <span>Name</span>
                                        <input className={styles.variable_inputs} value={env.name} onChange={(event)=>onChange(event,index,'name')}></input>
                                    </div>
                                    <div>
                                        <span>Value</span>
                                        <input className={styles.variable_inputs} value={env.value} onChange={(event)=>onChange(event,index,'value')}></input>
                                    </div>
                                    <DeleteIcon onClick={()=>{onRemoveVar(index)}}></DeleteIcon>
                                </div>
                            )
                        })}

                        <div className={styles.button_container}>
                            <button onClick={()=>{onClosePopup(false)}}>Cancel</button>
                            <button onClick={()=>{onClosePopup(envVar)}} className={styles.add_button}>Add</button>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}