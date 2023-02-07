import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
function ProductDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.productType}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><NavLink to={`/buyTogether/${props.productType}`}>{props.first}</NavLink></Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.second}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.third}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProductDropdown