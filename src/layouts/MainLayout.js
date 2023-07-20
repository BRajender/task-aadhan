import React from "react"
//components
import {Header} from "../components/nav"

const MainLayout=({children})=>{
    return(
        <>
        <Header />
         {children}
        
        </>
    )

}
export default MainLayout 