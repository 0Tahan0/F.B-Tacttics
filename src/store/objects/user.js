export default function User(name, id, email, password, type, img, posts) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.password = password;
  this.type = type ? type : "user";
  this.img = img;
  this.follows = [];
  this.followers = [];
  this.savedPosts = [];
  this.notifications = [];
  this.commentsCount = 0;
  this.postsCount = 0;
  this.likesCount = 0;
  this.posts = posts;
}
