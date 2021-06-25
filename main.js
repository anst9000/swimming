addEventListener("load", main);

function main() {
  console.log("hej hopp");
}

const goodButton = document.getElementById("good-button");
const badButton = document.getElementById("bad-button");

const goodList = document.querySelector(".good");
const badList = document.querySelector(".bad");

goodButton.addEventListener("click", showListGood);
badButton.addEventListener("click", showListBad);
goodList.style.display = "none";
badList.style.display = "none";

function showListGood() {
  if (goodList.style.display === "none") {
    goodList.style.display = "block";
    goodButton.innerText = "Visa Mindre";
  } else {
    goodList.style.display = "none";
    goodButton.innerText = "Visa Mer";
  }
}

function showListBad() {
  if (badList.style.display === "none") {
    badList.style.display = "block";
    badButton.innerText = "Visa Mindre";
  } else {
    badList.style.display = "none";
    badButton.innerText = "Visa Mer";
  }
}
