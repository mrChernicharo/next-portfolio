export function getXPTime(startDate) {
  const days = Math.abs(startDate.getDate() - new Date().getDate());
  const months = Math.abs(startDate.getMonth() - new Date().getMonth());
  const years = Math.abs(startDate.getFullYear() - new Date().getFullYear());

  // console.log([years, months, days]);

  if (years) {
    return `${years} ${years === 1 ? "year" : "years"} 
    ${months === 0 ? "" : "and"} ${months > 0 ? months : ""}
    ${months <= 0 ? "" : months === 1 ? "month" : "months"}`;
  } else if (months) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  } else if (days) {
    return `${days} ${days === 1 ? "day" : "days"}`;
  }
}
