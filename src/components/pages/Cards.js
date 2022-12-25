import React from 'react'
import CardItem from './CardItem'
import '../Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Here are some of my coolest projects</h1>
        <h3>(Click on the tiles for the Live Sites/GitHub Links)</h3>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem 
                    src="images/img-26.png"
                    text="GPT-3 Explain it Like I'm 5"
                    description="(In progress) Using OpenAI's GPT-3 API to develop an application that explains a topic in the simplest of terms"
                    path="https://aiexplainr.com"
                   /> 
                   <CardItem 
                    src="images/img-25.png"
                    text="Reaction Lights"
                    description="Real time reaction lights simulator used by collegiate athletes"
                    label=""
                    path="https://github.com/KelbyKramer"
                   /> 
                  <CardItem 
                    src="images/img-23.png"
                    text="Kato Rewards"
                    description="Promo and rewards app for college students"
                    label="Image on my site"
                    path="https://github.com/KelbyKramer/App"
                   /> 
                </ul>
                <ul className="cards__items">
                   <CardItem 
                    src="images/img-21.JPG"
                    text="Automated Cat Litterbox"
                    description="Cost effective, eco-friendly easy to use cat litterbox with a pleasing UI/UX"
                    path="https://github.com/KelbyKramer/KATUnitedFirmware"
                   /> 
                  <CardItem 
                    src="videos/video-3.mp4"
                    text="Smart Semi Autonomous Duck Decoy"
                    description="Used by duck hunters with mobile web app to allow for duck decoy navigation"
                    path="https://github.com/KelbyKramer/RoboDuck"
                   /> 
                    <CardItem 
                    src="images/img-24.jpg"
                    text="Browser RPG"
                    description="In-browswer crafting closed world RPG with leaderboard and quests"
                    path="https://github.com/KelbyKramer/game"
                   /> 
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
