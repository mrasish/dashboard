let currentType = "";
let popupTimer;

const adminPanel = document.getElementById("adminPanel");
const popupMsg = document.getElementById("popupMsg");

function showPopup(message, type = "error") {
  popupMsg.innerHTML =
    message +
    ' <span onclick="closePopup()" style="cursor:pointer;font-weight:bold;margin-left:10px;">✖</span>';

  popupMsg.className = "popup-msg " + type;
  popupMsg.classList.add("show");

  clearTimeout(popupTimer);
  popupTimer = setTimeout(closePopup, 2000);
}

function closePopup() {
  popupMsg.classList.remove("show");
}

function openDemo() {
  document.getElementById("authModal").style.display = "none";
  adminPanel.style.display = "flex";
}

function logout() {
  location.reload();
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

function openUpload(type) {
  currentType = type;
  document.getElementById("uploadPopup").style.display = "flex";
  document.getElementById("uploadTitle").innerText = "Add " + type;
}

function closeUpload() {
  document.getElementById("uploadPopup").style.display = "none";
}

function addItem() {
  if (currentType === "image" && imgCount) imgCount.innerText++;
  if (currentType === "video" && videoCount) videoCount.innerText++;
  if (currentType === "news" && newsCount) newsCount.innerText++;
  if (currentType === "event" && eventCount) eventCount.innerText++;
  closeUpload();
}

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".profile")) {
    document.getElementById("dropdown").style.display = "none";
  }
});

function openSection(type) {
  document.getElementById("sectionPopup").style.display = "flex";
  document.getElementById("sectionTitle").innerText = "Manage " + type;
}

function closeSection() {
  document.getElementById("sectionPopup").style.display = "none";
}