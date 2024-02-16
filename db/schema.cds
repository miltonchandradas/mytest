namespace demo;

using {
  managed,
  cuid
} from '@sap/cds/common';

@assert.unique: {myUniqueColumns: [
  name,
  email
]}


entity Employees : managed, cuid {
  name       : String;
  email      : String;
  department : String;
  dob        : Date;
}
