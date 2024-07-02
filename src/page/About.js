import React, { useState } from "react";
import bioYohanes from '../image/bio_yohanes.jpg';
import bioVito from '../image/bio_vito.jpeg';
import bioFahdiarsyah from '../image/bio_diar.jpg';
import backgroundImage from '../image/about_fix.png';
import '../components/style.css';

const About = () => {
  const [members, setMembers] = useState([
    {
      name: 'Yohanes Diyan Hariawan',
      id: 'A11.2021.13235',
      university: 'Universitas Dian Nuswantoro',
      image: bioYohanes,
      job: 'Front End Developer',
    },
    {
      name: 'Vito Zharfan Syarif Prayogo',
      id: 'A11.2021.13602',
      university: 'Universitas Dian Nuswantoro',
      image: bioVito,
      job: 'UI/UX Designer',
    },
    {
      name: 'Fahdiarsyah Hilmy Hidananto',
      id: 'A11.2021.13730',
      university: 'Universitas Dian Nuswantoro',
      image: bioFahdiarsyah,
      job: 'Back End Developer',
    },
  ]);

  // Import stylesheet for Google Fonts
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Nunito&display=swap';
  document.head.appendChild(link);

  return (
    <React.Fragment>
      {/* Container 1 */}
      <div className="container-xx1 bg-light" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container d-flex flex-column justify-content-center align-items-center text-white">
          <div className="text-center">
            <h3 className="text-2xl mb-4">About Us</h3>
            <p>Kelompok 8 <br />Kebutuhan Rekontruksi Akibat Bencana Alam</p>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container my-5">
        <div className="row">
          {members.map((member, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card shadow-lg">
                <img src={member.image} className="card-img-top" alt={member.name} style={{ maxHeight: '400px' }} />
                <div className="card-body p-4">
                  <h5 className="card-text">{member.name}</h5>
                  <p className="card-text">{member.id}</p>
                  <p className="card-text"><b>{member.job}</b></p>
                  <p className="card-text">{member.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
