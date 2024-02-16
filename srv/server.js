const cds = require("@sap/cds");

cds.on("served", async (services) => {
  const { DemoService } = services;
  await DemoService.emit("serverStarted", { name: "Milton" });
});

// cds.on("served", async (services) => {
//   const { DemoService } = services;

//   await DemoService.emit("updateEmployeesEvent", {
//     ID: "de8b2cfb-d518-4979-86b6-5c193a7f48be",
//     name: "Milton",
//     email: "milton@live.com",
//     department: "Math",
//     dob: "1974-03-07",
//   });
// });
