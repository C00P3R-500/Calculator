const nums = document.querySelectorAll(".nbtns button");
const iBox = document.querySelector("#input");


nums.forEach((num) => {
    num.addEventListener("click", () => {
        iBox.textContent = iBox.textContent + num.textContent;
    });
});

console.log(nums);