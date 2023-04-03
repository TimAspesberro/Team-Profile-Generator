const Employee = require('./employee');

// Manager Constructor to extend Employee Constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }
}

// Export Manager Constructor
module.exports = Manager; 