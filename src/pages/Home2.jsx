import React, { useEffect } from "react";
import {
  ReactPhotoSphereViewer,
  MarkersPlugin
} from "react-photo-sphere-viewer";

const Home2 = ({loggedin}) => {

  // useEffect(() => {
  //   if(!loggedin.isLoggedIn){
  //     window.location.href="/logreg";
  //   }
  // }, [])


  const [markersManager, setMarkerManager] = React.useState();
  const pSRef = React.useCallback((node) => {
    const markersPlugs = node?.getPlugin(MarkersPlugin);
    setMarkerManager(markersPlugs);
  }, []);

  const photoSphereRef = React.useRef();

  React.useEffect(() => {
    if (markersManager) {
      console.log(markersManager);
      markersManager.on("select-marker", (e, marker, data) => {
        console.log("asd");
      });
      markersManager.on("over-marker", (e, marker) => {
        console.log(`Cursor is over marker ${marker.id}`);
      });
    }
  }, [markersManager]);
const vfarmdet=
{
  farmername:"Ramesh",
  farmadd:"Delhi",
  retailername:"Agrosons",
  retaileradd:"Delhi",
  price:"600 Rs",
  quantity:"6kg",
  cropname:"Wheat",
  status:"Ready",
  quality:""
}

  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers
        markers: [
          {
            // image marker that opens the panel when clicked
            id: "image",
            longitude: 0.13,
            latitude: 0.01,
            image: "pin-blue.png",
            width: 32,
            height: 32,
            anchor: "bottom center",
            tooltip: "Organic Wheat Farm."
          },
        ]
      }
    ]
  ];

  const handleClick = () => {
    photoSphereRef.current.animate({
      latitude: 0,
      longitude: 0,
      zoom: 55,
      speed: '10rpm',
    });
  }
  return (
    <>
    <div className="row">

    <div className="col-lg-6 ">
    <ReactPhotoSphereViewer
        ref={pSRef}
        src="wheat-Sunset-Pano.jpg"
        height={"78vh"}
        width={"100%"}
        littlePlanet={false}
        onClick={handleClick}
        plugins={plugins}
      ></ReactPhotoSphereViewer>
    </div>
    
    <div className="col-lg-6 ">
    
            <div className="card shadow-lg" style={{margin:"2% 5%",padding:"3%"}}>
            <h4 className="text-center mb-3"><b>Your Virtual Farm Details</b></h4>
              <div className="row">
                <img className="card-img-top col-sm-6" src="https://i.pinimg.com/736x/8b/47/03/8b4703c39d86010958b30f777bd7259d.jpg"  style={{width:"25%",height:"25%"}} alt="" />
                <div className="col"></div>
                <img className="card-img-top col-sm-6" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Wheat_P1210892.jpg" style={{width:"30%",height:"40%"}} alt="" />
              </div>

              <div className="card-body">
              <div className="mt-3">
              <div className="row mb-3">
                  <div className="col-md-6"><h5>Farmer Name : <b>{vfarmdet.farmername}</b></h5></div>
                  <div className="col-md-6"><h5>Crop Name: <b>{vfarmdet.cropname}</b></h5></div>
                </div>

                <p className="card-text ">
                  Farm Address: Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Assumenda corrupti quam magnam! Veniam, dolorum facere?
                </p>
                
              </div>
                <div className="mt-4 ">
                <h5>Retailer's Name : <b>{vfarmdet.retailername}</b></h5>
                <p className="card-text mt-3">
                Retailer Address: Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Assumenda corrupti quam magnam! Veniam,
                  dolorum facere?
                </p>
                </div>
               
                <div className="row mt-4">
                  <div className="col-sm-3"><h5>Price : <b>{vfarmdet.price}</b></h5></div>
                  <div className="col-sm-3"><h5>Quantity : <b>{vfarmdet.quantity}</b></h5></div>
                  <div className="col-sm-3"><h5>Quality</h5></div>
                  <div className="col-sm-3"><h5>Status:<span className="text-success"><b>{vfarmdet.status}</b></span> </h5></div>
                </div>

              </div>
            </div>
          </div>
        </div>

    
      
    </>
  );
};

export default Home2;