import React from 'react'
import {useParams} from 'react-router-dom'
import ControlledCarousel from "../components/ControlledCarousel";
import styled from "styled-components";

function Farmer() {
    const farmername=useParams();

  return (
    <div>
          <Ctitle>
          <h2 className="fw-bold">{farmername.name}</h2>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sedscelerisque non quam nec viverra. Phasellus suscipit posuere
            faucibus. Morbi et magna tellus.a.
          </p>
        </Ctitle> 


        <div className='row'>
          <div className='col'><ControlledCarousel></ControlledCarousel></div>
          <div className='col'><ControlledCarousel></ControlledCarousel></div>
        </div>

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
export default Farmer