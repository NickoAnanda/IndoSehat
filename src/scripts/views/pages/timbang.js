import { timbangBMI } from '../../timbang/timbang-function';

const Timbang = {
  async render() {
    return `
    <main>
    <div class="container-md mt-1">
        <div>
            <img src="../images/timbangBanner.png" style="height: 300px; width: 100%" class="rounded mx-auto d-block" alt="...">
        </div>
        <div id="halamanTimbang">
            <div class="text-center">
                <h2>Timbang</h2>
                <p>Yuk masukkan Usia, Berat Badan, dan Tinggi Badan kamu.</p>
            </div>
            <form class="bg-primary p-5 border border-4 rounded">
                <div class="row mb-1">
                  <label for="inputTinggiBadan" class="col-sm-2 col-form-label" style="color: #ffffff;"><strong>Tinggi Badan (cm) : </strong></label>
                  <div class="col-sm-8">
                    <input type="number" class="form-control" id="inputTinggiBadan" required>
                  </div>
                </div>
                <div class="row mb-1">
                    <label for="inputBeratBadan" class="col-sm-2 col-form-label" style="color: #ffffff;"><strong>Berat Badan (kg) : </strong></label>
                    <div class="col-sm-8">
                      <input type="number" class="form-control" id="inputBeratBadan" required>
                    </div>
                  </div>
                <button id="cek" type="submit" class="btn btn-light" > -- <b>Cek!</b> -- </button>
                <br>
                <div id="hasil" id="cek" class="text-center"></div>
                <br>
                <button type="reset" class="btn btn-danger" ><b>Reset Form</b></button>
            </form>
        </div>
    </div>
</main>
        `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    // eslint-disable-next-line no-shadow
    const cek = document.querySelector('#cek');
    cek.addEventListener('click', timbangBMI);
    timbangBMI();
  },
};

export default Timbang;
