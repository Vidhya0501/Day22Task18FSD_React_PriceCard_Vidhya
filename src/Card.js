import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './index.css';
function Card(props) {
  return (
    <div className="col col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center fs-5">{props.data.plan}</h5>
              <h6 className="card-price text-center fs-2">${props.data.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
              {props.data.features.map((feature)=>{
                return <li className={`p-1 ${feature.enable?'':'text-muted'}`}><FontAwesomeIcon icon={feature.enable?faCheck:faXmark} className='p-1'/>{feature.name}</li>
              })}
            </ul>
            <button type="button" className={`w-100 btn text-uppercase ${props.data.cardStyle=="pro"? 'btn-primary':'btn-primary disabled'} p-2 fw-bold`}>Button</button>
          </div>
        </div>
      </div>
  )
}

export default Card