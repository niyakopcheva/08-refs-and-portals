import { useImperativeHandle, useRef } from "react"

//modal - dialog on top of the screen
function ResultModal({ ref, remainingTime, targetTime, onReset }) {
    const dialog = useRef();
    //ref passed as a prop now refers to the object returned by useImperativeHandle 

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {    //obj that groups all props and methods that should be exposed(callable) to other components
        return {
            open() {
                dialog.current.showModal();
                //provides abstraction - we can change this component but as long as we adjest the open() function,
                //other components that call it wil continue working 
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default ResultModal
