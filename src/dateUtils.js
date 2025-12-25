///function that add to ttask flow based on date
export function startOfToday() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }
  
  export function parseDeadline(deadlineStr) {
    // deadlineStr from <input type="date"> => "YYYY-MM-DD" or ""
    if (!deadlineStr) return null;
    const d = new Date(deadlineStr);
    if (Number.isNaN(d.getTime())) return null;
    d.setHours(0, 0, 0, 0);
    return d;
  }
  
  export function isToday(deadlineStr) {
    const d = parseDeadline(deadlineStr);
    if (!d) return false;
    return d.getTime() === startOfToday().getTime();
  }
  
  // Rolling next 7 days including today
  export function isThisWeek(deadlineStr) {
    const d = parseDeadline(deadlineStr);
    if (!d) return false;
  
    const today = startOfToday();
    const weekEnd = new Date(today);
    weekEnd.setDate(today.getDate() + 7);
  
    return d >= today && d <= weekEnd;
  }
  
  export function isOverdue(deadlineStr) {
    const d = parseDeadline(deadlineStr);
    if (!d) return false;
    return d < startOfToday();
  }
  