const playAgainBtnEl = document.getElementById("playAgainBtn");
const wrapperEl = document.getElementById("wrapper");
const highScoreListContainerEl = document.getElementById(
	"highscore-list-container"
);
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

function getRankIcon(rank) {
	const rankIcons = {
		1: { icon: "🥇", scale: 2 },
		2: { icon: "🥈", scale: 1.5 },
		3: { icon: "🥉", scale: 1 },
	};

	const rankIcon = rankIcons[rank];

	if (rankIcon) {
		return `<span class="emoji" style="scale:${rankIcon.scale}">${rankIcon.icon}</span>`;
	}

	return rank;
}

for (let [i, score] of highScores.entries()) {
	let itemClass = [];

	if (score.mostRecent) {
		itemClass.push("highscore-list-container--emphasis");
		itemClass.push("animate__animated");
		itemClass.push("animate__tada");
	}

	highScoreListContainerEl.innerHTML += `
  <li class="${itemClass.join(" ")}">
    <div>${getRankIcon(i + 1)}</div>
    <div>${score.name}</div>
    <div>${score.score}</div>
  </li>
  `;
}

//logo during game
const logoInGame = document.createElement("div");
logoInGame.classList.add("logo-in-game");
logoInGame.innerHTML = `<img src="./assets/SAS-Logotype-White-RGB.png" alt="hje" class="logo-game"/>`;
wrapperEl.append(logoInGame);

playAgainBtnEl.addEventListener("click", () => window.location.assign("/"));
