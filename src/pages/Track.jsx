import * as React from "react";
import ReactMapGl, { NavigationControl, Marker, Popup } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
import logo from "../pin-blue.png";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";


function Track({ loggedin }) {
  // useEffect(() => {
  //   if(!loggedin.isLoggedIn){
  //     window.location.href="/logreg";
  //   }
  // }, [])
  const vfarms = [
    {
      id: 0,
      flongitude: 75.764374,
      flatitude: 26.928452,
      farmaddress: "Jaipur",
      farmername: "Ramesh",
      cropname: "Wheat",
      cropimage: "https://upload.wikimedia.org/wikipedia/commons/9/96/Wheat_P1210892.jpg",
      cropquant: "2kg",
    },
    {
      id: 1,
      flongitude: 77.345456,
      flatitude: 28.503449,
      farmaddress: "Delhi",
      farmername: "Ramesh",
      cropname: "Rice",
      cropimage:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Wheat_P1210892.jpg",
      cropquant: "1kg",
    },
    {
      id: 2,
      flongitude: 75.394635,
      flatitude: 20.194155,
      farmaddress: "Maharashtra",
      farmername: "Suresh",
      cropname: "Wheat",
      cropimage:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Wheat_P1210892.jpg",
      cropquant: "5kg",
    },
    {
      id: 3,
      flongitude: 79.920331,
      flatitude: 24.196864,
      farmaddress: "Madhya Pradesh",
      farmername: "Raj",
      cropname: "Oil",
      cropimage:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Wheat_P1210892.jpg",
      cropquant: "2L",
    },
  ];

  const [selectedfarm, setSelectedfarm] = useState(vfarms[0]);

 const [popupInfo, setPopupInfo] = useState(null);

  return (
    <div className="row">
      <div className="col">
        <ReactMapGl
          mapLib={maplibregl}
          initialViewState={{
            longitude: 79.920331,
            latitude: 24.196864,
            zoom: 5,
          }}
          style={{ width: "100%", height: " calc(100vh - 77px)" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ACWLZhiYz8wMg7SOeXQN"
        >
          <NavigationControl position="top-left" />
          <Marker
            longitude={16.62662018}
            latitude={49.2125578}
            color="#61dbfb"
          ></Marker>

          {vfarms.map((vfarm, i) => (
            <Marker
              longitude={vfarm.flongitude}
              latitude={vfarm.flatitude}
              color="#61dbfb"

              onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setSelectedfarm(vfarm);
                  setPopupInfo(vfarm);
                  console.log(vfarm);
                }}
            >
              
                <img
                  src={logo}
                  style={{ height: "2rem", width: "2rem" }}
                  alt=""
                ></img>
              
              {/* initial */}
              {/* <Popup latitude={vfarm.flatitude} longitude={vfarm.flongitude}>    
        <div>
          <h5>{vfarm.cropname}</h5>
          <p>{vfarm.farmaddress}</p>
        </div>
      </Popup> */}

     
            </Marker>
            
          ))}
          {/* {selectedfarm ? (
            <Popup latitude={selectedfarm.flatitude} longitude={selectedfarm.flongitude}>    
            <div onClick={() => {
                console.log("NULLING");
                setSelectedfarm(null);
              }}>
          <h5>{selectedfarm.cropname}</h5>
          <p>{selectedfarm.farmaddress}</p>
        </div>
      </Popup>
          ) : null} */}
          {popupInfo && (
      <Popup longitude={popupInfo.flongitude} latitude={popupInfo.flatitude}
        anchor="bottom"
        onClose={() => {
          setPopupInfo(null);
        }}>
       <h5>{popupInfo.cropname}</h5>
          <p>{popupInfo.farmaddress}</p>
      </Popup>)}

        </ReactMapGl>
      </div>
      <div className="col-sm-12 col-md-6 p-0">
        {vfarms.map((vfarm) => (
          <Link
            to="/panorama"
            style={{ textDecoration: "none", color: "black" }}
            className="row shadow m-3 p-2"
          >
            <div className="col-md-2 col-lg-2">
              <img
                src={vfarm.cropimage}
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </div>
            <div className="col">
              <div className="row">
                <h3 className="col">{vfarm.cropname} </h3>
                <p className="col-4"> Virtual Farm id: {vfarm.id}</p>
              </div>

              <h6>{vfarm.cropquant}</h6>
              <h6>{vfarm.farmaddress}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Track;
