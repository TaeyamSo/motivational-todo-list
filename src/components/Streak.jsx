function Streak ({completed}) {

    return<div className="container"> 
    
    <div className="streak">
            <div className="fire">
                <div className="flames">
                    {completed > 0 ? <div className="flame"></div> : null}
                    {completed > 1 ? <div className="flame"></div> : null}
                    {completed > 2 ? <div className="flame"></div> : null}
                    {completed > 3 ? <div className="flame"></div> : null}
                    {completed > 3 ? <div className="flame"></div> : null}
                    {completed > 3 ? <div className="flame"></div> : null}
                </div>
                <div className="logs"></div>
            </div>
    </div>
            <div className="completed-todo" > Completed-Todos : {completed}</div>

    </div>
} 

export default Streak;  