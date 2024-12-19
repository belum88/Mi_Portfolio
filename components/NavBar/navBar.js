import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeImg = document.getElementById("themeImg");
  const forecastP = document.querySelector("#weather");
  if (document.body.classList.contains("light")) {
    themeImg.src = "/moon.png";
    themeImg.style.filter = "none";
    forecastP.innerText =
      "With the new moon, expect especially dark skies perfect for stargazing. Cool, calm, and crisp conditions will prevail—bundle up if heading out!";
  } else {
    themeImg.src = "/sun.png";
    themeImg.style.filter = "invert(70%)";
    forecastP.innerText =
      "Clear skies and plenty of sunshine dominate the day. Warm and pleasant—perfect for outdoor plans!";
  }
};

export const getDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const fecha = new Intl.DateTimeFormat("en-GB", options).format(date);
  const dateP = document.querySelector("#dateP");
  dateP.innerText = fecha;
};

export const Navbar = () => `
<nav>
  <div class="top-nav">
    <div class="title">
      <p id="dateP"></p>
      <h1>abel fernández (belum)</h1>
      <p id="position">Full Stack Developer</p>
    </div>
    <div class="forecast">
      <p>Change</p>
      <div class="forecast-information">
        
        <button id="themeBtn">
          <img src="/moon.png" alt="Moon " id="themeImg">
        </button>
      </div>
    </div>
  </div>
  <ul>
    <li>
        <a href="#home" id="homelink">Home</a>
    </li>
    <li>
        <a href="#projects" id="projectslink">Projects</a>
    </li>
  </ul>
</nav>
`;