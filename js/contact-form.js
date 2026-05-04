(function () {
  var form = document.getElementById("contact-form");
  var successEl = document.getElementById("form-success");
  if (!form || !successEl) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var keyInput = form.querySelector('[name="access_key"]');
    var key = keyInput ? keyInput.value : "";
    if (!key || key === "YOUR_ACCESS_KEY") {
      successEl.classList.add("is-visible");
      successEl.style.background = "#fef2f2";
      successEl.style.borderColor = "#fca5a5";
      successEl.style.color = "#991b1b";
      successEl.textContent =
        "Add your free Web3Forms access key in contact.html (replace YOUR_ACCESS_KEY) so messages can be emailed to you. Get a key at web3forms.com.";
      successEl.focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    var prevText = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending…";
    }

    var data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        if (result.success) {
          successEl.style.background = "";
          successEl.style.borderColor = "";
          successEl.style.color = "";
          successEl.classList.add("is-visible");
          successEl.textContent =
            "Thanks — your message was sent. I’ll get back to you as soon as possible.";
          form.reset();
          successEl.focus();
        } else {
          throw new Error(result.message || "Something went wrong.");
        }
      })
      .catch(function () {
        successEl.style.background = "#fef2f2";
        successEl.style.borderColor = "#fca5a5";
        successEl.style.color = "#991b1b";
        successEl.classList.add("is-visible");
        successEl.textContent =
          "Could not send right now. Please call or text 703-388-6628 and I’ll help you directly.";
        successEl.focus();
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = prevText;
        }
      });
  });
})();
