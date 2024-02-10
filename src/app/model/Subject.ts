export class Subject {
    public name: string;
    public section: string;
    public teacher: string;

    public constructor(name = "", section = "", teacher = "") {
        this.name = name;
        this.section = section;
        this.teacher = teacher;
    }
}