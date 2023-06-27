const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryItemsString = images
  .map((image) => {
    return `<li><img src="${image.url}" alt="${image.alt}" 
    width="500" height="300" style="display:block"
    ></li>`;
  })
  .join("");

const galleryListRef = document.querySelector(".gallery");

galleryListRef.insertAdjacentHTML("afterbegin", galleryItemsString);

galleryListRef.style.display = "flex";
galleryListRef.style.flexWrap = "wrap";
galleryListRef.style.justifyContent = "center";
galleryListRef.style.gap = "20px 20px";
galleryListRef.style.listStyle = "none";
