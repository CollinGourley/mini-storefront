'use client';
import React from 'react';


export default function PriceFilter({ categories = [], value, onChange }) {
return (
<div className="mb-3">
<label className="block text-sm font-medium mb-1">Price</label>
<input
type="number"
value={value}
onChange={(e) => onChange(e.target.value)}
className="w-full border p-2 rounded"
/>
</div>
);
}