const flags = document.querySelector(".flags");
const products = document.querySelector(".products");
const siteUrl = "http://localhost:3000";

const randerUrl = async (url) => {
  try {
    const res = await fetch(`${siteUrl}/${url}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const saleFlags = async () => {
  const data = await randerUrl("flags");
  products.innerHTML = data
    ?.map(
      (item) =>
        `
        <div class="boxx">
       <div class="boxx1">
       <div class="imgss">
       <a href="http://127.0.0.1:5500/data.html?id='${item.id}'"><img class="" src="${item.img}" alt="">
       </a>
       </div>
      <div>
      <h1 class="box_title">${item.name}</h1>
      <p class="box_item">${item.population}</p>
      <p class="box_item">${item.region}</p>
      <p class="box_item2">${item.capital}</p>
      </div>
      </div>
        </div>
        `
    )
    .join("");
};

// http://127.0.0.1:5500/data.html?id=%271%27
products.addEventListener("click", (e) => {
  const url = "http://127.0.0.1:5500/data.html?'";
  let id;
  if (e.target.className == "el") {
    id = e.target.id;
  }
  const params = new URLSearchParams({ id });
  console.log(params);
  console.log(url + params);
});
saleFlags();

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btn.classList.toggle("light_btn");
});
