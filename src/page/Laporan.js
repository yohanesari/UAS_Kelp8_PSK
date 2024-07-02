  import React, { useRef, useState } from "react";
  import { collection, addDoc } from 'firebase/firestore';
  import { db } from '../firebase';
  import backgroundImage from '../image/background.png';
  import '../components/style.css';

  const Laporan = () => {
    // Import stylesheet for Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito&display=swap';
    document.head.appendChild(link);

    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [jenis_bencana, setJenisBencana] = useState('');
    const [jenis_kerusakan, setJenisKerusakan] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jumlah_korban, setJumlahKorban] = useState('');
    const [jumlah_kerusakan, setJumlahKerusakan] = useState('');

    const namaRef = useRef();

    function handleInputNama(event) {
      setNama(event.target.value);
    }

    function handleInputEmail(event) {
      setEmail(event.target.value);
    }

    function handleInputBencana(event) {
      setJenisBencana(event.target.value);
    }

    function handleInputKerusakan(event) {
      setJenisKerusakan(event.target.value);
    }

    function handleInputAlamat(event) {
      setAlamat(event.target.value);
    }

    function handleInputJumlahKorban(event) {
      setJumlahKorban(event.target.value);
    }
    
    function handleInputJumlahKerusakan(event) {
      setJumlahKerusakan(event.target.value);
    }
    

    const resetForm = () => {
      setNama('');
      setEmail('');
      setJenisBencana('');
      setJenisKerusakan('');
      setAlamat('');
      namaRef.current.focus();
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!window.confirm("Apakah anda ingin melanjutkan mengirim laporan ini ?")) return;

      const newLaporan = { nama, email, jenis_bencana, jenis_kerusakan, alamat, jumlah_korban, jumlah_kerusakan };
      console.log('Data Laporan Bencana:', newLaporan);

      try {
        const docRef = await addDoc(collection(db, "laporan"), newLaporan);
        console.log("ID Dokumen yang baru ditambahkan: ", docRef.id);
        resetForm();
      } catch (error) {
        console.error("Error saat menambahkan dokumen: ", error);
      }
    };

    return (
      <React.Fragment>
        {/* Container 1 */}
        <div className="container-xx1 bg-light" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container d-flex flex-column justify-content-center align-items-center text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Laporan Data</h3>
              <p>Kebutuhan Rekontruksi Akibat Bencana Alam</p>
            </div>
          </div>
        </div>

        {/* Container 2 */}
        <div className="container d-flex justify-content-center my-5">
          <div className="col-md-5 data">
            <h2 className="text-center">Data Laporan</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input type="text" ref={namaRef} className="form-control" id="name" placeholder="Masukkan nama anda" value={nama} onChange={handleInputNama} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Masukkan email anda" value={email} onChange={handleInputEmail} required />
              </div>
              <div className="mb-3">
                <label htmlFor="jenis_bencana" className="form-label">Jenis Bencana</label>
                <select className="form-select" id="jenis_bencana" value={jenis_bencana} onChange={handleInputBencana} required>
                  <option disabled value="">Pilih jenis bencana...</option>
                  <option value="Banjir">Banjir</option>
                  <option value="Gempa">Gempa</option>
                  <option value="Tsunami">Tsunami</option>
                  <option value="Letusan Gunung">Letusan Gunung</option>
                  <option value="Tanah Longsor">Tanah Longsor</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="jenis_kerusakan" className="form-label">Jenis Kerusakan</label>
                <select className="form-select" id="jenis_kerusakan" value={jenis_kerusakan} onChange={handleInputKerusakan} required>
                  <option disabled value="">Pilih jenis kerusakan...</option>
                  <option value="Ringan">Ringan</option>
                  <option value="Sedang">Sedang</option>
                  <option value="Berat">Berat</option>
                  <option value="Parah">Parah</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="jumlah_korban" className="form-label">Jumlah Korban</label>
                <input type="number" className="form-control" id="jumlah_korban" placeholder="Masukkan jumlah korban" value={jumlah_korban} onChange={handleInputJumlahKorban} required />
              </div>
              <div className="mb-3">
                <label htmlFor="jumlah_kerusakan" className="form-label">Jumlah Kerusakan Bangunan</label>
                <input type="number" className="form-control" id="jumlah_kerusakan" placeholder="Masukkan jumlah kerusakan bangunan" value={jumlah_kerusakan} onChange={handleInputJumlahKerusakan} required />
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">Alamat Terjadi Bencana</label>
                <input type="text" className="form-control" id="alamat" placeholder="Masukkan alamat kejadian bencana" value={alamat} onChange={handleInputAlamat} required />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }

  export default Laporan;