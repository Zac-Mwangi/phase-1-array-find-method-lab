// code your solution here

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(record) {
  const result = record.find((recordCheck) => recordCheck.result === "W");
  // const result =record.find((er)=>er.result==='W')

  // using ternary
  // return result ? result.year : undefined


  // using if...else
  if (result) {
    return result.year;
  } 
}
