import React from "react";
import Exam from "./Exam";
import {connect} from "react-redux";


let ExamContainer = (props) => {
    const categoryName = "C1,C"
    return (
        <Exam questionList = {props.questionList}
              testResult = {props.testResult}
              categoryName = {categoryName}
        />
    )
}
let mapStateToProps = (state) => {
    return{
       questionList:state.testReducer.c
    }
}

export default connect(mapStateToProps,{})(ExamContainer)