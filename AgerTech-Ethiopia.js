$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    let output = "";
    data.forEach((product) => {
      output += `
        <div class="product-card" style="border:1px solid #ddd; padding:1rem; margin:1rem;">
          <i class="fa ${product.icon}" style="font-size:2rem;"></i>
          <h2>${product.name}</h2>
          <p>${product.desc}</p>
          <strong>${product.price}</strong><br>
          <button onclick="alert('Added ${product.name} to cart!')">Add to Cart</button>
        </div>
      `;
    });
    $("#product-list").html(output);
  });
});
