import React from "react";
import LocationsCity from "../../components/LocationsCity/LocationsCity";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

type Props = {};

export default function Contact({}: Props) {
  return (
    <>
      <ContactComponent />
      <LocationsCity />
    </>
  );
}
