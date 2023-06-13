import API_ENDPOINT from '../globals/api-endpoint';

class ArtikelDbSource {
  static async homeArtikel() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailArtikel(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_ARTIKEL(id));
    return response.json();
  }
}

export default ArtikelDbSource;
