import React from "react"
import Header from "../header/Header"
import Footer from "../footer/footer"
import Tours from "../tours/Tours"


function Home({Data})
{
    return(
        <>
        <Header/>
        <Tours Data={Data}/>
        <Footer/>
        </>
    )
}

export default Home;