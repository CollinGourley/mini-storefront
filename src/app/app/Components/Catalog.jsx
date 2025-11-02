'use client';
setCart((prev) => {
const existing = prev[product.id];
// if out of stock, ignore
if (product.stock <= 0) return prev;


const newQty = existing ? existing.qty + 1 : 1;
// immutably update
return {
...prev,
[product.id]: { product: { ...product }, qty: newQty }
};
});
// also decrement stock locally (optimistic UI)
setProducts((prev) => prev.map((p) => (p.id === product.id ? { ...p, stock: Math.max(0, p.stock - 1) } : p)));
 [];


const decrementItem = useCallback((productId) => {
setCart((prev) => {
const item = prev[productId];
if (!item) return prev;
const newQty = item.qty - 1;
const next = { ...prev };
if (newQty <= 0) delete next[productId];
else next[productId] = { ...item, qty: newQty };
return next;
});
// put one back to stock
setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, stock: p.stock + 1 } : p)));
}, []);


const resetCart = useCallback(() => {
// return all cart quantities to stock
setProducts((prev) => {
const next = prev.map((p) => {
const inCart = cart[p.id];
if (!inCart) return p;
return { ...p, stock: p.stock + inCart.qty };
});
return next;
});
setCart({});
}, [cart]);


return (
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
<aside className="lg:col-span-1">
<div className="bg-white p-4 rounded shadow">
<h2 className="font-semibold mb-2">Filters</h2>
<CategoryFilter categories={categories} value={category} onChange={setCategory} />
<PriceFilter value={maxPrice} onChange={setMaxPrice} />


<div className="mt-4">
<CartSummary cart={cart} onDecrement={decrementItem} onReset={resetCart} />
</div>
</div>
</aside>


<section className="lg:col-span-3">
<div className="bg-white p-4 rounded shadow">
<StatusMessage loading={loading} error={error} empty={!loading && filtered.length === 0} />


{!loading && !error && filtered.length > 0 && (
<ProductList products={filtered} onAdd={addToCart} />
)}
</div>
</section>
</div>
);