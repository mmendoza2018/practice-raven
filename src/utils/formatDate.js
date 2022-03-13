export default function formatDate  (dateFormat) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  let date = new Date(dateFormat);
  let month = monthNames[date.getMonth()];
  let day = date.getDay();
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
}