let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = false;
const runnerAge = 22;

if (runnerAge > 18 && earlyRegistration) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && earlyRegistration) {
  console.log(`You will run at 9:30am. Your race number is ${raceNumber}`);
} else if (runnerAge> 18 && !earlyRegistration) {
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm. Your race number is ${raceNumber}`);
} else {
  console.log('Please see the registration desk');
}
