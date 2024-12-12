import "./resume.css";
import { jobs } from "../../data/jobs";
import { courses } from "../../data/courses";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/divider";
import { cvLine } from "../../components/CvLine/cvLine";

export const Resume = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
      <section class="resume">
        <h1>Resume</h1>
        <h2 class="titleResume">Full CV can be found <a class="hereLink" target="_blank" href="../public/cv_lucia_inesta.pdf">here</a></h2>
        ${Divider()}
        <div class="columns">
        <h2>Education</h2>
        <ul id="educationList">
        </ul>
        </div>
        ${Divider()}
        <div class="columns">
        <h2>Employment</h2>
        <ul id="employmentList">
        </ul>
        </div>
      </section>`;

  const ulEducation = document.querySelector("#educationList");
  const ulEmployment = document.querySelector("#employmentList");

  for (const course of courses) {
    const li = document.createElement("li");

    li.className = "line";
    li.innerHTML = cvLine(course);

    ulEducation.appendChild(li);
  }

  for (const job of jobs) {
    const li = document.createElement("li");

    li.innerHTML = cvLine(job);
    li.className = "line";

    ulEmployment.appendChild(li);
  }
};