/* eslint-disable radix */
function timbangBMI() {
  // eslint-disable-next-line no-undef, prefer-const
  let tinggiBadan = parseInt(document.querySelector('#inputTinggiBadan').value);
  // eslint-disable-next-line no-undef, prefer-const
  let beratBadan = parseInt(document.querySelector('#inputBeratBadan').value);
  // eslint-disable-next-line prefer-const
  let hasil = document.querySelector('#hasil');

  // Menghitung BMI
  // eslint-disable-next-line prefer-const
  let BMI = (beratBadan / ((tinggiBadan * tinggiBadan) / 10000));
  const KonversiBMI = Math.round(BMI);

  // Kategori
  // eslint-disable-next-line no-lonely-if, curly
  if (BMI < 18.5) hasil.innerHTML = `<div style="color: white;"><p>IMT kamu : ${KonversiBMI} termasuk dalam kategori <b>Underweight</b></p>
  <p>Yuk kunjungi tautan dibawah untuk mengetahui info lebih lengkap dan rekomendasi untuk kondisimu.</p>
  <p><a href="/#/detail-rekomendasi/1" class="link-info">Tautan</a></p></div>`;
  // eslint-disable-next-line curly
  else if (BMI >= 18.5 && BMI <= 24.9) hasil.innerHTML = `<div style="color: white;"><p>IMT kamu : ${KonversiBMI} termasuk dalam kategori <b>Normal</b></p>
  <p>Yuk kunjungi tautan dibawah untuk mengetahui info lebih lengkap dan rekomendasi untuk kondisimu.</p>
  <p><a href="/#/detail-rekomendasi/2" class="link-info">Tautan</a></p></div>`;
  // eslint-disable-next-line curly
  else if (BMI >= 25 && BMI <= 29.9) hasil.innerHTML = `<div style="color: white;"><p>IMT kamu : ${KonversiBMI} termasuk dalam kategori <b>Overweight</b></p>
  <p>Yuk kunjungi tautan dibawah untuk mengetahui info lebih lengkap dan rekomendasi untuk kondisimu.</p>
  <p><a href="/#/detail-rekomendasi/3" class="link-info">Tautan</a></p></div>`;
  // eslint-disable-next-line curly
  else if (BMI > 30) hasil.innerHTML = `<div style="color: white;"><p>IMT kamu : ${KonversiBMI} termasuk dalam kategori <b>Obesitas</b></p>
  <p>Yuk kunjungi tautan dibawah untuk mengetahui info lebih lengkap dan rekomendasi untuk kondisimu.</p>
  <p><a href="/#/detail-rekomendasi/4" class="link-info">Tautan</a></p></div>`;
  else hasil.innerHTML = '';
}

const bmiButton = () => {
  // eslint-disable-next-line prefer-const
  let cek = document.querySelector('#cek');
  cek.addEventListener('click', timbangBMI);
};

export { timbangBMI, bmiButton };
