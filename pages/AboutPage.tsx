import Footer from "./footer"
import Navbar from "./Navbar"
const AboutPage = ({mainInd, childInd, MainDataArr} : any) => {
    return(
        <div>
            <Navbar />
            <img src={MainDataArr[mainInd]?.DataArr[childInd]?.ImgSrc} width={"400px"}/>
            <Footer />
        </div>
    )
}
export default AboutPage