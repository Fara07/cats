async function getBreedsAndImagesAndFacts() {
  // Breedsni chaqirish

  try {
    const response = await axios.get("https://catfact.ninja/breeds");
    const breeds = response.data.data;
    const breedList = document.querySelector("#breeds");
    breedList.innerHTML = "";
    for (const breed of breeds) {
      const breedDiv = document.createElement("div");

      breedDiv.classList.add(
        "col-sm-6",
        "col-md-4",
        "col-xxl-3",
        "my-3",
        "text-center"
      );

      breedDiv.innerHTML = `
        <div class="card text-start p-3 border-0">
       <p>Breed: ${breed.breed}</p>
       <p> Country: ${breed.country}</p>
       <p> Origin: ${breed.origin}</p>
      <div class="d-flex justify-content-between">
       <button class="btn text-dark d-block fw-bold ">${breed.pattern}</button>
       <button class="btn text-dark d-block fw-bold">${breed.coat}</button>
     </div>
   </div>
</div>`;

      breedList.appendChild(breedDiv);
    }
  } catch (error) {
    console.error("Xatolik yuz berdi" + error);
  }

  // imgni chaqirish

  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/0XYvRd7oD"
    );
    const images = response.data;
    const imgrandom = document.querySelector("#imgrandom");
    imgrandom.innerHTML = "";
    const imgDiv = document.createElement("div");
    imgDiv.innerHTML = `<img src="${images.url}" alt="" class="randomcat" >`;

    imgrandom.appendChild(imgDiv);
  } catch (error) {
    console.error("Xatolik yuz berdi" + error);
  }
  // Generate qilish
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    const fact = response.data;
    const factt = document.querySelector("#facts");
    factt.innerHTML = "";
    const factDiv = document.createElement("div");
    factDiv.innerHTML = `<div>${fact.fact}</div> `;
  } catch (error) {
    console.error("Xatolik yuz berdi" + error);
  }
}

getBreedsAndImagesAndFacts();
