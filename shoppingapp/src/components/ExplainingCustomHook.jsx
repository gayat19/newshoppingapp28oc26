import { useState } from "react";
import { useToggle } from "../hooks/useToggle";

export const ExplainingCustomHook = () => {
    const [open, toggleOpen] = useToggle(false);

    return (
        <div>
            <h2>Explaining Custom Hook</h2>
            <button onClick={toggleOpen}>{open ? "Close" : "Open"}</button>
            {open && <p>The custom hook is now open!</p>}
        </div>
    );
};