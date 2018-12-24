
export class Project{
    projectId:Number;
    project:String;
    priority:Number;
    startDate:Date;
    endDate:Date;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}