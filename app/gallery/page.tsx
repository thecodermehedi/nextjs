import Image from "next/image";
import NextImage from "@/app/assets/docs-og.webp";

const GalleryPage = () => {
 return (
  <div className=" m-2 p-2 min-h-[94vh] rounded-xl">
   <h1 className="text-4xl font-bold text-center py-2">Gallery</h1>
   <p className="text-2xl font-medium text-center mb-2 py-2">Image Optimization</p>
   <div className="rounded-xl w-full h-full bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
    <div className="flex flex-col items-center justify-center p-2">
     <img src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E" alt="next image" className=" object-cover rounded-xl" />
     <p className="font-medium mt-2">Source: Regular Image Tag</p>
    </div>
    <div className="flex flex-col items-center justify-center p-2">
     <Image
      src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E" alt="next image" className=" object-cover rounded-xl"
      width={843}
      height={441}
     // fill
     />
     <p className="font-medium mt-2">Source: NextJS Image Component</p>
    </div>
    <div className="flex flex-col items-center justify-center p-2">
     <Image
      src={NextImage} alt="next image" className=" object-cover rounded-xl"
      width={843}
      height={441}
     // fill
     />
     <p className="font-medium mt-2">Source: Local Image with NextJS Image Component</p>
    </div>
    <div className="flex flex-col items-center justify-center p-2">
     <Image src={NextImage} alt="next image" className=" object-cover rounded-xl" width={843} height={441} />
     <p className="font-medium mt-2">Source: Local Image with Regular Image TAg</p>
    </div>
   </div>
  </div>
 );
};

export default GalleryPage;
