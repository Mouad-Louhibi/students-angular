export class Model {
    // public id: number;
    public fname: string;
    public lname: string;
    public dob: string;

    public constructor(fname = "", lname = "", dob = "") {
        // this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
    }
}