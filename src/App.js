import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListCategories from "./components/ListCategories/ListCategories";
import ExamAContainer from "./components/Exam/ExamAContainer";
import ExamBContainer from "./components/Exam/ExamBContainer";
import ExamCContainer from "./components/Exam/ExamCContainer";
import ExamDContainer from "./components/Exam/ExamDContainer";
import ExamBEContainer from "./components/Exam/ExamBEContainer";
import ExamTContainer from "./components/Exam/ExamTContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ListCategories/>}/>
                    <Route path="/exam/a" element={<ExamAContainer/>}/>
                    <Route path="/exam/b" element={<ExamBContainer/>}/>
                    <Route path="/exam/c" element={<ExamCContainer/>}/>
                    <Route path="/exam/d" element={<ExamDContainer/>}/>
                    <Route path="/exam/be" element={<ExamBEContainer/>}/>
                    <Route path="/exam/t" element={<ExamTContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;