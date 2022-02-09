export default function timeGreeting(){
  let d = new Date();
  let time = d.getHours();

  if (time < 12) {
    return "Good Morning"
  }
  if (time > 12) {
    return "Good Afternoon"
  }
  if (time == 12) {
    return "Go eat lunch!"
  }
}