// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }

    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instAttrs){
        super(instAttrs);
        this.specialty = instAttrs.specialty,
        this.favLanguage = instAttrs.favLanguage,
        this.catchPhrase = instAttrs.catchPhrase
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(subject){
        return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person{
    constructor(stuAttrs){
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground,
        this.className = stuAttrs.className,
        this.favSubjects = stuAttrs.favSubjects
    }

    listsSubjects([]){
        return [];
    }

    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor{
    constructor(projectAttrs){
        super(projectAttrs);
        this.gradClassName = projectAttrs.gradClassName,
        this.favInstructor = projectAttrs.favInstructor
    }

    standup(channel){
        return `${this.name} announces to ${channel}. @channel standy times!`;
    }

    debugsCode(subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

//INSTRUCTOR OBJECTS
const byleth = new Instructor({
    name: "Byleth",
    age: ,
    location: ,
    specialty: ,
    favLanguage: ,
    catchPhrase: ,
})

const rhea = new Instructor({
    name: ,
    age: ,
    location: ,
    specialty: ,
    favLanguage: ,
    catchPhrase: ,
})

const rhea = new Instructor({
    name: ,
    age: ,
    location: ,
    specialty: ,
    favLanguage: ,
    catchPhrase: ,
})

//STUDENT OBJECTS
const edelgard = new Student({
    name: 'Edelgard',
    age: 17,
    location: "Adrestian Empire",
    previousBackground: "Imperial princess who ruled a nation",
    className: "Black Eagles",
    favSubjects: ["Sword", "Axe", "Armor", "Pegasus"]
})

const dimitri = new Student({
    name: 'Dimitri',
    age: 17,
    location: "Holy Kingdom of Faerghus",
    previousBackground: "Crown Prince of a holy kingdom",
    className: "Blue Lions",
    favSubjects: ["Sword", "Lance", "Pegasus"]
})

const claude = new Student({
    name: 'Claude',
    age: 17,
    location: "Almyra",
    previousBackground: "Heir of the House Riegan",
    className: "Golden Deer",
    favSubjects: ["Sword", "Strategy", "Bow", "Pegasus", "Cavalry"]
})

//PROJECT MANAGER OBJECTS
const  = new ProjectManager({
    name: ,
    age: ,
    location: ,
    specialty: ,
    favLanguage: ,
    catchPhrase: ,
    gradClassName: ,
    favInstructor: ,
})

const  = new ProjectManager({
    name: ,
    age: ,
    location: ,
    specialty: ,
    favLanguage: ,
    catchPhrase: ,
    gradClassName: ,
    favInstructor: ,
})

const  = new ProjectManager({
    name: ,
    age: ,
    location: ,
    specialty: ,
    favLanguage: ,
    catchPhrase: ,
    gradClassName: ,
    favInstructor: ,
})