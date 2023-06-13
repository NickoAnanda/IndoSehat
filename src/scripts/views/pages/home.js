import ArtikelDbSource from '../../data/artikeldb-source';
import { createArtikelItemTemplate } from '../templates/mytemplate';

const Home = {
  async render() {
    return `
        <div class="shadow-lg">
          <img src="./images/banner.png" class="img-fluid" alt="banner">
        </div>
        <main id="mainContent">
            <section class="about">
                <h3 class="text-center mt-3">Tentang Aplikasi</h3>
                <div class="container p-4 rounded" style="background-color: #D9D9D9;">
                <b>IndoSehat</b> merupakan sebuah website yang menyediakan sebuah fitur untuk mengecek <b>Berat Badan Ideal Kamu</b> hal ini menjadi sangat penting karena dengan BMI yang baik maka akan mendukung kualitas kesehatan yang baik pula.</p>
                <p> Selain itu di IndoSehat ini juga akan memberikanmu update-update artikel seputar kesehatan baik itu sumber nutrisi yang baik untuk tubuh, pola makan yang baik, pentingnya olahraga dan artikel lainnya seputar kesehatan.</p>
                <p class="text-end" >Yuk cek berat badan kamu <a class="btn btn-primary" href="#/timbang" role="button">&#10084;&#65039; Timbang</a></p>
                </div>
            </section>


            <section>
              <article>
                <h3 class="text-center mt-3">Berita Kesehatan</h3>    
                <hr class="ms-5 me-5">  
              </article>
              <div id="mainContentArtikel" class="container-xxl responsivecard">
              </div>
            </section>
          </main>
      `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const articles = await ArtikelDbSource.homeArtikel();
    const articlesContainer = document.querySelector('#mainContentArtikel');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArtikelItemTemplate(article);
    });
  },
};

export default Home;
