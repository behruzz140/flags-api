const item = document.querySelector(".item")



const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btn.classList.toggle("light_btn");
});



const flags = document.querySelector(".flags1");
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
  const data = await randerUrl("flags1");
  products.innerHTML = data
    ?.map(
      (item) =>
        `
        <div class="boxxx3">
       <div class="boxx3">
       <div class="imgss">
       <img class="" src="${item.img}" alt="">
       </div>
      <div>
      <div class="flex3">
      <h1 class="box_title3">${item.name}</h1>
      <p class="box_item3">${item.NativeName}</p>
      <p class="box_item3">${item.Population}</p>
      <p class="box_item3">${item.Region}</p>
      <p class="box_item3">${item.Subregion}</p>
      <p class="box_item3">${item.Capital}</p>
      </div>
      <div clas="flexx3">
      <p class="box_item3">${item.TopLevelDomain}</p>
      <p class="box_item3">${item.Currencies}</p>
      <p class="box_item3">${item.Languages}</p>
      </div>

      </div>
      </div>
        </div>
        `
    )
    .join("");
};
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
