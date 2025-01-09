import Image from "next/image";
import NextImage from "@/app/assets/docs-og.webp";

const GalleryPage = () => {
  return (
    <div className="m-2 min-h-[94vh] rounded-xl p-2">
      <h1 className="py-2 text-center text-4xl font-bold">Gallery</h1>
      <p className="mb-2 py-2 text-center text-2xl font-medium">
        Image Optimization
      </p>
      <div className="grid h-full w-full grid-cols-1 gap-4 rounded-xl bg-gray-100 p-2 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-2">
          <img
            src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
            alt="next image"
            className="rounded-xl object-cover"
          />
          <p className="mt-2 font-medium">Source: Regular Image Tag</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <Image
            src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
            alt="next image"
            className="rounded-xl object-cover"
            width={843}
            height={441}
            // fill
          />
          <p className="mt-2 font-medium">Source: NextJS Image Component</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <Image
            src={NextImage}
            alt="next image"
            className="rounded-xl object-cover"
            width={843}
            height={441}
            // fill
          />
          <p className="mt-2 font-medium">
            Source: Local Image with NextJS Image Component
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <Image
            src={NextImage}
            alt="next image"
            className="rounded-xl object-cover"
            width={843}
            height={441}
          />
          <p className="mt-2 font-medium">
            Source: Local Image with Regular Image TAg
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
