type TShoe = {
  id: number;
  title: string;
  description: string;
  price: number;
};

const ShoeCard = ({ shoe }: { shoe: TShoe }) => (
  <div className="max-w-sm cursor-pointer overflow-hidden rounded-xl border bg-gray-100 p-4 shadow-lg hover:shadow-xl">
    <h2 className="mb-2 text-xl font-bold">{shoe.title}</h2>
    <p className="mb-4 text-base text-gray-700">{shoe.description}</p>
    <p className="text-lg font-semibold text-green-500">${shoe.price}</p>
  </div>
);

const ShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    // cache: 'force-cache'
    next: {
      revalidate: 5, // seconds (5 seconds)
    },
  });
  const shoes: TShoe[] = await res.json();
  console.log(shoes);
  return (
    <div className="mx-4 min-h-screen py-4">
      <h1 className="text-center text-3xl font-bold">Shoes Page</h1>
      <div className="mt-4 grid grid-cols-4 gap-4 p-4">
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoesPage;
