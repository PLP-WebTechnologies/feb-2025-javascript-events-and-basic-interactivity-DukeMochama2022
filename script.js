document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('userForm');
  const nameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const togglePassword = document.querySelector('.toggle-password');
  const modal=document.getElementById('modal')


  form.addEventListener('submit', (event) => {
    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Name is required";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    //email verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Invalid Email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    //password validation
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "password must be 8 characters and above";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (!isValid) {
      event.preventDefault();
    } else {
        event.preventDefault()
      modal.style.display='block'
    }
    
    //delays the modal for some seconds before its submitted
    setTimeout(()=>{
        modal.style.display='none'
        form.reset();
    },2000)

  });

  //toggle the password
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "👁️";
  });
});
