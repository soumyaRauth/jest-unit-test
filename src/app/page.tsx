import MyTextField from "./components/MyTextField";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <label htmlFor="hello">input your name</label>
      <input id="hello" type="text" />
      <MyTextField id="hello"/>
    </main>
  );
}
