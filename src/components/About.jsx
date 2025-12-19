import React from 'react';
import '../styles/AboutSection.css';
import morfemImage from '../assets/cikal jeep.JPG';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2>CIKAL BAKAl CYCLEGROOVE</h2>
      <div className="about-content">
        <p>
          CycleGroove lahir bukan dari ruang rapat ber-AC atau konsep yang terlalu rapi. Ia tumbuh dari obrolan liar di sebuah malam, saat sekelompok teman nongkrong tanpa agenda pasti. Kopi dingin, rokok tinggal abu, dan sepeda yang disandarkan sembarangan jadi saksi awal mula semuanya.

Malam itu, obrolan mengalir dari hal receh sampai keresahan yang sama: Semarang punya banyak pesepeda dengan gaya, karakter, dan cerita masing-masing, tapi belum ada ruang yang benar-benar menyatukan kultur tersebut. Bukan sekadar gowes rame-rame, tapi wadah yang merayakan sepeda sebagai bagian dari gaya hidup, musik, seni, dan ekspresi jalanan.

Kami sepakat bahwa sepeda bukan cuma alat transportasi atau alat olahraga. Sepeda adalah statement. Ada yang datang dari fixed gear, road bike, BMX, sampai sepeda tua yang karatnya justru jadi identitas. Semua punya groove masing-masing. Dari situlah ide itu muncul—sebuah komunitas dan rangkaian event yang bukan hanya soal kayuhan, tapi juga irama.

Diskusi makin dalam. Tentang event yang digabung dengan musik, tentang ride malam yang berakhir di gig kecil, tentang kolaborasi dengan seniman lokal, tentang jalanan Semarang yang sebenarnya punya cerita jika dilihat dari sadel sepeda.
        </p>
        <p>
          Kami ingin menciptakan ruang aman untuk berkumpul, bertukar ide, dan saling menginspirasi tanpa sekat gengsi atau kasta sepeda.

Nama CycleGroove akhirnya muncul sebagai representasi dari semua itu. “Cycle” sebagai simbol pergerakan, kebebasan, dan roda yang terus berputar. “Groove” sebagai jiwa—ritme, rasa, dan getaran yang menyatukan semua perbedaan. CycleGroove bukan komunitas yang kaku, tapi ekosistem yang hidup, tumbuh, dan terus berevolusi.

Dari obrolan malam tanpa rencana, CycleGroove kemudian pelan-pelan mengambil bentuk. Dari ride kecil, event sederhana, sampai kolaborasi lintas skena. Semua berangkat dari satu keyakinan: budaya sepeda di Semarang layak punya panggungnya sendiri.
        </p>
        <img src={morfemImage} alt="The 1975 Band" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;
