import { useEffect } from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6065e0160368d94693355197'
const Home = () => {
  return (
    <>
      <div className="body-post">
        <br /><br /><br /><br />

        <div className="nav d-flex justify-content-between hover">
          <Link href="/resume"><h1 id="choose" className="text-page">Home</h1></Link>
          <Link href="/gallery"><h1 id="choose" className="text-page">Gallery</h1></Link>
          <Link href="/contact"><h1 id="choose" className="text-page">Contact</h1></Link>
          <Link href="/gpa"><h1 id="choose" className="text-page">Calculate GPA</h1></Link>
          <Link href="/post"><h1 id="choose" className="text-page">Post</h1></Link>
        </div><br /><br />

        <img className="ppost card" src="/photos/confusepic.jpg" style={{ width: "300px", height: "200px"}} />
        <br/><br/>
        <h1 className="text-page">Puriwong Lertnantaporn</h1>
        <h2 className="text-page">620612157</h2>
        <br /><br /><br /><br /><br />

        
        <br /><br /><br /><br />
      </div>

    </>

  )
}

export default Home
