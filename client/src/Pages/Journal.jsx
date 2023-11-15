import { useState, useEffect } from "react";
import moment from "moment";
const date = moment();
import axios from "axios";
import "../CSS/journal.css";

export default function Journal({ API_Url }) {
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
    // change state and delete newEntry
    //
    const newEntry = {
      date: tales.date,
      text: tales.text,
    };
    setSubmission(newEntry);
    addSubmission();
    getSubmissions();
  }

  async function addSubmission() {
    const API = `${API_Url}/journal`;
    await axios.post(API, submission);
  }

  async function getSubmissions() {
    const API = `${API_Url}/journal`;
    const res = await axios.get(API);
    setSubmissions(res.data);
  }

  async function updateSubmission(event) {
    event.preventDefault();
    const API = `${API_Url}/journal/${submission._id}`;
    await axios.put(API, submission);
    setSubmissions(res.data);
  }

  async function deleteSubmission(id) {
    const check = confirm("Are you sure you want to delete?");
    if (check) {
      const API = `${API_Url}/journal/${id}`;
      await axios.delete(API);
      getSubmissions();
    } else {
      alert("Watch out!");
    }
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
          <button>Edit</button>
          <button onClick={() => deleteSubmission(sub._id)}>Delete</button>
        </div>
      ))}
    </main>
  );
}
