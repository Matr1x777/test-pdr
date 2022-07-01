import React from "react";
import Exam from "./Exam";
import {connect} from "react-redux";


let ExamContainer = (props) => {

    return (
        <Exam questionList = {props.questionList}
              testResult = {props.testResult}
        />
    )
}
let mapStateToProps = (state) => {
    return{
       questionList:state.testReducer.b
    }
}

export default connect(mapStateToProps,{})(ExamContainer)