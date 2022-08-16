import { LatLngExpression } from "leaflet";

export const locationData = [
  {
    Nation: "Canada",
    gps: [43.644009, -79.394577] as LatLngExpression | undefined,
    OfficeRole: "Designo Central Office",
    OfficeAddress: `3886 Wellington Street\nToronto, Ontario M9C 3J5`,
    OfficeContact: "P : +1 253-863-8967\nM : contact@designo.com",
  },
  {
    Nation: "Australia",
    gps: [-33.10495, 151.645035] as LatLngExpression | undefined,
    OfficeRole: "Designo AU Office",
    OfficeAddress: "19 Balonne Street\nNew South Wales 2443",
    OfficeContact: "P : (02) 6720 9092\nM : contact@designo.au",
  },
  {
    Nation: "United Kingdom",
    gps: [51.93936, -3.88149] as LatLngExpression | undefined,
    OfficeRole: "Designo UK Office",
    OfficeAddress: "13  Colorado Way\nRhyd-y-fro SA8 9GA",
    OfficeContact: "P : 078 3115 1400\nM : contact@designo.uk",
  },
];
