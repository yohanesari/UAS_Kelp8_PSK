import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../components/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import backgroundImage from '../image/morning.jpg';

const EditLaporan = () => {
    const { id } = useParams();
    const navigasi = useNavigate();
    const [laporan, setLaporan] = useState({
        nama: '',
        email: '',
        jenis_bencana: '',
        jenis_kerusakan: '',
        alamat: '',
        jumlah_korban: 0,
        jumlah_kerusakan: 0
    });

    useEffect(() => {
        fetchLaporan();
    }, []);

    const fetchLaporan = async () => {
        try {
            const docRef = doc(db, 'laporan', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setLaporan(docSnap.data());
            } else {
                console.log('Dokumen tidak ditemukan!');
            }
        } catch (error) {
            console.error('Error saat mengambil dokumen:', error);
        }
    };

    const handleEditLaporan = (event) => {
        const { name, value } = event.target;
        setLaporan(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = doc(db, 'laporan', id);
            await updateDoc(docRef, laporan);
            console.log('Dokumen berhasil diupdate dengan ID:', id);
            navigasi('/admin');
        } catch (error) {
            console.error('Error saat mengupdate dokumen:', error);
        }
    };

    return (
        <React.Fragment>
            {/* Container 1 */}
            <div className="container-xx1 bg-light" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container d-flex flex-column justify-content-center align-items-center text-white">
                    <div className="text-center">
                        <h3 className="text-2xl mb-4">Form Edit Laporan</h3>
                        <p>Kebutuhan Rekontruksi Akibat Bencana Alam</p>
                    </div>
                </div>
            </div>
            {/* Container 2 */}
            <div className="container d-flex justify-content-center my-5">
                <div className="col-md-5 data">
                    <h2 className="text-center">Edit Data Laporan</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nama" className="form-label">Nama Lengkap</label>
                            <input type="text" className="form-control" id="nama" name="nama" value={laporan.nama} onChange={handleEditLaporan} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={laporan.email} onChange={handleEditLaporan} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jenis_bencana" className="form-label">Jenis Bencana</label>
                            <select className="form-select" id="jenis_bencana" name="jenis_bencana" value={laporan.jenis_bencana} onChange={handleEditLaporan} required>
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
                            <select className="form-select" id="jenis_kerusakan" name="jenis_kerusakan" value={laporan.jenis_kerusakan} onChange={handleEditLaporan} required>
                                <option disabled value="">Pilih jenis kerusakan...</option>
                                <option value="Ringan">Ringan</option>
                                <option value="Sedang">Sedang</option>
                                <option value="Berat">Berat</option>
                                <option value="Parah">Parah</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jumlah_korban" className="form-label">Jumlah Korban</label>
                            <input type="number" className="form-control" id="jumlah_korban" name="jumlah_korban" value={laporan.jumlah_korban} onChange={handleEditLaporan} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jumlah_kerusakan" className="form-label">Jumlah Kerusakan Bangunan</label>
                            <input type="number" className="form-control" id="jumlah_kerusakan" name="jumlah_kerusakan" value={laporan.jumlah_kerusakan} onChange={handleEditLaporan} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="alamat" className="form-label">Alamat Terjadi Bencana</label>
                            <input type="text" className="form-control" id="alamat" name="alamat" value={laporan.alamat} onChange={handleEditLaporan} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Simpan</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EditLaporan;