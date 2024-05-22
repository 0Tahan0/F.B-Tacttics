export default function Comment(
  userId,
  commentId,
  userName,
  userImg,
  date,
  postText,
  type
) {
  this.userId = userId;
  this.commentId = commentId;
  this.userName = userName;
  this.userImg = userImg;
  this.date = date;
  this.postText = postText;
  this.type = type;
  this.replies = [];
  this.likes = {
    likesCount: 0,
    likedUsers: [],
  };
  this.deleteComment = function (id) {
    this.replies = this.replies.filter((el) => el.commentId != id);
  };
}
