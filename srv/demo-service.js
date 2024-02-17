const cds = require("@sap/cds");

module.exports = (srv) => {
  const { Employees } = srv.entities;

  srv.on("READ", Employees, async (req, next) => {
    console.log("READ event called...");

    await srv.emit("updateEmployeesEvent", {
      ID: "de8b2cfb-d518-4979-86b6-5c193a7f48be",
      name: "Milton",
      email: "milton@live.com",
      department: "Math",
      dob: "1974-03-07",
    });

    return await next();
  });

  srv.on("serverStarted", async (msg) => {
    let { name } = msg.data;

    console.log("Server Started event handler...");
    console.log(name);
  });

  srv.on("updateEmployeesEvent", async (msg) => {
    let { ID, name, email, department, dob } = msg.data;

    try {
      let result = await UPDATE(Employees)
        .with({
          name,
          email,
          department,
          dob,
        })
        .where({ ID });

      console.log("Update results: ", result);
    } catch (error) {
      console.log("FAILED...");
    }
  });

  srv.on("updateEmployees", async (req) => {
    let { ID, name, email, department, dob } = req.data;

    try {
      let result = await UPDATE(Employees)
        .with({
          name,
          email,
          department,
          dob,
        })
        .where({ ID });

      console.log("Update results: ", result);

      return "OK";
    } catch (error) {
      return "NOT OK";
    }
  });
};
