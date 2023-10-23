

function Project(props){

    return(
        <div className="project">
            <div className="project-one">
                <p>
                    <h2>프로젝트 1. Devster v2 <a href="https://github.com/kwohyuno/devster_final.git">(Link)</a></h2>
                    &nbsp;Online community for preliminary software engineer
                    <ul>
                        <li>Migrated Front-End components from JSP to React.js in order to upgrade user experience and code agility<br/></li>
                        <li>Adopted Docker to enhance CICD process and to prepare for potential scaling of server<br/></li>
                        <li>Empowered security by developing JWT, and prevented HTML intrusion by inserting related code<br/></li>
                    </ul>
                </p>
            </div>
            <div className="project-two">
                <p>
                    <h2>프로젝트 2. Devster v1 <a href="https://github.com/kddongkyu/bit701-four-semi.git">(Link)</a> </h2>
                    &nbsp;Online community for preliminary software engineer
                    <ul>
                        <li>Designed DB(MySQL) and bulletin board with MyBatis, Spring Boot, JSP, jQuery, and Ajax</li>
                        <li>Inserted company information on bulletin board via Python</li>
                        <li>Deployed servers via Naver Cloud, Jenkins, and Tomcat</li>
                        <li>Improved design with CSS operation for a better user experience</li>
                    </ul>
                </p>
            </div>
            <div className="project-three">
                <p>
                    <h2>프로젝트3. Just Say <a href="https://github.com/kwohyuno/Primer-Hackthon.git">(Link)</a> </h2>
                    &nbsp;English Practice Web Application
                    <ul>
                        <li>Developed web services where people can practice foreign languages, by using GPT 3.5 and Google TTS, as well as Fast API, Git Action, React.js, and AWS</li>
                        <li>Tuned prompt engineering to make GPT reply appropriate responses</li>
                        <li>Ranked 16th out of 226 teams (made it to the finals for the event)</li>
                    </ul>
                </p>
            </div>
        </div>
    )

}

export default Project;