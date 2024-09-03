import React from "react"
import data from "/data.js"
import Card from "/card.js"

export default function App(){
    const cards = data.map(item => {
        return(
            <Card key={item.id} item={item} />
        )
    })
    
    return (
        <div className="whole-page">
            {cards}
        </div>
    )
}