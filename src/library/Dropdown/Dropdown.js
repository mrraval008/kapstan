import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { activeApplicationAction } from '../../store';

export default function Dropdown({list}){
    const activeApplication = useSelector((state)=>state.activeApplication.activeApplication);
    const dispatch = useDispatch()
    const applicationData = useSelector((state)=>state.applications.applicationData);

    console.log("activeApplication",activeApplication)
    const handleChange = (event) => {
        let actApp = applicationData.filter(app=>app.name==event.target.value)
        if(actApp){
            dispatch(activeApplicationAction.setActiveApplication({activeApplication:actApp[0]}))
        }
    };
    return (
        <div style={{marginLeft:"20px"}}>
        <FormControl variant="standard" sx={{ s: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Applications</InputLabel>
        <Select
            value={activeApplication.name}
            onChange={handleChange}
            label="applications"
        >
            {list.map((item)=>{
                return (
                    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                )
            })}
        </Select>
    </FormControl>
    </div>

    )
}