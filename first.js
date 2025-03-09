/////////date////////////
const curDate = document.getElementById("curDate");

const now = new Date();
const option = {
  year: "numeric",
  month: "long", //numeric,2-digit,short,narrow
  day: "2-digit",
};
const date = new Intl.DateTimeFormat("en-US", option).format(now);
curDate.textContent = date;
//////////////////////////////////
function updateDate() {
  const time = document.getElementById("time");
  const now2 = new Date();
  const option2 = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const timeFormate = new Intl.DateTimeFormat("en-US", option2).format(now2);
  time.textContent = timeFormate;
}
setInterval(updateDate, 1000);
updateDate();

///////////hex color//////////
const getColor = function () {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.background = randomCode;
};
document.getElementById("hex").addEventListener("click", getColor);
////////////switch button/////
const switchBtn = document
  .getElementById("switch")
  .addEventListener("click", () => {
    window.location.href = "./blog.html";
  });

//////////clear histroy///////

const button = document.getElementById("button");
button.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});

//////////complete button ////////

//////////////////////
const complteBtn = document.querySelectorAll(".complete-btn");
const taskCount = document.querySelector("#task-count");
const checkCountEl = document.querySelector("#checkCout");
const historyContainer = document.querySelector(".history-container");

let count = 6;
let checkCount = 23;
taskCount.textContent = count;
checkCountEl.textContent = checkCount;

for (let btn of complteBtn) {
  btn.addEventListener("click", function (e) {
    alert("Board update Successfully..");
    btn.classList.add("disabled");
    count--;
    checkCount++;
    taskCount.textContent = count;
    checkCountEl.textContent = checkCount;
    const currentDate = new Date();

    // complte card heading;
    const heading = e.target
      .closest(".complete")
      .querySelector("h2").textContent;
    console.log(heading);
    // activity log p tag for show history
    const p = document.createElement("p");
    p.classList.add(
      "text-gray-600",
      "bg-[#F4F7FF]",
      "p-4",
      "m-6",
      "rounded-lg"
    );
    p.textContent = `You have Complete ${heading} at ${currentDate.toLocaleTimeString()}`;
    historyContainer.prepend(p);
  });
}
