const handleClick = (e) => {
  const target = document.getElementById(e);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
