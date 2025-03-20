const buttons = document.querySelectorAll(".btn");
const toastContainer = document.getElementById("toast__container");

// toast notification icon and message

function newToast({ iconType, iconName, message }) {
  return `<i class="${iconType} ${iconName}"></i> ${message}`;
}

// create and display toast notification

function showToast({ button }) {
  const toast = document.createElement("div");
  let toastContent = "";
  toast.classList.add("toast");

  if (button === "success") {
    toastContent = newToast({
      iconType: "fa-solid",
      iconName: "fa-circle-check",
      message: "Successfully Submitted",
    });
    toast.classList.add("success_toast");
  } else if (button === "error") {
    toastContent = newToast({
      iconType: "fa-solid",
      iconName: "fa-circle-xmark",
      message: "Check Again",
    });
    toast.classList.add("error_toast");
  } else if (button === "invalid") {
    toastContent = newToast({
      iconType: "fa-solid",
      iconName: "fa-circle-exclamation",
      message: "Invalid Input, Check Again",
    });
    toast.classList.add("invalid_toast");
  } else {
    toastContent = newToast({
      iconType: "fa-solid",
      iconName: "fa-circle-question",
      message: "Uknown",
    });
  }

  toast.innerHTML = toastContent;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast({ button: button.id });
    console.log(button.id);
  });
});
