const Employee = require('./employee');

// Intern Constructor to extend Employee Constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// Export Intern Constructor
module.exports = Intern; 