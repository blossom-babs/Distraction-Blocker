const blackBg = "https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&w=480&dpr=1";
const newText = "Focus";

const allImages = document.getElementsByTagName("img");
const topics = document.getElementsByTagName("h3")

for (let i = 0; i < allImages.length; i++) {
    allImages[i].src = blackBg
    allImages[i].style.hover = blackBg
}

for (let i = 0; i < topics.length; i++) {
    topics[i].innerText = newText
}