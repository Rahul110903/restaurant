import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi"
import Menucard from "./Menucard";
import Navbar from "./Navbar"

const uniqueList= [...new Set(Menu.map((element)=>{
    return element.category;
})),"All"]

const Restaurant =()=>{
    const [menuCard,setmenuCard]=useState(Menu)
    const [menuList,setMenuList]=useState(uniqueList)

    const updateitems =(category)=>{
        if(category==="All"){
            return setmenuCard(Menu)
        }
       const items= Menu.filter((element)=>{
            if(element.category===category){
                return true;
            }
        })
        console.log(items,"items")
        setmenuCard(items)
    }
    return(
        <>
        <Navbar updateitems={updateitems} menuList={menuList}></Navbar>
        <Menucard menuCard={menuCard}></Menucard>
        </>
        //  const final={
        //     name:"maveem",
        //     roll; "21",


        //  }
        // const {name,roll,...rest} = final;
    )
}

export default Restaurant;