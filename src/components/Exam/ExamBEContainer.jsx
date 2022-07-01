import React from "react";
import Exam from "./Exam";
import {connect} from "react-redux";


let ExamContainer = (props) => {
    const categoryName = "BE,C1E,CE,D1E,DE"
    return (
        <Exam questionList = {props.questionList}
              testResult = {props.testResult}
              categoryName = {categoryName}
        />
    )
}
let mapStateToProps = (state) => {
    return{
       questionList:state.testReducer.be
    }
}

export default connect(mapStateToProps,{})(ExamContainer)