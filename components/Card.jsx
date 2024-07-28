import Link from 'next/link';
import Image from 'next/image';
import { handleEditArticle, handleDeleteArticle } from '@/app/lib/actions';

export default function Card({ data, linkPrefix, editHandler, deleteHandler, isAdmin }) {
  return (
    <div key={data.id} className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
      {data.imageUrl && (
        <Image 
          src={data.imageUrl} 
          alt={data.title} 
          className="w-full h-64 object-cover" 
          width="256"
          height="144"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
        />
      )}
      <div className="p-6 flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-2">{data.title.substring(0, 100)}...</h2>
        <p className="text-gray-700 mb-4">{data.content.substring(0, 200)}...</p>
        { isAdmin ? (
            <div className="mt-2 flex space-x-2">
                <Link
                    href={`${linkPrefix}/${data.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    View
                </Link>
                <button
                    onClick={() => editHandler(data.id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Edit
                </button>
                <button
                    onClick={() => deleteHandler(data.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Delete
                </button>
            </div>
        ) : (
            <Link 
                href={`${linkPrefix}/${data.id}`}
                className="text-blue-500 hover:text-blue-700 font-bold"
            >
                Baca Selengkapnya
            </Link>
        )}
      </div>
    </div>
  );
}
