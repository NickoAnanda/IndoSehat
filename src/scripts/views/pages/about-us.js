const AboutUs = {
  async render() {
    return `
    <div class="container-xxl responsivecard mt-5">
    <div class="card shadow m-3" style="width: 230px">
      <img src="./foto/Nicko.jpg" class="card-img-top" alt="Nicko" style="height: 230px;">
      <div class="card-body">
        <h5 class="card-title text-center">Full-Stack Developer</h5>
        <p class="card-text text-center">I Kadek Nicko Ananda</p>
        <p>Email: kdnicko01@gmail.com</p>
        <button class="btn-primary"><a href="mailto:kdnicko01@gmail.com" style="color: white; text-decoration: none;">Kirim Email</a></button>
      </div>
    </div>
    <div class="card shadow m-3" style="width: 230px;">
      <img src="./foto/Ludi.jpg" class="card-img-top" alt="Ludi" style="height: 230px;">
      <div class="card-body">
        <h5 class="card-title text-center">UI/UX Designer</h5>
        <p class="card-text text-center">Ludi Priyadi</p>
        <p>Email: ludipriyadi00@gmail.com</p>
        <button class="btn-primary"><a href="mailto:ludipriyadi00@gmail.com" style="color: white; text-decoration: none;">Kirim Email</a></button>
      </div>
    </div>
    <div class="card shadow m-3" style="width: 230px">
      <img src="./foto/Dila.jpg" class="card-img-top" alt="Dila" style="height: 230px;">
      <div class="card-body">
        <h5 class="card-title text-center">Front-End Developer</h5>
        <p class="card-text text-center">Adila Aprilliani</p>
        <p>Email: adilaapriliani2@gmail.com</p>
        <button class="btn-primary"><a href="mailto:adilaapriliani2@gmail.com" style="color: white; text-decoration: none;">Kirim Email</a></button>
      </div>
    </div>
    <div class="card shadow m-3" style="width: 230px">
      <img src="./foto/Iqbal.jpg" class="card-img-top" alt="Iqbal" style="height: 230px;">
      <div class="card-body">
        <h5 class="card-title text-center">Back-End Developer</h5>
        <p class="card-text text-center">Mohamad Iqbal</p>
        <p>Email: iqbalalgas13@gmail.com</p>
        <button class="btn-primary"><a href="mailto:iqbalalgas13@gmail.com" style="color: white; text-decoration: none;">Kirim Email</a></button>
      </div>
    </div>
        `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
  },
};

export default AboutUs;
