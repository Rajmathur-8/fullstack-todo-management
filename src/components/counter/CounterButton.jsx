

export default function CounterButton({by,incrementMethod,decrementMethod}){

    // function incrementCounterFunction(){
    //     incrementMethod(by)
    // }

    // function decrementCounterFunction(){
    //     decrementMethod(by)
    // }

    
    
    return(
        <div className="Counter">
            
            <div>
            <button className="counterButton" 
                onClick={() => incrementMethod(by)}    
            >+{by}</button>
            <button className="counterButton" 
                onClick={() => decrementMethod(by)}
            >-{by}</button>
            </div>
        </div>
    )
}

