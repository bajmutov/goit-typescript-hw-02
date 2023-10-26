/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  seturday = "seturday",
  sunday = "sunday",
}

function isWeekend(day: DayOfWeek): boolean {
  const dayOff = DayOfWeek.sunday || DayOfWeek.seturday;
  // const workDay =
  //   DayOfWeek.monday ||
  //   DayOfWeek.tuesday ||
  //   DayOfWeek.seturday ||
  //   DayOfWeek.thursday ||
  //   DayOfWeek.friday;

  return day === dayOff;
}
