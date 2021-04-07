export function getXPTime(startDate, name) {
  const timeDiff = startDate.getTime() - new Date().getTime();

  let daysDiff = Math.abs(Math.round(timeDiff / (24 * 3600 * 1000)));
  let monthsDiff = Math.floor(daysDiff / 30);
  let yearsDiff = Math.floor(daysDiff / 365);

  let years = "";
  let months = "";
  let days = "";

  let subMonths = yearsDiff * 12;
  let subDays = monthsDiff * 30;

  monthsDiff = monthsDiff - subMonths;
  daysDiff = daysDiff - subDays;

  if (yearsDiff > 0) {
    years = yearsDiff === 1 ? "1 year" : `${yearsDiff} years`;
  }

  if (monthsDiff > 0) {
    months = monthsDiff === 1 ? "1 month" : `${monthsDiff} months`;
  }

  if (daysDiff > 0) {
    days = daysDiff === 1 ? "1 day" : `${daysDiff} days`;
  }

  if (years && !months && days) {
    return `${years} and ${days}`;
  }

  if (years && !months && !days) {
    return `${years}`;
  }

  if (years && months) {
    return `${years} and ${months}`;
  }

  if (!years && months && days) {
    return `${months} and ${days}`;
  }

  if (!years && months && !days) {
    return `${months} `;
  }

  if (!years && !months && days) {
    return `${days}`;
  }

  return String(years + months + days);
}
