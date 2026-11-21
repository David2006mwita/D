document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get customer information
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let fish = document.getElementById("fish").value;
    let quantity = Number(document.getElementById("qty").value);
    let orderType = document.getElementById("order-type").value;
    let address = document.getElementById("address").value;
    let instruction = document.getElementById("instruction").value;

    // Calculate the total price
    let price = fish === "tilapia" ? 80 : 100;
    let total = price * quantity;

    // Get friendly fish name
    let fishName = fish === "tilapia" ? "Fried Tilapia" : "Fried Nile Perch";

    // Display the order summary
    document.getElementById("summary-name").textContent = "Name: " + name;

    document.getElementById("summary-phone").textContent = "Phone: " + phone;

    document.getElementById("summary-fish").textContent = "Fish: " + fishName;

    document.getElementById("summary-quantity").textContent =
      "Quantity: " + quantity;

    document.getElementById("summary-type").textContent =
      "Order Type: " + orderType;

    document.getElementById("summary-total").textContent =
      "Total: KSh " + total;

    // Show the summary
    document.getElementById("order-summary").style.display = "block";

    // Set up WhatsApp confirmation
    document.getElementById("confirm-whatsapp").onclick = function () {
      // Replace this with your business WhatsApp number
      let businessWhatsApp = "254708245411";

      // Create the order message
      let message =
        "NEW FISH ORDER\n\n" +
        "Name: " +
        name +
        "\n" +
        "Customer Phone: " +
        phone +
        "\n" +
        "Fish: " +
        fishName +
        "\n" +
        "Quantity: " +
        quantity +
        "\n" +
        "Order Type: " +
        orderType +
        "\n" +
        "Address: " +
        address +
        "\n" +
        "Instructions: " +
        instruction +
        "\n" +
        "Total: KSh " +
        total;

      // Open WhatsApp
      let whatsappURL =
        "https://wa.me/" +
        businessWhatsApp +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    };
  });
