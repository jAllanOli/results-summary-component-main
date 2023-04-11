import React from "react";
import Category from "./components/Category";
import Data from "./data.json";
import ReactionIcon from "./assets/images/icon-reaction.svg";
import MemoryIcon from "./assets/images/icon-memory.svg";
import VerbalIcon from "./assets/images/icon-verbal.svg";
import VisualIcon from "./assets/images/icon-visual.svg";
import "./sass/style.scss";

function App() {
  const icons = [ReactionIcon, MemoryIcon, VerbalIcon, VisualIcon];

  return (
    <main>
      <div className="results-container">
        <h2 className="results-container__title">Your Result</h2>
        <div className="results-container__final-score">
          <span>76</span> of 100
        </div>
        <h1 className="results-container__ratio">Great</h1>
        <p className="results-container__text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="summary">
        <h2 className="summary__title">Summary</h2>

        <ul className="summary__list">
          {Data.map((item, index) => (
            <li key={item.category}>
              <Category
                tittle={item.category}
                score={item.score}
                bgColor={item.color}
                textColor={item.textColor}
              >
                <img src={icons[index]} alt="icon" />
              </Category>
            </li>
          ))}
        </ul>

        <button className="summary__button">Continue</button>
      </div>
    </main>
  );
}

export default App;
