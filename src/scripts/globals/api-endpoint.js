import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/articles`,
  DETAIL_ARTIKEL: (id) => `${CONFIG.BASE_URL}/articles/${id}`,
};

export default API_ENDPOINT;
