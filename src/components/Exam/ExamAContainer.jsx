import React from "react";
import Exam from "./Exam";
import {connect} from "react-redux";


let ExamContainer = (props) => {
    const categoryName = "A1,A"
    return (
        <Exam questionList = {props.questionList}
              testResult = {props.testResult}
              categoryName = {categoryName}
        />
    )
}
let mapStateToProps = (state) => {
    return{
       questionList:state.testReducer.a
    }
}

export default connect(mapStateToProps,{})(ExamContainer)