'use client';
import React from 'react';


export default function ProductCard({ product, onAdd }) {
const outOfStock = product.stock <= 0;


return (
<div className="border rounded p-4 flex flex-col justify-between h-full">
<div>
<h3 className="font-semibold">{product.name}</h3>
<p className="text-sm text-gray-600">{product.category}</p>
<p className="mt-2 text-lg font-bold">${product.price}</p>
<p className="mt-1 text-sm">Stock: <span className={outOfStock ? 'text-red-600' : 'text-green-600'}>{product.stock}</span></p>
</div>


<div className="mt-4 flex items-center justify-between">
<button
className={`px-3 py-1 rounded ${outOfStock ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
onClick={onAdd}
disabled={outOfStock}
>
{outOfStock ? 'Out of stock' : 'Add'}
</button>
<span className="text-sm text-gray-500">ID: {product.id}</span>
</div>
</div>
);
}