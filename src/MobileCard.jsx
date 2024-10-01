import React from 'react';


function MobileCard({mobile}) {

  return (
    <div className="mobile-card">
      <img src={mobile.image} alt={mobile.name} />
      <h3>{mobile.name}</h3>
      <p>{mobile.price}</p>
      <button className="btn">Add to cart</button>
    </div>
  );
}

export default MobileCard;
