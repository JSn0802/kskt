import React from 'react'
import styled from "styled-components";
import FarmerCard from "../components/FarmerCard";
function Farmers() {

    const farmers = [
    {
      farmername: "Ramesh",
      imglink:
        "https://i.pinimg.com/736x/8b/47/03/8b4703c39d86010958b30f777bd7259d.jpg",
        farmerdesc:"Lorem ipsum dolor sit. Assumenda corrupti quam magnam!Veniam, dolorum facere?",
    },
    {
      farmername: "Suresh",
      imglink:
        "https://i.pinimg.com/736x/8b/47/03/8b4703c39d86010958b30f777bd7259d.jpg",
        farmerdesc:"Lorem ipsum dolor sit. Assumenda corrupti quam magnam!Veniam, dolorum facere?",
    },
    {
      farmername: "Rakesh",
      imglink:
        "https://i.pinimg.com/736x/8b/47/03/8b4703c39d86010958b30f777bd7259d.jpg",
        farmerdesc:"Lorem ipsum dolor sit. Assumenda corrupti quam magnam!Veniam, dolorum facere?",
    },
    {
      farmername: "Ram",
      imglink:
        "https://i.pinimg.com/736x/8b/47/03/8b4703c39d86010958b30f777bd7259d.jpg",
        farmerdesc:"Lorem ipsum dolor sit. Assumenda corrupti quam magnam!Veniam, dolorum facere?",
    },
    {
      farmername: "Shyam",
      imglink:
        "https://i.pinimg.com/736x/8b/47/03/8b4703c39d86010958b30f777bd7259d.jpg",
        farmerdesc:"Lorem ipsum dolor sit. Assumenda corrupti quam magnam!Veniam, dolorum facere?",
    },
  ];

  return (
    <div>


<section id="gallery">
        <Ctitle>
          <h2 className="fw-bold">Farmers</h2>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sedscelerisque non quam nec viverra. Phasellus suscipit posuere
            faucibus. Morbi et magna tellus. Praesent congue risus quis augue
            aliquet, et congue arcu imperdiet.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed scelerisque non quam nec viverra.
          </p>
        </Ctitle>

        <div className="container">
          <div className="row">
            {farmers.map((farmer) => (
              <FarmerCard
                farmername={farmer.farmername}
                imglink={farmer.imglink}
                farmerdesc={farmer.farmerdesc}
              ></FarmerCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
const Ctitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: 2rem;
  }

  p {
    margin: 2rem 2rem;
  }
`;


export default Farmers