import "./styles.css";
import React from "react";
import { pwa } from "pwafire";

export default function App() {
  const [title, setTitle] = React.useState();
  const [message, setMessage] = React.useState();

  const submitNotification = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      options: {
        body: message,
        tag: "pwa-test"
      }
    };
    console.table(data);
    pwa.Share(data);
    pwa.Notification(data);
  };

  return (
    <div className="App">
      <h1>PWA Notifications</h1>
      <form
        type="submit"
        onSubmit={(e) => submitNotification(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1rem"
        }}
      >
        <span style={{ margin: "1rem" }}>Title:</span>
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <span style={{ margin: "1rem" }}>Message:</span>
        <textarea
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send notification</button>
      </form>
    </div>
  );
}
