import { FormEvent, useState } from "react";
import { stateValues } from "../../utils";

export default function UpdateUserAsStorage() {
    type zoneType = "" | "nation" | "state";
    const [state, setState] = useState("");
    async function onUpdate(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <section className="min-h-screen flex items-center justify-center p-3">
            <div className="bg-white shadow-lg rounded-lg max-w-[32rem] w-full p-3">
                <h1 className="text-2xl xs:text-3xl font-bold mb-6 text-primary text-center">Update - Storage</h1>
                <form onSubmit={onUpdate}>
                    <div className="input-container">
                        <label htmlFor="name">Change user name</label>
                        <input type="text" name="name" id="name" placeholder="e.g., john doe" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Change work email</label>
                        <input type="email" name="email" id="email" placeholder="e.g., johndoe@gmail.com" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="state">Change operation state</label>
                        <select
                            name="state"
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value as zoneType)}
                            className={state === "" ? "text-gray-400" : ""}
                        >
                            <option value="">-- Select --</option>
                            {stateValues.map((state) => (
                                <option key={state.key} value={state.key}>
                                    {state.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="locality">Change locality</label>
                        <input type="text" name="locality" id="locality" placeholder="e.g., ABC lane, xyz-city" />
                    </div>
                    <button type="submit" className="w-full text-lg mt-6" title="Confirm">
                        Confirm
                    </button>
                </form>
            </div>
        </section>
    );
}
