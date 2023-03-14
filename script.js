const { body } = document;

function changeBackground(number) {
  const previousBackground = body.className;
  if (
    previousBackground === "default-background" ||
    previousBackground !== `background-${number}`
  ) {
    body.className = `background-${number}`;
  } else if (previousBackground === `background-${number}`) {
    body.className = "default-background";
  }
}
