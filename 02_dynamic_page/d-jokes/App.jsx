import Jokes from "./components/Jokes";

export default function App() {
    return (
        <>
            <Jokes
                // setup='I got my daughter a fridge for her birthday'
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Jokes
                setup='How did the hacker escape the police?'
                punchline="He just ransomware!"
                upvote={2}
            />
            <Jokes
                setup="Why don't pirates travel on mountain roads?"
                punchline={"Scurvy"}
            />
            <Jokes
                setup='Why do bees stay in the hive in the winter?'
                punchline="Swarm"
                upvote={9}
            />
        </>
    )
}