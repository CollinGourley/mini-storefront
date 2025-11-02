'use client';
import React from 'react';


export default function CategoryFilter({ categories = [], value, onChange }) {
return (
<div className="mb-3">
<label className="block text-sm font-medium mb-1">Category</label>
<select
value={value}
onChange={(e) => onChange(e.target.value)}
className="w-full border p-2 rounded"
>
{categories.map((c) => (
<option key={c} value={c}>{c}</option>
))}
</select>
</div>
);}