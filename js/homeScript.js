$(function () {
  //Button Toggle /slidedown and slide up function
  $(".moreText1").hide();
  $(".btn2_1").on("click", function (e) {
    // Get btnText for slideup and down function.

    e.preventDefault();
    $(".moreText1").slideToggle("slow", "swing");
  });

  $(".moreText2").hide();
  $(".btn2_2").on("click", function (e) {
    // Get btnText for slideup and down function.

    e.preventDefault();
    $(".moreText2").slideToggle("slow", "swing");
  });

  /* ------------------------------------------Form Validation---------------------------------------------- */

  //Checking if field is empty
  function isRequired(data) {
    let msg = [];
    if (data == "" || data == null) {
      msg.push(false, "Field cannot be empty");
    } else {
      msg.push(true, "Correct");
    }

    return msg;
  }

  function nameValidation(formData) {
    const name = formData;
    const err = [];

    //Checks and accepts only alphabets and 1 space
    let nameReg = /^([a-zA-Z])+(\s?)+([a-zA-Z]){4,}$/gm;

    if (!nameReg.test(name)) {
      err.push(false, "Invalid Name, Please check for spaces");
    } else {
      err.push(true, "Valid");
    }

    return err;
  }

  function emailValidation(formData) {
    const email = formData;
    const err = [];
    //Checks for email
    let emailReg =
      /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,10})\.?([a-z]{2,8})?$/;
    if (!emailReg.test(email)) {
      err.push(false, "Invalid email, Please check for spaces");
    } else {
      err.push(true, "Valid");
    }
    return err;
  }

  $("#contact input[type='submit']").on("click", (e) => {
    e.preventDefault();
    let nameerrors = $(".nerrMsg");
    let emailError = $(".EerrMsg");
    let name = $("#contact input[name='fullName']").val();
    let email = $("#contact input[name='emailId']").val();

    //Check if empty
    if (!isRequired(name)[0]) {
      nameerrors.css({ display: "block" });
      nameerrors.text(isRequired(name)[1]);
    } else {
      nameerrors.css({ display: "none" });
    }

    if (!isRequired(email)[0]) {
      emailError.css({ display: "block" });
      emailError.text(isRequired(email)[1]);
    } else {
      emailError.css({ display: "none" });
    }

    //vaidation
    if (!nameValidation(name)[0]) {
      nameerrors.css({ display: "block" });
      nameerrors.text(nameValidation(name)[1]);
    } else {
      nameerrors.css({ display: "none" });
    }

    if (!emailValidation(email)[0]) {
      emailError.css({ display: "block" });
      emailError.text(emailValidation(email)[1]);
    } else {
      emailError.css({ display: "none" });
    }

    setTimeout(() => {
      nameerrors.css({ display: "none" });
      emailError.css({ display: "none" });
    }, 5000);

    let isValid =
      isRequired(name)[0] &&
      isRequired(email)[0] &&
      nameValidation(name)[0] &&
      emailValidation(email)[0];

    //For further functionality such as API
    if (isValid) {
      return true;
    }
  });
});
