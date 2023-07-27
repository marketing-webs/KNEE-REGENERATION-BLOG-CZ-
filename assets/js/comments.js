const commentsWrapper = document.querySelector(".comments-wrapper");

window.addEventListener("DOMContentLoaded", () => {
  commentsArray
    .sort((a, b) => (a.time < b.time ? 1 : -1))
    .map((item) => {
      let time = `${item.time.getDate().toString().padStart(2, "0")}.${(
        item.time.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${item.time.getFullYear()}`;
      const comment = `
   <div class="comment">
            <img
              src="assets/images/avatar.svg"
              alt="avatar-image"
              class="comment-avatar"
            />
            <div class="comment-content-wrapper">
              <div class="comment-row">
                <p class="comment-author">${item.author}</p>
                <p class="comment-date">&bull; ${time}</p>
              </div>
              <div class="comment-row-image">
                <p class="comment-content">
                 ${item.text}
                </p>
                  ${
                    item.pictures !== ""
                      ? ` <img
                          src="assets/images/${item.pictures}"
                          alt="avatar-image"
                          class="comment-attachment"
                      />`
                      : ""
                  }
              </div>
              <div class="comment-row">
                <img
                  src="./assets/images/icon-comment.svg"
                  alt=""
                  class="comment-rating"
                />
              </div>
            </div>
          </div>
  `;
      commentsWrapper.innerHTML += comment;
    });
});
