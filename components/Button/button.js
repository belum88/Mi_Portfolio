import "./button.css";
import { Button } from "./button.js";
export const Button = (icon, text, link) => `
<a href="${link}" target="_blank">
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4>
</button>
</a>
`;