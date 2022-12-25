import React from 'react'
import CardItem from './CardItem'
import '../Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Here are some of my coolest projects</h1>
        <h3>(Click on the tiles for the GitHub Links)</h3>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                   <CardItem 
                    src="images/img-9.jpg"
                    text="Reaction Lights"
                    description="Real time reaction lights simulator used by professional athletes"
                    label=""
                    path="https://github.com/KelbyKramer"
                   /> 
                  <CardItem 
                    src="images/img-9.jpg"
                    text="Smart Semi Autonomous Duck Decoy"
                    description="Used by duck hunters with mobile web app to allow for duck decoy navigation"
                    path="https://github.com/KelbyKramer/RoboDuck"
                   /> 
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Kato Rewards"
                    description="Promo and rewards app for college students"
                    label="Image on my site"
                    path="https://github.com/KelbyKramer/App"
                   /> 
                </ul>
                <ul className="cards__items">
                   <CardItem 
                    src="images/img-9.jpg"
                    text="Automated Cat Litterbox"
                    description="Cost effective, eco-friendly easy to use cat litterbox with a pleasing UI/UX"
                    path="https://github.com/KelbyKramer/KATUnitedFirmware"
                   /> 
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Browser RPG"
                    description="In-browswer crafting closed world RPG with leaderboard and quests"
                    path="https://github.com/KelbyKramer/game"
                   /> 
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Minecraft Server Plugins"
                    description="Developed several unique Spigot plugins used across a fleet of Minecraft servers with unique owners"
                    path="https://github.com/KelbyKramer"
                   /> 
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
