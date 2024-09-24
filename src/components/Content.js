import SideContent from "./SideContent"
import MainContent from "./MainContent"
export default function Content({studyingHeirarchy}){
    return(
        <>
            <MainContent studyingHeirarchy={studyingHeirarchy}/>
            <SideContent studyingHeirarchy={studyingHeirarchy}/>
        </>
    )
}