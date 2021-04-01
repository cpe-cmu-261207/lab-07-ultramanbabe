import Link from 'next/link'
const resume = () => {

    return (
        <>
            <div className="body-re">

                <h1>My Resume</h1>


                <img src="/photos/ProfilePic.jpg" alt="my profile picture"
                    style={{ width: "400px", height: "400px" }} />
                <p> <b>Puriwong Lertnantaporn</b></p>
                <p> <b>Computer Engineering</b></p>
                <p> <b>Chiang Mai University</b></p>
                
                <b>Study experience</b>
                <p id="experience" >
                    <li >2004 - 2016 Studied & Graduated at Dara Academy</li>
                    <li >2017 Faculty of Science Chiang Mai University</li>
                    <li >2019 Faculty of Engineering Chiang Mai University</li>
                    <li>&nbsp; Group of Entertainment Engineering , Football club , Academic club</li>
                     
                </p>
            </div>

        </>
    )
}
export default resume;