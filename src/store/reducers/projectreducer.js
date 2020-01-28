const initState = {
    projects:[
        {id:'1',title:"React and Redux",content:"blah blah blah"},
        {id:'2',title:"Firebase Project",content:"blah blah blah"},
        {id:'3',title:"New Nodejs project",content:"blah blah blah"}
    ]
}
const projectReducer = (state = initState,action) => {
    switch(action.type){
        case "CREATE_PROJECT":
            console.log("Created action",action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create an error project",action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer;