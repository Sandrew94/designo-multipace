import { WrapperLocationsMap } from "./LocationsMap.style";
import dynamic from "next/dynamic";
import { v4 } from "uuid";
import { locationData } from "../../DummyData/LocationData";

const SingleMapComponent = dynamic(
  () => import("./SingleMapComponent/SingleMapComponent"),
  { ssr: false }
);

export default function LocationsMap() {
  return (
    <WrapperLocationsMap>
      {locationData.map((item, idx) => {
        return (
          <SingleMapComponent
            key={v4()}
            gps={item.gps}
            Nation={item.Nation}
            OfficeAddress={item.OfficeAddress}
            OfficeRole={item.OfficeRole}
            OfficeContact={item.OfficeContact}
            idx={idx}
          />
        );
      })}
    </WrapperLocationsMap>
  );
}
