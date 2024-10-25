import React from 'react';

function Lis() {
    const data = [
        {
            name: 'Mobile',
            brand: 'Samsung',
            image:require('../Components/61SEbQm6zUL.jpg'),
            year: 2024,
            price: 25000,
            discount: 20,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.incidunt laboriosam numquam nihil nulla asperiores sunt.'
        },
        {
            name: 'Buds',
            brand: 'Samsung',
            image:require('../Components/71kduvIxBVL.jpg'),

            year: 2024,
            price: 25000,
            discount: 20,
            description:'Lorem ipsum dolor sit am Ipsum eos explicabo maiores molestias incidunt laboriosam numquam nihil nulla asperiores sunt.'
        },
        {
            name: 'iphone',
            brand: 'Samsung',
            image:require('../Components/apple-iphone-16-iphone-16-pro-models-launched-in-india-price-specs-and-more.jpg'),

            year: 2024,
            price: 25000,
            discount: 20,
            description:'Lorem ipsum dolor sit amet, consectetur jjnjnjnjnjnjnjnkkkknkn adipisicing elit. Ipsum eos explicabo maiores molestias .'
        },
        {
            name: 'iphone',
            brand: 'Samsung',
            image:require('../Components/apple-iphone-16-iphone-16-pro-models-launched-in-india-price-specs-and-more.jpg'),

            year: 2024,
            price: 25000,
            discount: 20,
            description:'Lorem ipsum dolor sit amet, consectetur jjnjnjnjnjnjnjnkkkknkn adipisicing elit. Ipsum eos explicabo maiores molestias .'
        },
    ];

    return (
    
        <div className="row g-2 m-4" >
            {data.map((x, i) => (
                <div className="col" key={x.i}>
                    <div className="card">
                        <img src={x.image} className="card-img-top" alt="..." width={120} height={360} />
                        <div className="card-body">
                            <h5 className="card-title">{x.name}</h5>
                            <p className="card-text">
                                {x.description}
                            </p>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-success'>Add TO Cart</button>
                            <button className='btn btn-danger'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    );
}

export default Lis;
