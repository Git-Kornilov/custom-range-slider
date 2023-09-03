'use strict';

const range = document.getElementById('range');

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// correct position range - middle
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Functionality
range.addEventListener('input', e => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  //   move label
  const range_width = getComputedStyle(e.target).getPropertyValue('width'); // from CSS = 300px
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_width = +range_width.substring(0, range_width.length - 2); // rid px in 300px
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max; // 100
  const min = +e.target.min; // 0

  // calculate position for label - style.left
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  /////////

  label.innerHTML = value;
});
