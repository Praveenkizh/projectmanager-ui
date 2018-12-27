
export class Project{
    projectId:Number;
    project:String;
    priority:Number;
    startDate:Date;
    endDate:Date;
    managerId:Number;
    setDate:Boolean;
    totalTasks:String;
    completedTasks:String;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}