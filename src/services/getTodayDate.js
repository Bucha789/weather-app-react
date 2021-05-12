export default function getDate() {
  const date = new Date();
  const today = date.toDateString();
  return today.split(' ')
}