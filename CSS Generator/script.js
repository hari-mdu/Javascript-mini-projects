document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const allBorder = document.getElementById("all");
  const allValue = document.getElementById("all_value");
  const code = document.getElementById("code");
  const btnCopy = document.getElementById("btnCopy");
  const borStyle = document.getElementById("borStyle");

  var all_radius = 10;
  var codeText = "";
  var borStyleValue = "solid";

  function UpdateValue() {
    all_radius = this.value;
    if (typeof all_radius === "undefined") {
      all_radius = 0;
    }
    allValue.innerText = all_radius + "px";

    codeText = `
       border-radius : ${all_radius}px;
       border-style : ${borStyleValue};
       `;``
    code.value = codeText;

    container.style.cssText = codeText;
  }

  allBorder.addEventListener("change", UpdateValue);
  allBorder.addEventListener("mousemove", UpdateValue);
  btnCopy.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("Code Copied!!");
  });

  UpdateValue();

  borStyle.addEventListener("change", function () {
    borStyleValue = this.value;
    UpdateValue();
  });
});
