/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Sonday = "SANDAY",
  Monday = "Monday",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "Thursday",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
}

function isWeekend(day: Day): boolean {
  return day === Day.Sonday || day === Day.Saturday;
}
