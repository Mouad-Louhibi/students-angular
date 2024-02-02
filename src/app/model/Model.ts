export class Model {
    public fname: string;
    public lname: string;
    public dob: string;
    public name: string;
    public section: string;
    public teacher: string;

    public constructor(fname = "", lname = "", dob = "", name = "", section = "", teacher = "") {
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.name = name;
        this.section = section;
        this.teacher = teacher;
    }
}