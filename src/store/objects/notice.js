export default function Notice(title, sender, type, content, date, senderID) {
  this.title = title;
  this.sender = sender;
  this.senderID = senderID;
  this.type = type;
  this.content = content;
  this.date = date;
  this.read = false;
}
