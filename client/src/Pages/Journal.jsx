import { useState } from "react";
import moment from "moment";
const date = moment();

export default function Journal() {
  const currentDate = date.format("D/MM/YYYY");

  const [entry, setEntry] = useState("");
  const [submission, setSubmission] = useState({});
  const [submissions, getSubmissions] = useState([]);

  const writtenTale = {
    text: "",
    date: "",
  };
  const [tales, addTales] = useState(writtenTale);

  function handleChange(event) {
    setEntry(event.target.value);
    console.log(entry);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTales((writtenTale) => ({
      ...writtenTale,
      text: entry,
      date: currentDate,
    }));

    const newEntry = {
      date: tales.date,
      text: tales.text,
    };
    setSubmission(newEntry);
    console.log(submission);
  }

  // async function addSubmission() {
  //   const API = ``;
  //   await axios.put(API, submission);
  // }

  // async function getSubmissions() {
  //   const API = ``;
  //   const res = await axios.get(API);
  //   getSubmissions(res.data);
  // }

  return (
    <main>
      <h3>
        Use the journal to keep track of your journey through your sessions...
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Write your tales below:"></label>
        <input onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>

      {/* {submissions[0].text &&
        submissions.map((sub) => (
          <div className="submissions">
            <h3>{sub.date}</h3>
            <p>{sub.text}</p>
          </div>
        ))} */}
    </main>
  );
}
