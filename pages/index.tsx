import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useAppSelector, useAppDispatch } from "../store/index";
import { changeText } from "../store/test/firstTest.slice";
import {
  changeValue,
  incrementByAmount,
  decrementByAmount,
  toggleState,
} from "../store/test/secondTest.slice";
import { fetchToDoList } from "../store/test/fetch.thunk";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const firstTestTodoList = useAppSelector(
    ({ firstTest }) => firstTest.todoList
  );
  const firstTestValue = useAppSelector(({ firstTest }) => firstTest.text);
  const secondTestValue = useAppSelector(({ secondTest }) => secondTest.value);
  const secondTestCount = useAppSelector(({ secondTest }) => secondTest.count);
  const secondTestBoolean = useAppSelector(
    ({ secondTest }) => secondTest.active
  );

  const changeFirstTestValue = () => {
    dispatch(changeText("changed first test value~"));
  };

  const updateCount = (type: string) => {
    if (type === "increase") {
      dispatch(incrementByAmount(1));
    } else if (type === "decrease") {
      dispatch(decrementByAmount(1));
    }
  };

  const changeSecondTestValue = () => {
    dispatch(changeValue("changed second test value!"));
  };

  const toggleSecondTestState = () => {
    dispatch(toggleState());
  };

  const test = () => {
    dispatch(fetchToDoList());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>firstTestTodoList</p>
        {firstTestTodoList.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
        <button onClick={test}>add todos</button>

        <p>firstTestValue: {firstTestValue}</p>
        <button onClick={changeFirstTestValue}>Change FirstTest value</button>

        <p>secondTestCount: {secondTestCount}</p>
        <button onClick={() => updateCount("increase")}>Increase Count</button>
        <button onClick={() => updateCount("decrease")}>Decrease Count</button>

        <p>secondTestValue: {secondTestValue}</p>
        <button onClick={changeSecondTestValue}>Change SecondTest value</button>

        <p>secondTestBoolean: {secondTestBoolean ? "true" : "false"}</p>
        <button onClick={toggleSecondTestState}>
          Toggle Second Test Boolean
        </button>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
