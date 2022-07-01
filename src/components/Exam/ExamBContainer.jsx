import React from "react";
import Exam from "./Exam";
import {connect} from "react-redux";


let ExamContainer = (props) => {
    const categoryName = "B1,B"
    return (
        <Exam questionList = {props.questionList}
              testResult = {props.testResult}
              categoryName = {categoryName}
        />
    )
}
let mapStateToProps = (state) => {
    return{
       questionList:state.testReducer.b
    }
}

export default connect(mapStateToProps,{})(ExamContainer)