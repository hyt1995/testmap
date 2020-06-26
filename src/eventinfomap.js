import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from "google-maps-react"

class Eventinfomap extends React.Component {
    render(){
        const mapStyles = {
            width: "82%",
            height: "60%",
        };
        const { xy } = this.props;
        return(
            <div>
                <Map
                  google = {this.props.google}
                  zoom={14} //14
                  style={mapStyles}
                  initialCenter={{ lat:xy.mapy, lng:xy.mapx }}
                >
                    <Marker 
                      name={"내가 선택한 축제"}
                      title={"내가 선택한 축제"} 
                      position={{ lat:xy.mapy, lng:xy.mapx }}
                    />
                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyCgl0XB4EdBHtmyB4P7Pu4HbnM3gndzyiY"
})(Eventinfomap);