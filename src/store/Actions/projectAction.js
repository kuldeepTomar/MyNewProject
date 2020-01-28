export const createProject = (project) =>{
    return (dispatch,getState,{ getFirebase,getFirestore})=>{
        const fireStore = getFirestore();
        const profile = getState().firebase.profile
        const userId=getState().firebase.auth
        fireStore.collection('NewProject').add({
            ...project,
            UserFirstName:profile.firstName,
            UserLastName:profile.lastName,
            UserId:userId,
            createAt: new Date()
        }).then(() =>{
            dispatch({type:"CREATE_PROJECT",project})
        }).catch((err) =>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
        })
    }
}