import UrlParser from '../../routes/url-parser';
import RekomendasiDbSource from '../../data/rekomendasidb-source';
import { createRekomendasiDetailTemplate } from '../templates/mytemplate';

const DetailRekomendasi = {
  async render() {
    return `
            <div id="detailrekomendasi">
              
            </div>
            <p class="text-center" ><a class="btn btn-danger mt-none" href="#/timbang" role="button">Kembali</a></p>
          `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recommendation = await RekomendasiDbSource.detailRekomendasi(url.id);
    const recommendationContainer = document.querySelector('#detailrekomendasi');
    recommendationContainer.innerHTML = createRekomendasiDetailTemplate(recommendation);
  },
};

export default DetailRekomendasi;
