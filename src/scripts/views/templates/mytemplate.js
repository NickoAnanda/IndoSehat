// eslint-disable-next-line no-unused-vars
// import CONFIG from '../../globals/config';

const createArtikelItemTemplate = (articles) => `
<div class="card shadow-lg" style="width: 18rem;">
  <img src="${articles.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${articles.title}</h5>
      <p class="card-text">${articles.briefDescription}</p>
      <a href="/#/detail-artikel/${articles.id}" class="btn btn-primary">Selengkapnya</a>
    </div>
</div>
`;

const createArtikelDetailTemplate = (articles) => `
<div class="card mb-3 ms-5 me-5 mt-5 mb-5 shadow p-3 mb-5 bg-body rounded" style="max-width: 100%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${articles.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${articles.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <!-- <p class="card-text"><small class="text-muted">${articles.createdAt}</small></p> -->
      </div>
    </div>
  </div>
</div>
`;

// eslint-disable-next-line import/prefer-default-export
export { createArtikelItemTemplate, createArtikelDetailTemplate };
