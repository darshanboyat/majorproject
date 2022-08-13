import React from 'react'
import {Link} from 'react-router-dom'
import Male from './Assets/male.jpg'
import Female from './Assets/female.jpg'
import Unisex from './Assets/unisex.jpg'
function Category() {
  return (
   <>

        <div className='categories'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"/>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2"/>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3"/>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/2600x1000/?cloths,fashion" className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="https://source.unsplash.com/2600x1000/?trend,classic" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/2600x1000/?software,tech" className="d-block w-100" alt="..." />
          </div>
        </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <h3 className='category-caption'>Category</h3>
      <div className="underline"></div>
        <div className="row">
          <div className="col">
              <figure className="figure">
                  <Link to="/male">
                  <img src={Male} className="figure-img img-fluid rounded" alt="..." />
                  <h3 className='category-caption sub-heading'>Male</h3></Link>
              </figure>
          </div>
          <div className="col">
          <Link to="/female">
           <img src={Female} className="figure-img img-fluid rounded" alt="..." />
           <h3 className='category-caption sub-heading'>Female</h3></Link>
          </div>
        </div>
         <div className="row">
         <Link to="/common">
              <img src={Unisex} className="Unisex-img figure-img img-fluid rounded" alt="..." />
              <h3 className='category-caption sub-heading'>Unisex</h3></Link>
              <div className="col-8">
          </div>
        </div>
        <div className="underline"></div>
   </>
  )
}

export default Category