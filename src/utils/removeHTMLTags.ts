const removeHTMLTags = (str: string | undefined) => {
  if (str === undefined || str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
};

export default removeHTMLTags;
