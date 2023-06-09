const Home = {
  async render() {
    return `
        <div>
            <img src="./images/banner.png" class="img-fluid" alt="banner">
        </div>
        <main id="mainContent">
            <section class="about">
                <h3 class="text-center mt-3">Tentang Aplikasi</h3>
                    <div class="container p-4 rounded" style="background-color: #D9D9D9;">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo vel libero dolores aperiam ex quasi commodi,
                        recusandae voluptates! Rem, ab minima deserunt dolorem ipsa neque et voluptate optio harum omnis! Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Officiis libero dignissimos minus doloribus cupiditate dolores
                        minima soluta quisquam hic earum quibusdam accusamus ipsam laboriosam quaerat assumenda laudantium, veritatis
                        obcaecati ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati laudantium pariatur numquam
                        debitis id minima, ea architecto aliquam culpa expedita ipsa fugiat nulla veniam temporibus itaque sapiente
                        dolores perferendis? Quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tenetur. Maiores,
                        distinctio. Deserunt at ex molestiae, perspiciatis rem blanditiis incidunt dolorem, soluta delectus tempora
                        amet
                        sunt doloremque suscipit dolores reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                        unde
                        fugit voluptate delectus illum esse cumque, debitis odit nostrum aliquam ab eligendi fuga in, mollitia sunt
                        nisi,
                        provident et doloribus.</p>
                    </div>
            </section>
        </main>
      `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Home;
