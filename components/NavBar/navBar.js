import "./navBar.css";
import { Button } from "../Button/button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/public/github.jpeg", "GitHub", "https://https://github.com/belum88/")}
${Button(
  "/public/linkedin.jpeg",
  "LinkedIn",
  "www.linkedin.com/in/abelferma/"
)}
</div>
`;