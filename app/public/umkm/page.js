import UmkmList from "@/components/UmkmList";

export default function UmkmListPage() {
  return (
    <div className="mx-2 sm:mx-12 md:mx-28 my-16">
      <h1 className="text-4xl font-bold text-center my-10">UMKM</h1>
      <UmkmList  isAdmin={false}/>
    </div>
  );
}
