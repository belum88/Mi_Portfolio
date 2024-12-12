import "./home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Abel Fernández</h1>
    <p>I'm a web developer in training, currently pursuing a higher degree in web development and a master's in full-stack development. I've worked on various web projects, applying the skills and knowledge I've gained. Additionally, I have experience in digital marketing, leading teams and helping increase revenue for key clients. My profile combines both technical development and a strategic vision, allowing me to tackle projects from multiple angles.</p>
    <p>If you want to learn more about me and what I've been working on or get in touch, feel free to explore my website!</p>
    <a href="mailto:abel.fernandez.martinez@gmail.com">Say hi →</a>
    </section>`;
};