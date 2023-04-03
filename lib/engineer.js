const Employee = require("./employee");

// Engineer Constructor to extend Employee Constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

// Export Engineer Constructor
module.exports = Engineer; 