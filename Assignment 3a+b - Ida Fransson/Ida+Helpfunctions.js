charRemove("l", "lillemor");
function charRemove(char, text) {
  text = text.replaceAll(char, "");
  console.log(text);
}
