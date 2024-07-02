
import React from "react";
import { useSelector } from "react-redux";
import logoImage from '../image/logo.png';
import backgroundImage from '../image/background2.png';
import '../components/style.css';

const Home = () => {
  const needsByDisasterCategory = useSelector(state => state.needsByDisasterCategory);

  const tasks = [
    "Menyiapkan bahan perencanaan kebijakan di bidang rekonstruksi sarana prasarana, kehidupan sosial masyarakat, dan pelayanan publik.",
    "Menyiapkan bahan pedoman teknis dan standar di bidang rekonstruksi sarana prasarana, kehidupan sosial masyarakat, dan pelayanan publik.",
    "Menyiapkan bahan pelaksanaan kebijakan di bidang rekonstruksi sarana prasarana, kehidupan sosial masyarakat, dan pelayanan publik.",
    "Menyiapkan bahan kerjasama di bidang rekonstruksi sarana prasarana, kehidupan sosial masyarakat, dan pelayanan publik.",
    "Menyiapkan bahan pengendalian dan pengawasan di bidang rekonstruksi sarana prasarana, kehidupan sosial masyarakat, dan pelayanan publik.",
    "Menyusun laporan dan evaluasi terkait dengan hasil rekonstruksi untuk digunakan sebagai bahan perbaikan dan pengambilan keputusan lebih lanjut.",
    "Mengadakan pelatihan dan sosialisasi untuk meningkatkan kapasitas dan kesiapan masyarakat serta aparatur terkait dalam menghadapi bencana dan pelaksanaan rekonstruksi.",
    "Melakukan koordinasi dengan berbagai instansi pemerintah, organisasi non-pemerintah, dan masyarakat dalam pelaksanaan rekonstruksi.",
    "Melakukan monitoring dan evaluasi terhadap program dan kegiatan rekonstruksi untuk memastikan pelaksanaan sesuai dengan perencanaan dan tujuan yang telah ditetapkan.",
    "Melakukan pendataan dan inventarisasi terhadap kerusakan dan kebutuhan rekonstruksi untuk menentukan prioritas dan strategi penanganan."
  ];

  return (
    <React.Fragment>

      {/* Container 1 */}
      <div className="container-xx1 py-5 bg-dark hero-header mb-5">
        <div className="container my-5 px-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <img src={logoImage} className="img-field img-fluid" alt="" />
            </div>
            <div className="col-lg-6 text-center">
              <h1 className="display-3 text-white animated sliderInLeft" style={{ fontSize: '3rem', textAlign: 'center' }}>Kebutuhan Rekonstruksi Bencana Alam</h1><br />
              <p className="text-white animated slideInLeft mb-4 pb-2" style={{ textAlign: 'center' }}>Rekonstruksi adalah Pembangunan kembali semua prasarana dan sarana serta kelembagaan pada wilayah pasca bencana pemerintahan atau masyarakat dengan sasaran utama Tumbuh kembangnya kegiatan ekonomi, sosial dan budaya, tegaknya hukum dan ketertiban serta bangkitnya peran serta masyarakat dalam segala aspek kehidupan.</p>
              <a href="#" className='btn btn-success py-sm-3 px-sm-5'>Create New Report</a>
            </div>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container-xx1 py-5 bg-light" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container d-flex">
          <div className="task-item-container col-lg-8 rounded p-4" style={{ backgroundColor: '#3B805F', color: 'white' }}>
            <h3 className="text-2xl mb-4">Tugas dari seksi rekonstruksi:</h3>
            <ol className="list-decimal" style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '15px' }}>
              {tasks.map((task, index) => (
                <li key={index} className="mb-3">{task}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <div className="container-xx1 py-5">
        <div className="container">
          <h3 className="text-2xl mx-auto text-center mb-4 py-5" style={{ maxWidth: '400px' }}>Kebutuhan Rekonstruksi Berdasarkan Kategori Bencana</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {needsByDisasterCategory.map((category, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-lg" >
                  <div className="card-header" style={{ backgroundColor: '#3B805F', color: 'white' }}>{category.category}</div>
                  <div className="card-body">
                    <ul className="list">
                      {category.needs.map((need, idx) => (
                        <li key={idx}>{need}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Home;
