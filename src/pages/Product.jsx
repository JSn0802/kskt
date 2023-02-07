import React from 'react'
import {useParams} from 'react-router-dom'
import ControlledCarousel from "../components/ControlledCarousel";
import ProductDropdown from '../components/Dropdown';
import styled from "styled-components";
function Product() {
    const cropname=useParams();
  return (
    <div>
     <Ctitle>
          <h2 className="fw-bold">{cropname.name}</h2>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sedscelerisque non quam nec viverra. Phasellus suscipit posuere
            faucibus. Morbi et magna tellus. Praesent congue risus quis augue
            aliquet, et congue arcu imperdiet.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed scelerisque non quam nec viverra.
          </p>
        </Ctitle> 
    
        <SDdowns className='row'>
        <div className='col m-3'>
        <ProductDropdown productType="Wheat" first="UP" second="Bihar" third="Maharashtra"></ProductDropdown>
        </div>
        <div className='col m-3'>
        <ProductDropdown productType="Grain2" first="UP" second="Bihar" third="Maharashtra"></ProductDropdown>
        </div>
        <div className='col m-3'>
        <ProductDropdown productType="Grain3" first="UP" second="Bihar" third="Maharashtra"></ProductDropdown>
        </div>
        <div className='col m-3'>
        <ProductDropdown productType="Grain4" first="UP" second="Bihar" third="Maharashtra"></ProductDropdown>
        </div>
        <div className='col m-3'>
        <ProductDropdown productType="Grain5" first="UP" second="Bihar" third="Maharashtra"></ProductDropdown>
        </div>
         
        </SDdowns>
        <div style={{marginBottom:"4rem"}}>
        <ControlledCarousel ></ControlledCarousel>
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
const SDdowns=styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 6rem;
`

export default Product