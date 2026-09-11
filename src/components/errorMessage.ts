function errorMessage(
  aE: HTMLElement,
  oE: HTMLElement,
  aC: string,
  oC: string,
) {
  //for deposit - general
  const test = () => console.log("Working");
  if (aE && oE) {
    aE.style.border = `2px solid ${aC}`;
    aE.style.outline = "none";
    oE.style.border = `2px solid ${oC}`;
    oE.style.outline = `none`;
    return;
  } else if (aE && !oE) {
    //for withdrawal
    aE.style.border = `2px solid ${aC}`;
    aE.style.outline = "none";
  } else {
    test();
  }
}

export default errorMessage
