import { motion } from 'framer-motion';
import Card from '@/components/StrukturDesa/Card';
import PerangkatDesa from '@/components/StrukturDesa/PerangkatDesa';


const ls1 = [0, 2, 3, 4];
const ls2 = [1, 5, 7, 6];
const ls3 = [0, 8, 9, 10];


const Page1 = (page) => {
    return (
    <motion.div
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls1[0]].imgSrc}
                position={PerangkatDesa[ls1[0]].position}
                name={PerangkatDesa[ls1[0]].name}
                view={0}
                currentPage={page}
            />
        </div>
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls1[1]].imgSrc}
                position={PerangkatDesa[ls1[1]].position}
                name={PerangkatDesa[ls1[1]].name}
                view={0}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls1[2]].imgSrc}
                position={PerangkatDesa[ls1[2]].position}
                name={PerangkatDesa[ls1[2]].name}
                view={0}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls1[3]].imgSrc}
                position={PerangkatDesa[ls1[3]].position}
                name={PerangkatDesa[ls1[3]].name}
                view={0}
                currentPage={page}
            />
        </div>
    </motion.div>
)}

const Page2 = (page) => {
    return (
    <>
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls2[0]].imgSrc}
                position={PerangkatDesa[ls2[0]].position}
                name={PerangkatDesa[ls2[0]].name}
                view={1}
                currentPage={page}
            />
        </div>
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls2[1]].imgSrc}
                position={PerangkatDesa[ls2[1]].position}
                name={PerangkatDesa[ls2[1]].name}
                view={1}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls2[2]].imgSrc}
                position={PerangkatDesa[ls2[2]].position}
                name={PerangkatDesa[ls2[2]].name}
                view={1}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls2[3]].imgSrc}
                position={PerangkatDesa[ls2[3]].position}
                name={PerangkatDesa[ls2[3]].name}
                view={1}
                currentPage={page}
            />
        </div>
    </>
)}

const Page3 = (page) => {
    return (
    <>
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls3[0]].imgSrc}
                position={PerangkatDesa[ls3[0]].position}
                name={PerangkatDesa[ls3[0]].name}
                view={2}
                currentPage={page}
            />
        </div>
        <div className="mt-4 flex justify-center">
            <Card
                imgSrc={PerangkatDesa[ls3[1]].imgSrc}
                position={PerangkatDesa[ls3[1]].position}
                name={PerangkatDesa[ls3[1]].name}
                view={2}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls3[2]].imgSrc}
                position={PerangkatDesa[ls3[2]].position}
                name={PerangkatDesa[ls3[2]].name}
                view={2}
                currentPage={page}
            />
            <Card
                imgSrc={PerangkatDesa[ls3[3]].imgSrc}
                position={PerangkatDesa[ls3[3]].position}
                name={PerangkatDesa[ls3[3]].name}
                view={2}
                currentPage={page}
            />
        </div>
    </>
)}

export {Page1, Page2, Page3};