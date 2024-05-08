import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { LineChart } from '@mui/x-charts/LineChart';

export default function Charts({TabData,chartData}){
    const [value, setValue] = useState(0);
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}variant="fullWidth">
          {TabData.map((tab)=>{
            return (
              <Tab key={tab.label} label={tab.label}/>
            )
          })}
        </Tabs>
      </Box>
      {
        chartData.map((data,index)=>{
          return (
            <CustomTabPanel key={index} value={value} index={index}>
            <SimpleLineChart xLabels={data.xLabels} series={data.series}></SimpleLineChart>
           </CustomTabPanel>
          )
        })
      }
    </Box>
  );
}

function SimpleLineChart({xLabels,series,width}) {
  return (
    <LineChart
      width={700}
      height={250}
      series={series}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

