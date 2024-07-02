import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import '../components/style.css';
import { Link } from "react-router-dom";

const Admin = () => {

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito&display=swap';
    document.head.appendChild(link);


    const [laporan, setLaporan] = useState([]);

    useEffect(() => {
        fetchLaporan();
    }, []);

    const fetchLaporan = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'laporan'));
            const dataLaporan = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLaporan(dataLaporan);
        } catch (error) {
            console.error("Error saat mengambil dokumen: ", error);
        }
    };

    const handleDeleteLaporan = async (id) => {
        try {
            if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
                await deleteDoc(doc(db, 'laporan', id));
                fetchLaporan();
            }
        } catch (error) {
            console.error("Error saat menghapus dokumen: ", error);
        }
    };

    return (
        <React.Fragment>
            {/* Container 1 */}
            <div className="container-xx1 py-5 mb-5">
                <div className="container my-5 px-4">
                    <div className="row align-items-center g-5">
                        <h2 className="text-center border-bottom border-3 d-flex justify-content-center mx-auto" style={{ maxWidth: '400px' }}>Kumpulan Data Laporan</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Jenis Bencana</th>
                                        <th>Jenis Kerusakan</th>
                                        <th>Jumlah Korban</th>
                                        <th>Jumlah Kerusakan Bangunan</th>
                                        <th>Alamat</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {laporan.map((laporan) => (
                                        <tr key={laporan.id}>
                                            <td>{laporan.nama}</td>
                                            <td>{laporan.email}</td>
                                            <td>{laporan.jenis_bencana}</td>
                                            <td>{laporan.jenis_kerusakan}</td>
                                            <td>{laporan.jumlah_korban}</td>
                                            <td>{laporan.jumlah_kerusakan}</td>
                                            <td>{laporan.alamat}</td>
                                            <td className="d-flex align-items-center">
                                                <Link to={`/editlaporan/${laporan.id}`} className="btn btn-primary me-2">Edit</Link>
                                                <span className="border-end border-2 mx-2"></span>
                                                <button onClick={() => handleDeleteLaporan(laporan.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 2 */}
        </React.Fragment>
    );
}

export default Admin;