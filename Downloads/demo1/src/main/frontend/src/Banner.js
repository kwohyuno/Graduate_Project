import awsbanner from './assets/awslogo_.png'

function Banner(props){

    return(
        <div className="banner">
            배너
            <div className="banner-box">
                <div className="banner-box-one">
                    <a href="https://aws.amazon.com/ko/">
                        <img src={awsbanner} className="banner-box-one-awsbanner" />
                    </a>
                </div>
                <div className="banner-box-two"></div>
                <div className="banner-box-three"></div>
            </div>
        </div>
    )

}

export default Banner;