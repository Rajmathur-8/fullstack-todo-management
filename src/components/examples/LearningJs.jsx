const person = {
    name : 'Raj Mathur',
    address: {
        line1:'IIIT Bhubaneswar',
        state: 'Odisha'
    },
    profiles : ['twitter','linkedin','Instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}


export default function LearningJs(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.state}</div>
        <div>{person.profiles[0]}</div>
        <div>{ person.printProfile() }</div>
        </>
    )
}