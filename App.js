import { ScrollView } from "react-native";
import EntryAmount from "./src/Screenss/EntryAmount";
import Quiz from "./src/Screenss/Quiz";
import ScoreCard from "./src/Screenss/ScoreCard";
import LeaderBoard from "./src/Screenss/LeaderBoard";
function App(){ 
    return(<ScrollView>   
    <EntryAmount/>
    <ScoreCard/>
    <Quiz/>
    <LeaderBoard/>
    </ScrollView>
    )
}
export default App;