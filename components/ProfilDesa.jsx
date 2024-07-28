'use client';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';

// Register CategoryScale
Chart.register(CategoryScale);

const ProfilDesa = ({ data }) => {
  const {
    namaDesa,
    kecamatan,
    kabupaten,
    provinsi,
    tahunPembentukan,
    dasarHukum,
    petaResmi,
    koordinat,
    batasWilayah,
    personil,
    dataUmum,
    pekerjaan,
    saranaPrasarana,
  } = data;

  const pekerjaanData = {
    labels: ['Karyawan', 'Wiraswasta', 'Petani', 'Buruh Tani', 'Nelayan', 'Pensiunan', 'Lainnya'],
    datasets: [
      {
        label: 'Jumlah Pekerja',
        data: [554, 581, 123, 188, 7, 20, 2735],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 prose prose-lg">
      <h1 className="text-center">Profil Desa {namaDesa}</h1>
      <h2 className="text-xl mt-4">Informasi Umum</h2>
      <p>
        <strong>Kecamatan:</strong> {kecamatan} <br />
        <strong>Kabupaten/Kota:</strong> {kabupaten} <br />
        <strong>Provinsi:</strong> {provinsi} <br />
        <strong>Tahun Pembentukan:</strong> {tahunPembentukan} <br />
        <strong>Dasar Hukum Pembentukan:</strong> {dasarHukum} <br />
        <strong>Peta Resmi Wilayah:</strong> {petaResmi} <br />
        <strong>Koordinat:</strong> {koordinat} <br />
      </p>
      <h2 className="text-xl mt-4">Batas Wilayah</h2>
      <ul>
        {batasWilayah.map((batas, index) => (
          <li key={index}>{batas}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4">Personil Desa</h2>
      <ul>
        {personil.map((p, index) => (
          <li key={index}>{p.jabatan}: {p.nama}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4">Data Umum</h2>
      <p>{dataUmum}</p>
      <h2 className="text-xl mt-4">Pekerjaan Penduduk</h2>
      <Bar data={pekerjaanData} />
      <h2 className="text-xl mt-4">Sarana dan Prasarana</h2>
      <ul>
        {saranaPrasarana.map((sarana, index) => (
          <li key={index}>{sarana}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilDesa;
