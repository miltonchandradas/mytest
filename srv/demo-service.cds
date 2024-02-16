using {demo} from '../db/schema';

@path: 'service/demo'

service DemoService {
    entity Employees as projection on demo.Employees;
    function updateEmployees(ID : String, name : String, email : String, department : String, dob : String) returns String;


    event updateEmployeesEvent : {
        ID         : String;
        name       : String;
        email      : String;
        department : String;
        dob        : String;
    }


    event serverStarted : {
        name       : String;
    }
}
