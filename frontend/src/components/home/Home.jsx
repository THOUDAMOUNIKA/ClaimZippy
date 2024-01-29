import React from "react";


import "./Home.css";

const Home = () => {
    return (
        <div className="homee d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column ">
                <h1 className="text-center">
                    Organize your daily routinee
                </h1>
                <h3>
                    Become focussed..with your Todo App..
                </h3>

                <button className="home-btn p-2">Make Todo List</button>
            </div>

        </div>
    );
};

export default Home;