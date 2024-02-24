import VideoContainer from "./VideoContainer";
// import ButtonList from "./ButtonList"
import { useSelector } from 'react-redux';
const MainContainer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return (<div className="absolute md:left-20">
    {/* <ButtonList /> */}
    <VideoContainer />
</div>) ;
    return (

        <div>
            {/* <ButtonList /> */}
            <VideoContainer/>
        </div>
    )
}
export default MainContainer;