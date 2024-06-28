


const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');

let likeCount = 0;
let dislikeCount = 0;

// Check if like/dislike counts are stored in local storage
const storedLikes = localStorage.getItem('likeCount');
const storedDislikes = localStorage.getItem('dislikeCount');

if (storedLikes && storedDislikes) {
  likeCount = parseInt(storedLikes);
  dislikeCount = parseInt(storedDislikes);
}

// Update button text with retrieved counts
likeButton.textContent = `Like (${likeCount})`;
dislikeButton.textContent = `Dislike (${dislikeCount})`;

likeButton.addEventListener('click', function() {
  likeButton.classList.toggle('active');
  dislikeButton.classList.remove('active');
  likeCount++;
  this.textContent = `Like (${likeCount})`;
  localStorage.setItem('likeCount', likeCount);
});

dislikeButton.addEventListener('click', function() {
  dislikeButton.classList.toggle('active');
  likeButton.classList.remove('active');
  dislikeCount++;
  this.textContent = `Dislike (${dislikeCount})`;
  localStorage.setItem('dislikeCount', dislikeCount);
});
