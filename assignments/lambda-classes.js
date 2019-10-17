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
        return (`Today we are learning about ${subject}.`);
    }

    grade(student, subject){
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

    listsSubjects(){
        return `${this.favSubjects}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor{
    constructor(projectAttrs){
        super(projectAttrs);
        this.gradClassName = projectAttrs.gradClassName,
        this.favInstructor = projectAttrs.favInstructor
    }

    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

//INSTRUCTOR OBJECTS
const mario = new Instructor({
    name: "Mario",
    age: 35,
    location: "Mushroom Kingdom",
    specialty: "Jumping",
    favLanguage: "Italian",
    catchPhrase: "It's a me! Mario!"
})

const samus = new Instructor({
    name: "Samus",
    age: 28,
    location: "Planet Zebes",
    specialty: "Intersteller Space Travel",
    favLanguage: "Latin",
    catchPhrase: "wubbalubbadubdub!"
})

const link = new Instructor({
    name: "Link",
    age: 33,
    location: "Kingdom of Hyrule",
    specialty: "Princess Saving 101",
    favLanguage: "Hylian",
    catchPhrase: "..."
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
const dracula = new ProjectManager({
    name: "Dracula",
    age: "2031",
    location: "Transylvania",
    specialty: "Dark Magic",
    favLanguage: "Romanian",
    catchPhrase: "What is a man! A miserable little pileof secrets!",
    gradClassName: "DarkArts23",
    favInstructor: "Simon Belmont"
})

const wily = new ProjectManager({
    name: "Dr. Wily",
    age: 67,
    location: "Secret fortress in the middle of nowhere",
    specialty: "Robotics",
    favLanguage: "Russian",
    catchPhrase: "I'll get you next time, Mega Man!",
    gradClassName: "EvilTwirlyMustaches18",
    favInstructor: "Dr. Light"
})

const dedede = new ProjectManager({
    name: "King Dedede",
    age: 45,
    location: "Planet Pop Star",
    specialty: "Cooking",
    favLanguage: "Gibberish",
    catchPhrase: "*smacks belly",
    gradClassName: "pastapals18",
    favInstructor: "Kirby"
})

//CONSOLE LOGGING

console.log(dedede.location);
console.log(wily.gradClassName);
console.log(samus.speak());
console.log(mario.demo("the art of jumping"));
console.log(link.grade(claude, "the Basics of Swordplay")); //should only work for student, but takes any name :S
console.log(claude.listsSubjects());
console.log(edelgard.PRAssignment('Plumbing101'));
console.log(dimitri.sprintChallenge('Horse Riding for Beginners'));
console.log(dracula.standup('random')); //I don't really understand what this is asking.
console.log(dedede.debugsCode(claude, "archery"));