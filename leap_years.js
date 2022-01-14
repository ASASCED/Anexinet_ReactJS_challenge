// Define current year to start
const currentYear = new Date().getFullYear();

// Define leap year function
const isLeapYear = (year) => {
  // If year has a remainder of 0, it is a leap year
  return !(new Date(year, 1, 29).getMonth() - 1);
};

// Set all years to check for leap years from current year and set it on an array
const getNextTwentyLeapYears = () => {
  let years = [];
  let i = 0;

  // If years array is less than 20, continue to add years to array
  while (years.length < 20) {
    const year = currentYear + i;

    if (isLeapYear(year)) {
      years = [...years, year];
    }

    i++;
  }

  return years;
};

console.log(getNextTwentyLeapYears());
