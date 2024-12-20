import React from 'react';

const products = [];

function ResponsiveGrid() {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold my-10">Paint Protection Film PPF</h1>
      <p className="text-gray-500 mb-8">
        Best Paint Protection Films Collection with Highly Expert team. Over
        10000+ Satisfied Customers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
              <div className="font-bold">{product.title}</div>
              <div>{product.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveGrid;

export const layout = {
  areaId: 'content',
  sortOrder: 16
};
