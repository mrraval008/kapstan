import AcUnitIcon from '@mui/icons-material/AcUnit';
import LinkIcon from '@mui/icons-material/Link';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShieldIcon from '@mui/icons-material/Shield';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ArticleIcon from '@mui/icons-material/Article';
import AppsIcon from '@mui/icons-material/Apps';
import BuildIcon from '@mui/icons-material/Build';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonitorIcon from '@mui/icons-material/Monitor';

export let upperMenuItems = [
    {
      title: "Kapstan",
      icon: <AcUnitIcon></AcUnitIcon>,
      link:"/",
      position:"top"
    },
    {
        title: "Applications",
        icon: <AppsIcon></AppsIcon>,
        link:"/applications"
      },
      {
        title: "Connection",
        icon: <LinkIcon></LinkIcon>,
        link:"/connection"
      },
      {
        title: "Cost",
        icon: <MonetizationOnIcon></MonetizationOnIcon>,
        link:"/cost"
      },
      {
        title: "Security",
        icon: <ShieldIcon></ShieldIcon>,
        link:"/security",
        badge: "Beta",
      },
   
  ];
  export let bottomMenuItems = [
    {
        title: "Admin",
        icon: <SupervisorAccountIcon></SupervisorAccountIcon>,
        link:"/",
      },
      {
        title: "Docx",
        icon: <ArticleIcon></ArticleIcon>,
        link:"/",
      },
  ]

  export let TabConfigs = [
    {
      id:1,
      title: "Overview",
      icon: <MonitorIcon style={{ fontSize: 14 }}></MonitorIcon>,
    },
    {
      id:2,
      title: "Environment Variable",
      icon: <BuildIcon style={{ fontSize: 14 }}></BuildIcon>,
    },
    {
      id:3,
      title: "Alerts",
      icon: <AddAlertIcon style={{ fontSize: 14 }}></AddAlertIcon>,
    },
    {
      id:4,
      title: "Event History",
      icon: <AccessTimeIcon style={{ fontSize: 14 }}></AccessTimeIcon>,
    },
  ]