import { useState, useEffect } from "react";
import moment from "moment";
const date = moment();
import axios from "axios";
import "../CSS/journal.css";

export default function Journal() {
  const currentDate = date.format("D/MM/YYYY");

  const [entry, setEntry] = useState("");
  const [submission, setSubmission] = useState({});
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    getSubmissions();
  }, []);

  const writtenTale = {
    text: "",
    date: "",
  };
  const [tales, addTales] = useState(writtenTale);

  function handleChange(event) {
    setEntry(event.target.value);
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
    addSubmission();
    getSubmissions();
  }

  async function addSubmission() {
    const API = `http://localhost:8080/journal`;
    await axios.post(API, submission);
  }

  async function getSubmissions() {
    const API = `http://localhost:8080/journal`;
    const res = await axios.get(API);
    setSubmissions(res.data);
  }

  return (
    <main id="journal-main">
      <h3>
        Use the journal to keep track of your journey through your sessions...
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Write your tales below:"></label>
        <input onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>

      {submissions.map((sub) => (
        <div className="submissions">
          <h3>{sub.date}</h3>
          <p>{sub.text}</p>
        </div>
      ))}
    </main>
  );
}
