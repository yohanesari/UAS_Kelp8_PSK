import React from 'react';
import logoImage from '../image/logo.png';
import '../components/style.css';

const Footer = () => {
    return (
        <footer style={{ boxShadow: '0px -5px 15px -5px rgba(0,0,0,0.45)' }}>
            <div className="container"><br />
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center vertical-line" >
                        <img src={logoImage} alt="" height="100" width="100" />
                        <h4 className="text-xl" style={{ textAlign: 'center' }}>Website Kebutuhan Rekonstruksi Akibat Bencana Alam</h4>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center contact-us-footer mt-4 mt-md-0 vertical-line">
                        <h3 className="text-xl font-weight-bold mb-4">Contact Us</h3>
                        <div className="px-4">
                            <p className="mb-3"><i class="mx-3 bi bi-geo-alt"></i> Jl. Pahlawan 123, Semarang , Jawa Tengah
                            </p>
                            <p className="mb-3"><i class="mx-3 bi bi-envelope"></i> rekonstruksi@gmail.com
                            </p>
                            <p className="mb-3"><i class="mx-3 bi bi-telephone"></i> 021-134xxxxx
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center berlangganan-footer mt-4 mt-md-0">
                        <h3 className="text-xl font-weight-bold mb-4">Berlangganan</h3>
                        <div className="px-4">
                            <p className="mb-3">Dapatkan kabar terbaru mengenai rekonstruksi bencana alam</p>
                            <div className="input-email d-flex">
                                <input type="email" htmlFor="email" name="email" className="form-control mr-2" placeholder="Input Your E-mail" />
                                <button type="submit" className="btn btn-success btn-submit" style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div><br />
            </div>
        </footer>
    );
}

export default Footer;
