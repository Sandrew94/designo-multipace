import {
  ContainerText,
  ContainerTextSecondary,
  PositionSVGLC,
  TextDescriptionLocationLC,
  TextDescriptionTitleLC,
  TextMarkerStyle,
  TextTitleLC,
  WrapperALLText,
  WrapperSingleMap,
} from "./SingleMap.style";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

type Props = {
  gps: LatLngExpression | undefined;
  Nation: string;
  OfficeRole: string;
  OfficeAddress: string;
  OfficeContact: string;
  idx: number;
};

export default function SingleMapComponent({
  gps,
  Nation,
  OfficeRole,
  OfficeAddress,
  OfficeContact,
  idx,
}: Props) {
  return (
    <WrapperSingleMap idx={idx}>
      <MapContainer center={gps} zoom={13} scrollWheelZoom={false} id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={gps!}>
          <Popup>
            <TextMarkerStyle>{OfficeRole}</TextMarkerStyle>
          </Popup>
        </Marker>
      </MapContainer>
      <ContainerText>
        <TextTitleLC>{Nation}</TextTitleLC>
        <WrapperALLText>
          <ContainerTextSecondary>
            <TextDescriptionTitleLC>{OfficeRole}</TextDescriptionTitleLC>
            <TextDescriptionLocationLC>
              {OfficeAddress}
            </TextDescriptionLocationLC>
          </ContainerTextSecondary>
          <ContainerTextSecondary>
            <TextDescriptionTitleLC>Contact</TextDescriptionTitleLC>
            <TextDescriptionLocationLC>
              {OfficeContact}
            </TextDescriptionLocationLC>
          </ContainerTextSecondary>
        </WrapperALLText>
        <PositionSVGLC>
          <svg xmlns="http://www.w3.org/2000/svg" width="584" height="584">
            <defs>
              <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                <stop offset="0%" stopColor="#5D0202" stopOpacity="0" />
                <stop offset="100%" stopColor="#5D0202" stopOpacity=".498" />
              </linearGradient>
            </defs>
            <g fill="url(#a)" fillRule="evenodd" opacity=".06">
              <circle
                cx="146"
                cy="438"
                r="146"
                transform="matrix(1 0 0 -1 0 876)"
              />
              <circle
                cx="146"
                cy="146"
                r="146"
                transform="matrix(-1 0 0 1 292 0)"
              />
              <circle
                cx="438"
                cy="438"
                r="146"
                transform="matrix(0 1 1 0 0 0)"
              />
            </g>
          </svg>
        </PositionSVGLC>
      </ContainerText>
    </WrapperSingleMap>
  );
}
