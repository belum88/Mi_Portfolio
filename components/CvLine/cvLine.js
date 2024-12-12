import "./cvLine.css";

export const cvLine = (line) => `
<span class="dates">
    <p>${line.date}</p>
</span>
<span class="fields">
    <h3>${line.field}</h3>
    <h4>${line.where}</h4>
    <p>${line.description}</p>
</span>
`;