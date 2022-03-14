import React from "react";
import PropTypes from "prop-types";

const CreateGame = ({ getQuestions }) => {
  const categories = [
    "animals",
    "general knowledge",
    "film",
    "gadgets",
    "music"
  ];

  const difficulties = ["easy", "medium", "hard"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const categories = Array.from(e.target.category);
    const selectedCat = categories.filter((cat) => cat.checked === true);
    const catValue = selectedCat[0].value;

    const difficulties = Array.from(e.target.difficulty);
    const selectDiff = difficulties.filter((diff) => diff.checked === true);
    const diffValue = selectDiff[0].value;
    getQuestions({ category: catValue, difficulty: diffValue });
  };
  return (
    <section id="createGame">
      <form onSubmit={handleSubmit}>
        <h3 className="capitalize">Select a category:</h3>
        {categories.map((cat, index) => {
          const consistentName = cat.replaceAll(" ", "").toLowerCase();
          return (
            <div key={`cat_${index}`}>
              <label htmlFor={consistentName} className="capitalize">
                {cat}
              </label>
              <input
                type={"radio"}
                id={consistentName}
                name="category"
                value={consistentName}
              />
            </div>
          );
        })}
        <h3 className="capitalize">Select a difficulty:</h3>
        {difficulties.map((diff, index) => {
          return (
            <div key={`diff_${index}`}>
              <label htmlFor={diff} className="capitalize">
                {diff}
              </label>
              <input type={"radio"} id={diff} name="difficulty" value={diff} />
            </div>
          );
        })}
        <input type={"submit"} value="Create Game!"></input>
      </form>
    </section>
  );
};

CreateGame.propTypes = {
  getQuestions: PropTypes.func
};

export default CreateGame;