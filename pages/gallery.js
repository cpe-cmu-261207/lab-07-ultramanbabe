import Link from 'next/link'
const gallery=() => {
    return (<>
    <div className="body-gall">
        <h1 className="title">Gallery</h1>
    <img src="/photos/dota2icon.png" alt="DOTA2" 
        style={{width:"200px" , height :"200px"}}/><br/>
    <div >My gallery is about my favorite game called DOTA 2 and here are some of my favorite heroes.</div><br/><br/>

    <img src="/photos/PA.jpg" alt="Phantom Assassin" 
    style={{width:"300px" , height :"250px"}}/><br/>
    <div>Mortred, the Phantom Assassin, is a melee agility hero fitting the role of hard carry.<br/>
     Mortred is best-known, and infamous for, her ability to inflict staggering damage with single strikes.</div><br/><br/>

    <img src="/photos/Jugg.jpg" alt="Juggernaut"
    style={{width:"300px" , height :"250px"}}/><br/>
    <div>Yurnero, the Juggernaut, is a melee agility hero whose abilities allow him to sprint into <br/>
    battle and recklessly devastate enemies in an impenetrable flurry of blades.</div><br/><br/>

    <img src="/photos/CM.jpg" alt="Crystal Maiden"
    style={{width:"300px" , height :"250px"}}/><br/>
    <div>Rylai, the Crystal Maiden, is a ranged intelligence hero who uses the power of frost and ice to <br/>
    disable and dispatch her foes.</div><br/><br/>

    <img src="/photos/SK.jpg" alt="Sand King"
    style={{width:"300px" , height :"250px"}}/><br/>
    <div>Crixalis, the Sand King, is a melee strength hero with one of the highest area of effect (AoE) <br/>
    damage outputs in the entire game.</div><br/><br/>

    <img src="/photos/Tide.jpg" alt="Tidehunter"
    style={{width:"300px" , height :"250px"}}/><br/>
    <div>Leviathan, the Tidehunter, is a melee strength hero who is formidable due to his uncommonly tough hide<br/>
     and his ocean spells that sweep enemies upward.</div><br/><br/>

     </div>
     </>

    ) 
}
export default gallery
