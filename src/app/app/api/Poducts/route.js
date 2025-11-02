import { NextResponse } from 'next/server';


export async function GET() {
const products = [
{ id: 'p1', name: 'Laptop Pro 14"', price: 1299, category: 'Electronics', stock: 5 },
{ id: 'p2', name: 'Noise-Cancelling Headphones', price: 249, category: 'Electronics', stock: 8 },
{ id: 'p3', name: 'Wireless Mouse', price: 39, category: 'Electronics', stock: 12 },
{ id: 'p4', name: 'Oak Desk', price: 399, category: 'Furniture', stock: 3 },
{ id: 'p5', name: 'Ergonomic Chair', price: 199, category: 'Furniture', stock: 4 },
{ id: 'p6', name: 'Ceramic Mug (Set of 2)', price: 24, category: 'Kitchen', stock: 10 },
{ id: 'p7', name: 'Chef Knife', price: 89, category: 'Kitchen', stock: 6 },
{ id: 'p8', name: 'Yoga Mat', price: 45, category: 'Fitness', stock: 7 },
{ id: 'p9', name: 'Dumbbell Set', price: 129, category: 'Fitness', stock: 2 },
{ id: 'p10', name: 'Standing Lamp', price: 79, category: 'Home Decor', stock: 5 }
];
return NextResponse.json(products);
}