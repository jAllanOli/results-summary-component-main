import React from "react";
import Category from "./components/Category";
import Data from "./data.json";
import "./sass/style.scss";

function App() {
  return (
    <main>
      <div className="ResultsContainer">
        <h2 className="ResultsContainer__tittle">Your Result</h2>
        <div className="ResultsContainer__finalScore">
          <span>76</span> of 100
        </div>
        <h1 className="ResultsContainer__ratio">Great</h1>
        <p className="ResultsContainer__text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="Summary">
        <h2 className="Summary__tittle">Summary</h2>

        <ul className="Summary__list">
          {Data.map((item) => (
            <li>
              <Category
                key={item.category}
                tittle={item.category}
                score={item.score}
                bgColor={item.color}
                textColor={item.textColor}
              >
                <img src={item.icon} />
              </Category>
            </li>
          ))}
        </ul>

        <button className="Summary__button">Continue</button>
      </div>
    </main>
  );
}

export default App;
