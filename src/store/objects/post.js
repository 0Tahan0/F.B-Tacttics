export default function Post(
  userId,
  postId,
  userName,
  userImg,
  date,
  postText,
  postMedia
) {
  this.userId = userId;
  this.postId = postId;
  this.userName = userName;
  this.userImg = userImg;
  this.date = date;
  this.postText = postText;
  this.likes = {
    likesCount: 0,
    likedUsers: [],
  };
  this.postMedia = postMedia;
  this.replies = [];
  this.deleteComment = function (id) {
    this.replies = this.replies.filter((el) => el.commentId != id);
  };
}
