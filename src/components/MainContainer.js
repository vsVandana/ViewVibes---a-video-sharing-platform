import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const containerClass = isMenuOpen ? "" : "md:pl-20";
 
  return (
    <div className={containerClass}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
