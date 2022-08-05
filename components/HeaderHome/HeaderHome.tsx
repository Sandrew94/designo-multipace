import { WrapperHeaderHome } from "./HeaderHome.style";
import useMediaQuery from "../../hooks/useMediaQuery";
import LaptopView from "./view/LaptopView";
import TabletOrMobileView from "./view/TabletOrMobileView";

export default function HeaderHome() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  return (
    <WrapperHeaderHome>
      {isLaptop ? <LaptopView /> : <TabletOrMobileView />}
    </WrapperHeaderHome>
  );
}
