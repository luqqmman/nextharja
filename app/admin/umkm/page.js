"use client";
import Link from "next/link";
import UmkmList from "@/components/UmkmList";

export default function Admin() {
    return (
        <>  
            <div className="mx-auto w-full max-w-l">
                <div className="rounded px-8 pt-6 pb-8 mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline" 
                    >
                        <Link href="/admin/add-umkm">
                            Tambah UMKM
                        </Link>
                    </button>
                    <UmkmList isAdmin={true} />
                </div>
            </div>
        </>

    )
};