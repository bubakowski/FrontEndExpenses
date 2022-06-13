const bars = document.querySelectorAll(".bar");
const am = document.querySelectorAll(".amount");
let index = 0;

fetch("./data.json")
	.then((resposne) => resposne.json())
	.then((data) => {
		bars.forEach((bar) => {
			bar.style.height = `${data[index].amount}%`;
			am[index].textContent = `$ ${data[index].amount}`;
			index++;
		});
		bars[0].style.height = `${data[0].amount}%`;
	});
const barColor = () => {
	const currentDay = new Date().getDay();
	bars[currentDay - 1].style.background = "hsl(186, 34%, 60%)";
	bars[currentDay - 1].addEventListener("mouseover", () => {
		bars[currentDay - 1].style.background = "hsla(186, 34%, 60%, 0.5)";
	});
	bars[currentDay - 1].addEventListener("mouseout", () => {
		bars[currentDay - 1].style.background = "hsl(186, 34%, 60%)";
	});
};
barColor();

