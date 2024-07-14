import Link from 'next/link'

export default function AdminSidebar() {
    return (
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
            <div className="flex items-center justify-center h-16 bg-gray-800">
                <span className="text-white font-bold uppercase">Nextharja</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    <Link href="/admin/article" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                        Artikel
                    </Link>
                    <Link href="/admin/umkm" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        UMKM
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        Settings
                    </Link>
                </nav>
            </div>
        </div>
    )
}