import React from "react";
import "../styles/MyMap.css"

import { YMaps, Map, Placemark, } from "@pbe/react-yandex-maps";


function MyMap(props){

    return(
        <>
            <YMaps>
                <div>
                    <Map defaultState={{ center: [props.cords['lati'], props.cords['long']],
                         zoom: 10, 
                         controls: ["zoomControl", "fullscreenControl"],}}
                         modules={["control.ZoomControl", "control.FullscreenControl"]}
                    >
                        <Placemark
                         modules={["geoObject.addon.balloon"]}
                         defaultGeometry={[props.cords['lati'], props.cords['long']]} 
                         properties={{
                            balloonContentBody:
                              "Эта точка показывает, где вы находитесь",
                          }}
                        />
                    </Map>     
                </div>
            </YMaps>
        </>
    );
}

export default MyMap;