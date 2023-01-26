const labelInputv = document.querySelector("#labelValue");
const form = document.querySelector("#form");
const inputType = document.querySelector("#inputType");

labelInputv.addEventListener("keyup", (event) => {
  const keyPressed = event.key;
  //   console.log(keyPressed);
  if (keyPressed === "Enter") {
    const type = inputType.value;
    const label = labelInputv.value;

    const labelInput = document.createElement("label");
    const div = document.createElement("div");
    const input = document.createElement("input");

    labelInput.innerHTML = label;
    input.type = type;
    input.classList.add("form-control");
    labelInput.classList.add("form-label");
    div.classList.add("mb-3");

    if (type != "submit") {
      div.append(labelInput);
    }

    if (type == "submit") {
      input.classList.add("btn", "btn-primary", "w-50");
      input.value = label;
    }
    div.append(input);
    form.append(div);
    console.log(type, label);
  }
});
