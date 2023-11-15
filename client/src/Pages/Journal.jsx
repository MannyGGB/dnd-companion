import { useState, useEffect } from "react";
import moment from "moment";
const date = moment();
import axios from "axios";
import "../CSS/journal.css";
import Modal from "@mui/material/Modal";

export default function Journal({ API_Url }) {
  const currentDate = date.format("DD/MM/YYYY");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [entry, setEntry] = useState("");
  const [submission, setSubmission] = useState({
    text: "",
    date: currentDate,
  });
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    getSubmissions();
  }, []);

  function handleChange(event) {
    setSubmission({ ...submission, text: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    addSubmission();
    setSubmissions([...submissions, submission]);
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
    getSubmissions();
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
          <button onClick={handleOpen}>Edit</button>
          <button onClick={() => deleteSubmission(sub._id)}>Delete</button>
        </div>
      ))}

      <Modal id="modal" open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Edit your submission below:"></label>
          <input onChange={handleChange} type="text" />
          <button>Submit</button>
        </form>
      </Modal>
    </main>
  );
}
