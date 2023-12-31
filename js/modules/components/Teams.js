import { teamsData } from '../../../utils/dataUtils.js';

const Teams = () => {
  const teamList = document.getElementById('teamList');

  teamsData.forEach(element => {
    const { id, title, slug, subtitle, description, image } = element;
    teamList.innerHTML += `
    <li
      class="card"
      key="${id}"
    >
      <img
        src="${image}"
        alt="${title}"
        class="img img--card"
      >
      <div class="card__body d-flex f-direction-column gap-5xs">
        <h3 class="card__title">${title}</h3>
        <h4 class="card__subtitle">${subtitle}</h4>
        <p class="card__text">${description}</p>
        <a href="./teams/${slug}" class="button">Clases</a>
      </div>
    </li>
  `;
  });
};

export default Teams;
