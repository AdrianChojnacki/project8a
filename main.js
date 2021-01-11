const spnText = document.querySelector(`.text`);
const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia veniam quae? Earum minus provident quae dicta, doloremque officia dolore, quasi molestiae, saepe ipsa nesciunt! Saepe rerum consequatur quam soluta.";

// Function parameters
let indexText = 0;
const time = 40;

// Function
const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};

const indexTyping = setInterval(addLetter, 40);
