import React from 'react'


const Watches = () => {
  const watchData = [
    { id: 1, name: 'Rolex',price: 60000, description: 'Luxury Watch', image:'/03.jpg'},
    { id: 2, name: 'Citizen',price: 80000, description: 'Stylish Watch', image:'/04.jpg'},
    { id: 3, name: 'Chanel',price: 40000, description: 'Bold Watch', image:'/02.jpg'},
    { id: 4, name: 'Omega',price: 50000, description: 'Sporty Watch', image:'/05.jpg'},
    { id: 5, name: 'Seiko',price: 65000, description: 'Elegant Watch', image:'/06.jpg'},
    { id: 6, name: 'Royal',price: 20000, description: 'Affortable Watch', image:'/08.jpg'},
  ]
  return (
    <div>
      <div className="watches">
       {watchData.map((watch) => (
        <div key={watch.id} className="watch-card">
          <img src={watch.image} alt={watch.name}/>
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className='price'>${watch.price}</div>
          <button>Add to Cart</button>

          </div>

       ))}

      </div>
    </div>
  )
}

export default Watches
