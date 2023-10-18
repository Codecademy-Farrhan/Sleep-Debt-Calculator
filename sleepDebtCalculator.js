const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    case "Sunday":
      return 7;
    default:
      return "Invalid day!";
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

// const getIdealSleepHours = () => {
//   let idealHours = 8;
//   return idealHours * 7;
// };

const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
  };

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealHours = getIdealSleepHours(4);
  if (actualSleepHours === idealHours) {
    console.log("Perfect!");
  } else if (actualSleepHours < idealHours) {
    console.log(`Shag. You need ${idealHours - actualSleepHours} more hours.`);
  } else {
    console.log("You pig.");
  }
};

calculateSleepDebt();