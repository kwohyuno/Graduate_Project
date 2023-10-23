import awsbanner from './assets/awslogo_.png'
    import fptbanner from './assets/fptlogo.png'
    import bitbanner from './assets/bitcamp.png'
    import cukbanner from './assets/cuklogo.png'
    import mcsabanner from './assets/mcsalogo.jpeg'

    function Banner(props){

    return(
        <div className="banner">
            <b>Sitemap</b>
            <div className="banner-box">
                <a href="https://aws.amazon.com/ko/">
                    <div className="banner-box-one">
                        <img src={awsbanner} className="banner-box-one-awsbanner" />
                    </div>
                </a>
                <a href="https://www.fpt-software.kr">
                    <div className="banner-box-two">
                        <img src={fptbanner} className="banner-box-two-fptbanner"/>
                    </div>
                </a>
                <a href="https://www.bitcamp.co.kr">
                    <div className="banner-box-three">
                        <img src={bitbanner} className="banner-box-three-bitbanner"/>
                    </div>
                </a>

                <a href="http://mcsa.or.kr">
                    <div className="banner-box-four">
                        <img src={mcsabanner} className="banner-box-four-mcsabanner"/>
                    </div>
                </a>

                <a href="https://www.cuk.edu/">
                    <div className="banner-box-five">
                        <img src={cukbanner} className="banner-box-five-cukbanner"/>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default Banner;