"use client"
import HtmlSidebar from "@/components/HtmlExerciseSandbox/Sidebar"
import HtmlSandbox from "./sandbox";

export default function HtmlExerciseSandbox() {
    return (
        <div>
            <div className="flex justify-between items-center pt-5 p-5">
                <div className="flex space-x-4">
                    <label>
                        <input
                            type="radio"
                            name="level"
                            value="beginner"
                            className="peer sr-only"
                            defaultChecked
                        />
                        <div className="peer-checked:ring-2 peer-checked:ring-blue-300 flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
                            <span>Beginner</span>
                        </div>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="level"
                            value="intermediate"
                            className="peer sr-only"
                        />
                        <div className="peer-checked:ring-2 peer-checked:ring-green-300 flex items-center px-4 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600">
                            <span>Intermediate</span>
                        </div>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="level"
                            value="advanced"
                            className="peer sr-only"
                        />
                        <div className="peer-checked:ring-2 peer-checked:ring-red-300 flex items-center px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600">
                            <span>Advanced</span>
                        </div>
                    </label>
                </div>

                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    Submit
                </button>
            </div>

            <div className="flex flex-row grow-1">
                <HtmlSidebar ></HtmlSidebar>
                <HtmlSandbox></HtmlSandbox>
            </div>
        </div>
    )
};
