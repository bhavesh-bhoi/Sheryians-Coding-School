const reels = [
  {
    username: "chicku_x",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    description: "Every brother’s attitude after using sister’s skincare",
    isLiked: true,
    isFollowing: true,
    likes: 842,
    comments: 37,
    shares: 12,
    video: "videos/reel2.mp4",
  },
  {
    username: "travel_guy",
    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    description: "POV: you finally took that solo trip",
    isLiked: false,
    isFollowing: false,
    likes: 1203,
    comments: 94,
    shares: 41,
    video: "videos/reel3.mp4",
  },
  {
    username: "foodie_diaries",
    profileImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    description: "When the street food hits different",
    isLiked: true,
    isFollowing: false,
    likes: 967,
    comments: 58,
    shares: 22,
    video: "videos/reel4.mp4",
  },
  {
    username: "gym_motivation",
    profileImage:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
    description: "Day 1 or one day. Choose wisely",
    isLiked: false,
    isFollowing: true,
    likes: 2310,
    comments: 143,
    shares: 87,
    video: "videos/reel5.mp4",
  },
  {
    username: "aesthetic_vibes",
    profileImage:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200",
    description: "Soft lights, calm mind, late night thoughts",
    isLiked: true,
    isFollowing: true,
    likes: 1544,
    comments: 76,
    shares: 39,
    video: "videos/reel6.mp4",
  },
];

let reelsContainer = document.querySelector(".reels-container");

function addReel() {
  let allReelsHTML = "";
  isFollowing = false;

  reels.forEach(function (reel, index) {
    allReelsHTML += `
    <div class="reels">
      <video autoplay loop muted src="${reel.video}"></video>

      <div class="bottom">
        <div class="profile-info">
          <img src="${reel.profileImage}" alt="" />
          <h2>${reel.username}</h2>
          <h4 id=${index} class="follow-btn">${reel.isFollowing ? "Following" : "Follow"}</h4>
        </div>

        <div class="description">
          <p>${reel.description}</p>
        </div>
      </div>

      <div class="right">
        <div id="${index}" class="like">
            <svg xmlns="http://www.w3.org/2000/svg" fill="${reel.isLiked ? "red" : "none"}" viewBox="0 0 24 24" stroke-width="1.5" stroke="${reel.isLiked ? "red" : "currentColor"}">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <p>${reel.likes}</p>
          </div>

        <div class="comment">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
          <p>${reel.comments}</p>
        </div>

        <div class="share">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
          <p>${reel.shares}</p>
        </div>

        <div class="more">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
      </div>
    </div>
  `;
  });

  reelsContainer.innerHTML = allReelsHTML;
}

addReel(reels);

reelsContainer.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].isLiked = true;
      reels[dets.target.id].likes++;
    } else {
      reels[dets.target.id].isLiked = false;
      reels[dets.target.id].likes--;
    }
    addReel(reels);
  }

  if (dets.target.className == "follow-btn") {
    if (!reels[dets.target.id].isFollowing) {
      reels[dets.target.id].isFollowing = true;
    } else {
      reels[dets.target.id].isFollowing = false;
    }
    addReel(reels);
  }
});
