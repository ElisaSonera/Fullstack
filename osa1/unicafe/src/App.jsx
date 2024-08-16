import { useState } from "react";

/*tehtävänannossa sanottiin, että täällä olisi oikea paikka
komponentin Statistics määrittelyyn, mutta jossain muualla 
sanottiin, että konventiona on, että App on aina ylin komponentti
joten määrittelen muut komponentit App alapuolella*/

const App = () => {
  const feedback = "give feedback";
  const statistics = "statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <Header h1={feedback} />

        <Button set={setGood} button={good} text="good" />
        <Button set={setNeutral} button={neutral} text="neutral" />
        <Button set={setBad} button={bad} text="bad" />

        <Header h1={statistics} />

        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.h1}</h1>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log(good, neutral, bad);

  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  //Ei sanottu siitä mitään, että mihin StatisticsLine kuuluu laittaa
  //Laitoin siis komponentin Statistics sisään
  const StatisticLine = (props) => {
    console.log(props);

    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    );
  };

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={(good + neutral + bad) / 3} />
        <StatisticLine
          text="positive"
          value={`${((good / (good + neutral + bad)) * 100).toFixed(2)} %`}
        />
      </tbody>
    </table>
  );
};

const Button = ({ set, button, text }) => {
  console.log({ set, button, text });
  return (
    <button
      onClick={() => {
        set(button + 1);
      }}
    >
      {text}
    </button>
  );
};

export default App;
