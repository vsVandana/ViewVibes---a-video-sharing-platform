import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList"
import { useSelector } from 'react-redux';
const MainContainer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return (<div className="">
    <ButtonList />
    <VideoContainer />
</div>) ;
    return (

        <div className="pl-72">
            <ButtonList />
            <VideoContainer className="" />
        </div>
    )
}
export default MainContainer;