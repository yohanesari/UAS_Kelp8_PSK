import { createStore } from 'redux';

const initialState = {
    needsByDisasterCategory: [
        {
            category: "Banjir",
            needs: [
                "Pembangunan tanggul dan sistem pengendalian banjir.",
                "Pembangunan saluran air dan drainase yang efektif.",
                "Pemulihan infrastruktur rusak seperti jembatan dan jalan raya."
            ]
        },
        {
            category: "Gempa",
            needs: [
                "Rehabilitasi bangunan dan struktur yang rusak.",
                "Pembangunan kembali fasilitas publik seperti rumah sakit dan sekolah.",
                "Pembangunan sistem peringatan dini gempa bumi."
            ]
        },
        {
            category: "Tsunami",
            needs: [
                "Pembangunan shelter dan perumahan tangguh terhadap tsunami.",
                "Peningkatan kapasitas masyarakat dalam merespon tsunami.",
                "Pembangunan sistem peringatan dini tsunami yang responsif."
            ]
        },
        {
            category: "Letusan Gunung",
            needs: [
                "Evakuasi dan pengungsian yang aman bagi penduduk terdampak.",
                "Pembersihan dan rehabilitasi lahar dingin dan material vulkanik.",
                "Pembangunan infrastruktur kritis seperti jalan evakuasi."
            ]
        },
        {
            category: "Tanah Longsor",
            needs: [
                "Revegetasi dan pemulihan lingkungan agar stabil terhadap tanah longsor.",
                "Pemetaan dan mitigasi potensi bahaya tanah longsor.",
                "Pembangunan jaringan peringatan dini dan sistem peringatan awal."
            ]
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    return state;
};

const store = createStore(rootReducer);

export default store;
