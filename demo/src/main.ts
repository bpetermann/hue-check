import { contrastColors, contrastRatio, isRatioOk } from 'hue-check';
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

  <div id="wcag">
    <fieldset>
      <legend>WCAG level:</legend>
      <div>
        <input type="radio" id="AAA" name="wcag" checked />
        <label for="AAA">AAA</label>
      </div>
      <div>
        <input type="radio" id="AA" name="wcag" />
        <label for="AA">AA</label>
      </div>
    </fieldset>
 

    <fieldset>
      <legend>Font size:</legend>
      <div>
        <input type="radio" id="small" name="size" checked />
        <label for="small">Small</label>
      </div>
      <div>
        <input type="radio" id="large" name="size" />
        <label for="large">Large</label>
      </div>
    </fieldset>
  </div>
 </div>

  <div class="card">
    <label for="input1">Enter Color 1:</label>
    <input type="text" id="input1" name="input1" placeholder="Color value" />

    <label for="input2">Enter Color 2:</label>
    <input type="text" id="input2" name="input2" placeholder="Color value" />

    <button id="counter" type="button">Check Ratio</button>
  </div>

  <h2 id="result"></h2>
</div>

`;

const input1 = document.querySelector<HTMLInputElement>('#input1')!;
const input2 = document.querySelector<HTMLInputElement>('#input2')!;
const button = document.querySelector<HTMLButtonElement>('#counter')!;
const result = document.querySelector<HTMLParagraphElement>('#result')!;
const AAAlevel = document.querySelector<HTMLInputElement>('#AAA')!;
const smallSize = document.querySelector<HTMLInputElement>('#small')!;

const randomColor = (colors: string[]): string =>
  colors[Math.floor(Math.random() * colors.length)] ?? '';

const validResult = (ratio: number, wcag: string, isOk?: boolean): string =>
  `The contrast ratio is ${ratio.toFixed(2)} and ${
    isOk ? 'meets' : 'does not meet'
  } the requirements of WCAG level ${wcag}.`;

const invalidResult = (): string =>
  'Invalid colors provided. Please enter valid color values.';

const calculateContrast = (color1: string, color2: string): string => {
  const ratio = contrastRatio(color1, color2);
  const wcag = AAAlevel.checked ? 'AAA' : 'AA';
  const size = smallSize.checked ? '' : '18';
  const isOk = isRatioOk(color1, color2, wcag, size);

  return ratio !== undefined ? validResult(ratio, wcag, isOk) : invalidResult();
};

const handleColorInput = (value: string, element: HTMLInputElement): void => {
  const colors = contrastColors(value);

  if (!colors.length) {
    element.style.color = '';
    element.style.backgroundColor = '';
    return;
  }

  element.style.color = value;
  element.style.backgroundColor = randomColor(colors);
};
input1.addEventListener('change', (event) =>
  handleColorInput(
    (event.target as HTMLInputElement).value.toLowerCase(),
    input1
  )
);

input2.addEventListener('change', (event) =>
  handleColorInput(
    (event.target as HTMLInputElement).value.toLowerCase(),
    input2
  )
);

button.addEventListener('click', () => {
  const color1 = input1.value.trim();
  const color2 = input2.value.trim();

  if (!color1 || !color2) {
    result.textContent = invalidResult();
    return;
  }

  result.textContent = calculateContrast(color1, color2);
});
