import pic from './assets/Hyunoh Kwon.jpg'
import fb from './assets/facebook_logo.png'
import github from './assets/github.png'
import instagram from './assets/instagram.jpeg'
import tistory from './assets/Tistory.png'
import {useNavigate} from "react-router-dom";
function Profile(props){
    const navi = useNavigate();
    return(
        <div className="profile">
            {/*프로필*/}
            <div className="profile-pic">
                <img src={pic}/>
            </div>
            <div className="profile-contents">
                <p>권현오</p>
                <p>Hyun Oh Kwon</p>
                <p>고려사이버대학교 졸업</p>
                <p>AWS Sales Team (2021- 2022)</p>
                <p>FPT Software Engineer (2023- 2024)</p>
                <div className ="profile-sns">
                    <a href="https://www.facebook.com/profile.php?id=100011265999655">
                        <img src={fb} className="profile-contents-fb" />
                    </a>
                    <a href="https://github.com/kwohyuno/kwohyuno">
                        <img src={github} className="profile-contents-github"/>
                    </a>
                    <a href="https://www.instagram.com/hyunoh93/">
                        <img src={instagram} className="profile-contents-instagram"/>
                    </a>
                    <a href="https://kwohyuno.tistory.com">
                        <img src={tistory} className="profile-contents-tistory"/>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Profile;