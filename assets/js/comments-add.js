window.addEventListener("DOMContentLoaded", () => {
  const storage = localStorage;
  const addCommentBtn = document.querySelector(".form-btn-add-comment");
  const addPictureBtn = document.querySelector(".form-btn-add-picture");
  const pictureError = document.querySelector(".picture-error");
  const inputName = document.querySelector(".form-add-comment-author");
  const inputMessage = document.querySelector(".form-add-comment-message");
  const addedCommentsWrapper = document.querySelector(".added-comments");

  let commentsArray =
    storage.getItem("user-comment") !== null
      ? JSON.parse(storage.getItem("user-comment"))
      : [];
  addPictureBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pictureError.innerText =
      "Omlouváme se. Možnost vkládání fotografií je momentálně omezena";
  });
  addCommentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let comment = {
      user: inputName.value,
      message: inputMessage.value,
    };
    commentsArray.push(comment);
    storage.setItem("user-comment", JSON.stringify(commentsArray));

    const com = returnComment(
      inputName.value,
      inputMessage.value,
      generateDateBefore(0)
    );
    inputName.value = "";
    inputMessage.value = "";
    addedCommentsWrapper.innerHTML += com;
  });

  if (storage.getItem("user-comment") !== null) {
    JSON.parse(storage.getItem("user-comment"))
      .reverse()
      .forEach((item) => {
        const com = returnComment(
          item.user,
          item.message,
          generateDateBefore(0)
        );
        addedCommentsWrapper.innerHTML += com;
      });
  }
});
