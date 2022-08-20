import { WrapperLocationCity } from "./LocationsCity.style";
import SingleLocation from "./SingleLocation/SingleLocation";
import { v4 } from "uuid";
import { useRouter } from "next/router";

type Props = {};

export default function LocationsCity(props: Props) {
  const route = useRouter();
  const LocationData = [
    {
      url: "/assets/shared/desktop/illustration-canada.svg",
      alt: "Illustration Canada",
      nationName: "CANADA",
    },
    {
      url: "/assets/shared/desktop/illustration-australia.svg",
      alt: "Illustration Australia",
      nationName: "AUSTRALIA",
    },
    {
      url: "/assets/shared/desktop/illustration-united-kingdom.svg",
      alt: "Illustration UK",
      nationName: "UNITED KINGDOM",
    },
  ];

  return (
    <WrapperLocationCity pageName={route.asPath}>
      {LocationData.map((item) => {
        return (
          <SingleLocation
            key={v4()}
            url={item.url}
            alt={item.alt}
            nationName={item.nationName}
          />
        );
      })}
    </WrapperLocationCity>
  );
}
