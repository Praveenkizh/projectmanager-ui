export class Task{
    id:Number;
    task:String;
    priority:Number;
    parentTask:String;
    startDate:Date;
    endDate:Date;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}