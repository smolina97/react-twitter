import ReactDOM from "react-dom/client";
import Card from "./assets/FollowCard.jsx";
import Profile from "./assets/ProfileCard.jsx";
import TextArea from "./assets/TextArea.jsx";
import "./assets/css/index.css";
export default function App() {
  return (
    <>
      <section className="follower-card gap-3">
        <Card username="midudev" name="Miguel Angel Duran" />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <br />
        <TextArea />
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
