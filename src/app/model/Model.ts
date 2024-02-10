import { Subject } from "./Subject";
import { Student } from "./Student";

export class Model {
    public student: Student;
    public subject: Subject;

    public constructor() {
        this.student = new Student;
        this.subject = new Subject;
    }
}