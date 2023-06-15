import API_ENDPOINT from '../globals/api-endpoint';

class RekomendasiDbSource {
  static async detailRekomendasi(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_REKOMENDASI(id));
    return response.json();
  }
}

export default RekomendasiDbSource;
