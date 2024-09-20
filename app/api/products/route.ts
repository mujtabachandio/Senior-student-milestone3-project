// app/api/products/route.ts
import { NextResponse } from 'next/server';

const products = [
  { id: 2, name: 'Product 2', price: 20, image: 'https://static.vecteezy.com/system/resources/previews/035/879/352/non_2x/ai-generated-black-tshirt-isolated-on-transparent-background-free-png.png' },
  { id: 1, name: 'Product 1', price: 10, image: 'https://img.lovepik.com/element/45007/9562.png_860.png' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://i.pinimg.com/1200x/bc/52/d3/bc52d36a0f4e2cefe154122b48ecd8ae.jpg' },
  { id: 4, name: 'Product 4', price: 40, image: 'https://dafakar.com/cdn/shop/products/coding-life-b.jpg?v=1549882156' },
  { id: 5, name: 'Product 5', price: 50, image: 'https://s1.dswcdn.com/media/x490/Nike_Air_Jordan_Shoes/Air_Jordan_I_1_Shoes/Air_Jordan_I_High/Nike_Air_Jordan_I_1_Retro_High_Shoes_Sneaker_Basketball_Men_White_Navy_Blue.jpg' },
  { id: 6, name: 'Product 6', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZIouCbQOS6ChQoFRTWc6JBoYow4Gtyq8YA&s' },
  { id: 7, name: 'Product 7', price: 70, image: 'https://static-01.daraz.pk/p/5a25172cd078ffa6254f505dc9a49b03.jpg' },
  { id: 8, name: 'Product 8', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9H85YedGZASq8cAWK9KbwKt1kOfzs-l5kQ&s' },
  { id: 9, name: 'Product 9', price: 90, image: 'https://m.media-amazon.com/images/I/81ani+NedxL._AC_SL1500_.jpg' },
  { id: 10, name: 'Product 10', price: 100, image: 'https://m.media-amazon.com/images/I/61iUVxnGkYL._AC_UF1000,1000_QL80_.jpg' },
];

export async function GET() {
  return NextResponse.json(products);
}
