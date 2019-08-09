import React from "react";
import MapCotainer from "./MapContainer";
import Map from "./Map"

export default function Contact_us() {
  return (
   <div style={{ paddingTop: 50 }}>
      <address>
        <div>
          Shop No.10/11 Parvez Complex, Shankerseth road, Near Golibar Maiden,
        </div>
        <div>Next to DTDC courier Camp branch</div>
        <div>Camp</div>
        <div>Pune, Maharashtra 411001</div>
        <div>India</div>
      </address>
 
      <MapCotainer/>
    </div>
  );
}
