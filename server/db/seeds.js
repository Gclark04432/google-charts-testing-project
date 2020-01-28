use charts;
db.dropDatabase();


db.charts.insertMany([
  {
    name: "Activity 1",
    timeStamps: [new Date(2020, 1, 28), new Date(2020, 1, 27), new Date(2020, 1, 26), new Date(2020, 1, 25), new Date(2020, 1, 24), new Date(2020, 1, 23)]
  },
  {
    name: "Activity 2",
    timeStamps: [new Date(2020, 1, 27), new Date(2020, 1, 26), new Date(2020, 1, 25), new Date(2020, 1, 22), new Date(2020, 1, 20)]
  }
]);
