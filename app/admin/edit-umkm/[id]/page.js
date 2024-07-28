import UmkmEdit from "@/components/UmkmEdit";

export default function EditUmkmPage({ params }) {
  return (
    <div className="container mx-auto my-10">
      <UmkmEdit params={params} />
    </div>
  );
}
