// dårlige ord & replacements
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const textElement = document.getElementById('text');
const filterBtn = document.getElementById('filterBtn');
const dialog = document.getElementById('alreadyFiltered');
const closeDialogBtn = document.getElementById('closeDialog');

function containsBadWords(text) {
  for (let wordPair of curseWords) {
    if (text.includes(wordPair.bad)) return true;
  }
  return false;
}

function filterText() {
  let currentText = textElement.textContent;

  if (!containsBadWords(currentText)) {
    dialog.showModal();
    return;
  }

  // erstatter dårlige ord
  curseWords.forEach(wordPair => {
    const regex = new RegExp(wordPair.bad, 'g');
    currentText = currentText.replace(regex, `<span class="good-word">${wordPair.good}</span>`);
  });

  textElement.innerHTML = currentText;
}

filterBtn.addEventListener('click', filterText);

closeDialogBtn.addEventListener('click', () => {
  dialog.close();
});