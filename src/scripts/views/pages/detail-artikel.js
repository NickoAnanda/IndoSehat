import UrlParser from '../../routes/url-parser';
import ArtikelDbSource from '../../data/artikeldb-source';
import { createArtikelDetailTemplate } from '../templates/mytemplate';

const DetailArtikel = {
  async render() {
    return `
          <div id="detailartikel">
            
          </div>
          <p class="text-center" ><a class="btn btn-danger mt-none" href="#/home" role="button">Kembali</a></p>
        `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articles = await ArtikelDbSource.detailArtikel(url.id);
    const articlesContainer = document.querySelector('#detailartikel');
    articlesContainer.innerHTML = createArtikelDetailTemplate(articles);
  },
};

export default DetailArtikel;
