import { useImperativeHandle, useRef } from "react"

//modal - dialog on top of the screen
function ResultModal({ ref, result, targetTime }) {
    const dialog = useRef();
    //ref passed as a prop now refers to the object returned by useImperativeHandle 
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
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default ResultModal
