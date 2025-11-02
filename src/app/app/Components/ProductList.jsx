"Use Client";

const products= (
{ id: 'p1', name: 'Rainbow Trout"', price: 25, category: 'River', stock: 89 },
{ id: 'p2', name: 'Brown Trout', price: 35, category: 'River', stock: 124 },
{ id: 'p3', name: 'Brook Trout', price: 50, category: 'River', stock: 98 },
{ id: 'p4', name: 'Sunfish', price: 5, category: 'Pond', stock: 300 },
{ id: 'p5', name: 'Largemouth Bass', price: 15, category: 'Pond', stock: 230 },
{ id: 'p6', name: 'Pike', price: 75, category: 'Lake', stock: 50 },
{ id: 'p7', name: 'Walleye', price: 35, category: 'Lake', stock: 130 },
{ id: 'p8', name: 'Turtle', price: 35, category: 'Misc', stock: 75 },
{ id: 'p9', name: 'Frogs', price: 10, category: 'Misc', stock: 400 },
{ id: 'p10', name: 'Dragon Fly', price: 3, category: 'Misc', stock: 500 }
);

export default function ProductList() {
    return(
        <div>
             <h2>Product List</h2>
             <ul>
                {products.map((p) =>(
                    <li key={p.id}>{p.name} - ${p.price}</li>
                ))}

            </ul>
         </div>
    );
}