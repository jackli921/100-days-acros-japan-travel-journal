import React from 'react'
import Header from './components/header.js'
import data from './data.js'
import Card from './components/card.js'


export default function App(){

    const cards = data.map(item=>{
        return (
            <Card

                {...item}
            />
        )
    })

    return (
        <div className="container">
            <Header />   
            {cards}  
        </div>
    )
}