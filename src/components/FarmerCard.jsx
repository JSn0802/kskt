import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function FarmerCard(props) {
  return (
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <div className="" id="card">
    <div className="card mb-4">
        <img className="card-img-top" style={{width: "100%", height: "200px"}} src={props.imglink} alt=""></img>
        <div className="card-body">
            <h5 className="card-title fw-bold">{props.farmername}</h5>
            <p className="card-text">{props.farmerdesc}</p>
            <div className="text-center">
                <Slink to={'/farmer/'+props.farmername} type="button" className="btn btn-warning">View More</Slink>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

const Slink=styled(Link)`
  
`
export default FarmerCard