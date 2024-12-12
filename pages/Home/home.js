import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <article>
        <h2>Tech times: meet the person behind the code</h2>
        <div class="body-article">
          <img src="/computer.png" alt="Computer drawing">
          <div class="personal-information">
            <h3>I'm Marina</h3>
            <span>she/her · /məˈɹiːnə/</span>
            <p>A vocational training and a Master's degree student in <strong>Full Stack Development</strong> based in southern Spain. I’m passionate about music and creating content related to it.</p>
          </div>
        </div>
      </article>
    </section>`;
};