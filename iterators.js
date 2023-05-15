/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 * forEach: forEach() method calls a function once for each array element.
 ************************************/
const logger = function (array) {
  array.forEach((element) => {
    console.log(element);
  });
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 *
 * map() method:
 * 1- creates a new array by performing a function on each array element.
 * 2- does not execute the function for array elements without values.
 * 3- does not change the original array
 ************************************/
//const temperatures = [temp1, temp2, temp3];

const toCelsius = (temperatures = function toCelsius(temperatures) {
  return temperatures.map((tempFih) => {
    return (tempFih - 32) * (5 / 9);
  });
});

// return temperatures.map(temperatures) => {temperatures.toCelsius(temperatures) };
//  temperaturesInC => temperature.toCelsius(temperature);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function hottestDays(temperatures, threshhold) {
  return temperatures.filter((temp) => temp > threshhold);
};
// using below Console.log to check the codes is running or not:
//console.log(hottestDays([50, 100, 70], 55));
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

const logHottestDays = function (temperatures, threshhold) {
  return logHottestDays.find(toCelsius(hottestDays(temperatures, threshhold)));
};

/* Uncomment the following lines to test your code... */

logger([1, 2, 3, 4, 5, 6, 7]);
console.log(toCelsius([212, 122])); // should be: [100, 50];
console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

//module.exports = { logger, toCelsius, hottestDays, logHottestDays };
