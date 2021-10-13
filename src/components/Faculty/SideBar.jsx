import React from 'react';
import StudentInfo from './StudentInfo'
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { fontWeight, margin } from '@mui/system';

const useStyles = makeStyles(Themes=>({
    containers:{
        width:"250px",
        background:"#01579b",
        minHeight:"753px",
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-between",
        overflow:"hidden",
        textAlign: "center",
        position: "relative"
    },
    miniContainer: {
        margin: "0 auto",
        marginTop: "50px"
    },
    sidenav:{
        position: "absolute",
        width: "100%",
        bottom: "20px"
    },
    items:{
        padding: "30px 5px",
        display: "flex",
        margin: "30px 20px",
        fontSize: "26px",
        textDecoration: "none",
        color: "black",
        borderRadius: "10px",
        "&:hover":{
            backgroundColor: "#01579b",
            marginLeft:"0",
            color:"white",
            boxShadow:"inset 0 0 25px black",
            transition: "0.5s",
            width:"100%"
        },
        "&:focus":{
            backgroundColor: "#01579b",
            marginLeft:"0",
            color:"white",
            boxShadow:"inset 0 0 25px black",
            transition: "0.5s",
            width:"100%"
        }
    },
    user:{
        marginTop: "20px",
        fontWeight: "400",
    },
}))
function SideBar() {
    const style = useStyles();
    return (
        <>
            <div className={style.containers}>
                <div className = {style.miniContainer}>
                <Avatar alt="Remy Sharp" src="https://avatars.dicebear.com/api/avataaars/muditshu.svg" sx={{width:130,height:130}} />
                <h3 className = {style.user}>Username</h3>
                </div>
                <div className = {style.sidenav}>
                    <a href="#" className = {style.items}><HomeOutlinedIcon style = {{ marginRight: "8px", fontSize: "30px"}}/>DashBoard</a>
                    <a href="#" className = {style.items}><PersonOutlineOutlinedIcon style = {{marginRight:"8px" , fontSize: "30px"}}/>Student Profile</a>
                    <a href="#" className = {style.items}><FolderSpecialOutlinedIcon style = {{marginRight:"8px", fontSize: "30px"}}/>Syllabus</a>
                    <a href="#" className = {style.items}><SettingsOutlinedIcon style = {{marginRight:"8px", fontSize: "30px"}}/>Settings</a>

                </div>
            </div>
        </>
    )
}

export default SideBar
