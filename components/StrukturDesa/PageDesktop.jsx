import Card from '@/components/StrukturDesa/Card'
import PerangkatDesa from '@/components/StrukturDesa/PerangkatDesa'

export default function PageDesktop({ls, view, page}) {
  return (
    <div data-aos="zoom-in">
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls[0]].imgSrc}
                position={PerangkatDesa[ls[0]].position}
                name={PerangkatDesa[ls[0]].name}
                view={view}
                currentPage={page}
            />
        </div>
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls[1]].imgSrc}
                position={PerangkatDesa[ls[1]].position}
                name={PerangkatDesa[ls[1]].name}
                view={view}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls[2]].imgSrc}
                position={PerangkatDesa[ls[2]].position}
                name={PerangkatDesa[ls[2]].name}
                view={view}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls[3]].imgSrc}
                position={PerangkatDesa[ls[3]].position}
                name={PerangkatDesa[ls[3]].name}
                view={view}
                currentPage={page}
            />
        </div>
  </div>
  )
}