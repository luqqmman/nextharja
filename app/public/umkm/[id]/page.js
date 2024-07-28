import UmkmDetail from '@/components/UmkmDetail';

export default function UmkmDetailPage({ params }) {
  return (
    <div className="my-8 sm:my-16 mx-4 sm:mx-12 md:mx-32">
      <UmkmDetail params={params} />
    </div>
  );
}

