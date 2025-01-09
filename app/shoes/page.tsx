type TShoe = {
 id: number;
 title: string;
 description: string;
 price: number;
}

const ShoeCard = ({ shoe }: { shoe: TShoe }) => (
 <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer p-4 bg-gray-100 border">
  <h2 className="text-xl font-bold mb-2">{shoe.title}</h2>
  <p className="text-gray-700 text-base mb-4">{shoe.description}</p>
  <p className="text-green-500 text-lg font-semibold">${shoe.price}</p>
 </div>
);

const ShoesPage = async () => {
 const res = await fetch('http://localhost:5000/shoes', {
  // cache: 'force-cache'
  next: {
   revalidate: 5, // seconds (5 seconds)
  }
 });
 const shoes: TShoe[] = await res.json();
 console.log(shoes);
 return (
  <div className="min-h-screen mx-4 py-4">
   <h1 className="text-3xl text-center font-bold">Shoes Page</h1>
   <div className="grid grid-cols-4 gap-4 mt-4 p-4">
    {shoes.map(shoe => (
     <ShoeCard key={shoe.id} shoe={shoe} />
    ))}
   </div>
  </div>
 );
};


export default ShoesPage;
