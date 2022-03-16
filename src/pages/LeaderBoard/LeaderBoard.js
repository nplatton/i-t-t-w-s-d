import React, { useEffect, useState } from "react";
import Board from "../../components/Board";
import axios from "axios";

const LeaderBoard = () => {
  const [scores, setScores] = useState();
  useEffect(async () => {
    const response = await axios.get(
      "https://ultimate-quiz-game.herokuapp.com/scores/leadersboard"
    );
    setScores(response.data);
  }, []);
  return (
    <>
      <h2>Leader Board</h2>
      {scores && (
        <table>
          <thead>
            <tr>
              <th>Category:</th>
              <th>Username:</th>
              <th>Score:</th>
            </tr>
          </thead>
          {scores.map((data, index) => (
            <Board key={`score_${index}`} data={data} />
          ))}
        </table>
      )}
    </>
  );
};

export default LeaderBoard;