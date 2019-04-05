import urls from './urls';
import AuthUtils from '../utils/AuthUtils';

function autenticatedFetch(url, options) {
  return fetch(url, {
    headers: {
      ...((options && options.headers) || {}),
      authorization: `Bearer ${AuthUtils.getToken()}`
    },
    ...options
  });
}

export default {
  categories: {
    getAll: () =>
      autenticatedFetch(urls.categories.getAll().url).then(res => res.json()),
    getDetailes: categoriesId =>
      autenticatedFetch(urls.categories.getDetailes(categoriesId).url).then(
        res => res.json()
      ),
    getPlaylists: categoriesId =>
      autenticatedFetch(urls.categories.getPlaylists(categoriesId).url).then(
        res => res.json()
      )
  }
};
