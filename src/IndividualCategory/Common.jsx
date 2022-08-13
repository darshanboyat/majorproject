import React from 'react'
import data from './dummy'

function Common() {
  return (
    <>
        <div className="text-center">
        <div className="row row-cols-3 d-flex flex-row">
        {
            data.map(content =>{
                return (
                    <div className="card flex-col" style={{ width: "20rem" }}>
                        <img src={content.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h1 className="card-title" style={{ color: "black" }}>{content.name}</h1>
                          <div className="card-text d-flex">
                            <h2 style={{ color: "black;"}}>&#8377;{content.price}</h2>
                            <p style={{ color: "black" }}>
                              <div className="btn-group custom-spacing" role="group" aria-label="Basic mixed styles example">
                                  <button type="button" className="btn btn-danger">-</button>
                                  <button type="button" disabled className="btn btn-warning">{content.qnty}</button>
                                  <button type="button" className="btn btn-success" onClick={()=>{}}>+</button>
                              </div>
                            </p>
                          </div>


                    <div className="btn-group">
                      <button type="button" className="btn btn-danger">Size</button>
                      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                            <button className="dropdown-item" type='radio'>S</button>
                        </li>
                        <li>
                            <button className="dropdown-item" type='radio'>M</button>
                        </li>
                        <li>
                            <button className="dropdown-item" type='radio'>L</button>
                        </li>
                        <li>
                            <button className="dropdown-item" type='radio'>XL</button>
                        </li>
                        <li>
                            <button className="dropdown-item" type='radio'>XXL</button>
                        </li>
                      </ul>
                    </div>





                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
   </>
  )
}

export default Common;