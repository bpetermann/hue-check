import { contrastColors, isRatioOk } from 'hue-check';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <label for="name">Enter Color 1:</label>
        <input type="text" id="input1" name="input1" placeholder="Color value" />
      <label for="name">Enter Color 2:</label>
        <input type="text" id="input2" name="input2" placeholder="Color value"/>
      <button id="counter" type="button">Check Ratio</button>
    </div>
      <h2 id="result"></h2>
  </div>
`;

const input1 = document.querySelector<HTMLInputElement>('#input1')!;
const input2 = document.querySelector<HTMLInputElement>('#input2')!;
const button = document.querySelector<HTMLButtonElement>('#counter')!;
const result = document.querySelector<HTMLParagraphElement>('#result')!;

const randomColor = (colors: string[]) =>
  colors[Math.floor(Math.random() * colors.length)];

const ratioCheckResult = (color1: string, color2: string) =>
  `Ratio is ${isRatioOk(color1, color2) ? 'valid' : 'not valid'}`;

const handleColorInput = (value: string, element: HTMLInputElement) => {
  const colors = contrastColors(value);

  if (!colors.length) return;

  element.style.color = value;
  element.style.backgroundColor = randomColor(colors);
};

input1.addEventListener('change', (event) =>
  handleColorInput((event.target as HTMLInputElement).value, input1)
);

input2.addEventListener('change', (event) =>
  handleColorInput((event.target as HTMLInputElement).value, input2)
);

button.addEventListener(
  'click',
  () => (result.innerHTML = ratioCheckResult(input1.value, input2.value))
);
