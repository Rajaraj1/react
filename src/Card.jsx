import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div class="card shadow-2xl border-3 rounded-3" style={{width: 18+'rem'}}>
  <img src={props.imgsrc}class="card-img-top" alt="image not found"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    )
}

export default Card
