import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Footer() {
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: 19.35746357821119,
        lng: 85.04338838168283
      };
    return (
        <div>
            <footer class="footer-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="footer-left">
                                <div class="footer-logo">
                                    <a href="#">Address</a>
                                </div>
                                <ul>
                                    <li><span style={{fontWeight:"900"}}>Hatchery:</span> Agastinuagaon, Chattarpur, 
                                        Ganjam-761026 (Odisha)</li>
                                    <li><span style={{fontWeight:"900"}}>Regd. Office:</span> Sastry Vihar, State
                                        Bank Colony, PO: Chattarpur
                                        Ganjam-761020, Odisha, India
                                    </li>
                                    <li><span style={{fontWeight:"900"}}>Phone:</span> 9337515767, 9861926070, 9437166874</li>
                                    <li><span style={{fontWeight:"900"}}>Email: </span>aquaticfarms.ganjam@gmail.com</li>
                                    <li><span style={{fontWeight:"900"}}>Website: </span>aquaticfarms.in</li>
                                </ul>

                            </div>
                        </div>
                        <div class="col-lg-2 offset-lg-1">
                            <div class="footer-widget">
                                
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="newslatter-item" >
                                <LoadScript style={{height:"50px"}}
                                    googleMapsApiKey="AIzaSyDd-dSQuFaTmynGSBz7okUh5x8w8vcYZPg"
                                >
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={17}
                                        size={5}
                                    >
                                        { /* Child components, such as markers, info windows, etc. */}
                                        <></>
                                        <Marker position={{
                                            lat: 19.35737542964142,
                                            lng: 85.04368304299281,
                                            
                                        }} />


                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-reserved">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="copyright-text">

                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved for Aquatic Farms Limited.

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
