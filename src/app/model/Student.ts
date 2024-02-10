export class Student {
    public fname: string;
    public lname: string;
    public dob: string;

    public constructor(fname = "", lname = "", dob = "") {
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
    }
}