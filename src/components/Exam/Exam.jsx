import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ExamBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(40, 44, 52, 0.2);
  min-height: 95vh;
  padding-bottom: 100px;
`
const Title = styled.div`
  text-align: center;
  padding: 50px 0;
`
const H1 = styled.h1`
  margin: 0;
`
const P = styled.p`
  display: inline-block;
  max-width: 600px;
`
const StartTest = styled.button`
  display: inline-block;

  padding: 10px 30px;
  margin-top: 50px;

  font-size: 18px;
  font-weight: bold;

  color: #0c2803;
  background-color: rgba(0, 128, 0, 0.49);
  border: 1px solid #18691f;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 10px 10px rgba(42, 70, 0, 0.53);
  }
`
const Question = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 20px auto;
  padding: 20px;
`
const TopInformationBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CountdownTimer = styled.label`
  font-size: 18px;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
`
const ListQuestions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  padding: 20px 0;
  
`
const ListQuestionsBtn = styled.button`
    width: 30px;

  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  &:hover{
    box-shadow: 0 0 3px 3px black;
  }
`
const TrueListBtn = styled(ListQuestionsBtn)`
  background-color: rgba(0, 128, 0, 0.47);
`
const FalseListBtn = styled(ListQuestionsBtn)`
  background-color: rgba(128, 0, 23, 0.47);
`
const BodyQuestion = styled.div`
  width: 70%;

  margin: 20px auto;
  padding: 20px;
  
  background-color: white;
  border: 2px solid #a49c9c;
  border-radius: 10px;
`
const Number = styled.label`
  align-self: flex-end;
`
const QuestionText = styled.label`
  align-self: center;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
`
const WarningText = styled.label`
  font-size: 14px;
  color: rgb(121, 118, 118);
  align-self: flex-end;
`
const Variable = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  &:hover{
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    margin-left: 9px;
  }
`
const Input = styled.input`
  margin-right: 10px;
`
const TrueInput = styled(Variable)`
  background-color: rgba(1, 110, 1, 0.8);
`
const FalseInput = styled(Variable)`
  background-color: rgba(239, 0, 41, 0.7);
`
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const NavigationBtn = styled.button`
  padding: 10px 40px;
  
  font-size: 14px;
  font-weight: bold;
  
  border-radius: 10px;
  &:hover{
    box-shadow: 0 0 5px 5px black;
  }
`
const FinalBlock = styled.div`
  width: 70%;
  height: 500px;

  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  text-align: center;

  background-color: rgba(0, 0, 0, 0.47);
  border: 2px dotted #070000;
  border-radius: 10px;
`
const FText = styled.label`
  color: #000901;
  font-weight: bold;
  font-size: 36px;
`
const SText = styled.label`
  font-size: 18px;
  color: white;
  
  padding: 10px 0;
`
const MiniResBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  margin: 50px 0;
`
const NavBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const ReloadTestBtn = styled.button`
  max-width: 200px;
  
  padding: 10px 30px;
  border-radius: 10px;
  font-weight: bold;
  &:hover{
    box-shadow: 0 0 5px 5px black;
  }
`
const GoHomeBtn = styled(NavLink)`
  margin-top: 20px;
  padding: 5px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  color: black;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #010200;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
  }
`
const AnswerList = styled.label`

`

let Exam = (props) => {
    const [status, setStatus] = useState(0)


    let examStart = () => {
        setStatus(1)
    }
    let examEnd = () => {
        setStatus(2)
    }

    let [actualQuestion,setActualQuestion] = useState(1);
    let actualQuestionQuery = props.questionList[actualQuestion];

    let [progressedCount,setProgressedCount] = useState(0);
    let [failedCount,setFailedCount] = useState(2);
    let [trueCount, setTrueCount] = useState(0)
    let [allResults,setAllResults] = useState([
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""},
        {questionResult:""}

    ])

    let [minutes,setMinutes] = useState(19)
    let [seconds,setSeconds] = useState(60)
    useEffect(() => {
        let timer = setTimeout(() => {
            if (seconds > 0 && minutes >= 0) {
                setSeconds(seconds -= 1)
            } else if(seconds === 0 && minutes > 0){
                setMinutes(minutes-=1)
                setSeconds(59)
            }else {
                examEnd()
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        };

    }, [seconds])


    let ExamProcess = () => {
        let nextQuestion = () => {
            setActualQuestion(actualQuestion += 1)
        }
        let previousQuestion = () => {
            setActualQuestion(actualQuestion -= 1)
        }
        let selectQuestion = (number) => {
            setActualQuestion(number)
        }

        let checkAnswer = (userAnswer, questionId) => {
            let trueAnswer = actualQuestionQuery.trueAnswer; /*Правильна відповідь*/

            setProgressedCount(progressedCount += 1)
            let sss = allResults;
            if (userAnswer === trueAnswer) {
                sss[questionId].questionResult = true;
                setAllResults(sss)
                setTrueCount(trueCount += 1)
            } else {
                sss[questionId].questionResult = false;
                setAllResults(sss)
                if (failedCount > 0) {
                    setFailedCount(failedCount -= 1)
                } else {
                    examEnd()
                }
            }
            if (progressedCount === 20) {
                examEnd()
            }

        }

        if(status === 1){
            return(
                <BodyQuestion>
                    <Question>
                      <TopInformationBlock>
                          <Col>
                              <label>Виконано: <b>{progressedCount}/20</b></label>
                              <label>Право на помилку: <b>{failedCount}</b></label>
                              <label>Правильних відповідей: <b>{trueCount}</b></label>
                          </Col>
                          <CountdownTimer>Залишилося часу: <b>{minutes}:{seconds}</b></CountdownTimer>
                      </TopInformationBlock>
                        <ListQuestions>
                        {props.questionList.map(e => {
                            if (e.id > 0 ){
                               if (allResults[e.id].questionResult === true){
                                    return (
                                        <TrueListBtn onClick={()=>{selectQuestion(e.id)}}>{e.id}</TrueListBtn>
                                    )
                                }else if (allResults[e.id].questionResult === false){
                                    return (
                                        <FalseListBtn onClick={()=>{selectQuestion(e.id)}}>{e.id}</FalseListBtn>
                                    )
                                }else {
                                    return (
                                        <ListQuestionsBtn onClick={()=>{selectQuestion(e.id)}}>{e.id}</ListQuestionsBtn>
                                    )
                                }
                            }
                        })}</ListQuestions>
                        <Number> Питання № <b>{actualQuestion}</b></Number>
                        <QuestionText>{actualQuestionQuery.text}</QuestionText>
                        {actualQuestionQuery.answers.map(answerText=>{
                            if(allResults[actualQuestion].questionResult === ""){
                                return(
                                    <Variable key={Math.random()}>
                                        <Input type="radio"
                                               name={"question"+actualQuestionQuery.id}
                                               onClick={()=>{checkAnswer(answerText,actualQuestion)}}
                                        />
                                        {answerText} {/*Варіант відповіді*/}
                                    </Variable>
                                )
                            }else {
                                if (answerText === actualQuestionQuery.trueAnswer){
                                    return(
                                        <TrueInput key={Math.random()}>
                                            <Input type="radio"
                                                   name={"question"+actualQuestionQuery.id}
                                                   disabled
                                                   onClick={()=>{checkAnswer(answerText,actualQuestion)}}
                                            />
                                            {answerText} {/*Варіант відповіді*/}
                                        </TrueInput>
                                    )
                                }else {
                                   if (answerText !== actualQuestionQuery.trueAnswer){
                                       return(
                                           <FalseInput key={Math.random()}>
                                               <Input type="radio"
                                                      name={"question"+actualQuestionQuery.id}
                                                      disabled
                                                      onClick={()=>{checkAnswer(answerText,actualQuestion)}}
                                               />
                                               {answerText} {/*Варіант відповіді*/}
                                           </FalseInput>
                                       )
                                   }
                                }

                            }
                        })}

                        <WarningText>Виберіть одну відповідь</WarningText>
                    </Question>
                    <Navigation>
                        {actualQuestion === 1 ? "" : <NavigationBtn  onClick={previousQuestion}>ᐸ Назад</NavigationBtn>}
                        {actualQuestion === 20 ? "" : <NavigationBtn onClick={nextQuestion}>Вперед ᐳ</NavigationBtn>}
                    </Navigation>
                </BodyQuestion>
            )
        }else if(status === 2){
            return (
                <FinalBlock>
                    <FText>{trueCount <= 18 ? "Невдача :(" : "Вітаємо!"}</FText>
                    <SText>{trueCount <= 18 ? "Нажаль іспит не здано" : "Ти успішно здав цей іспит"}</SText>
                  <MiniResBlock>
                      <AnswerList>Правильних відповідей: <b>{trueCount}/20</b></AnswerList>
                  </MiniResBlock>
                  <NavBtns>
                      <ReloadTestBtn onClick={()=>{ window.location.reload();}}>Перезапустити тест </ReloadTestBtn>
                      <GoHomeBtn to="/"> На головну</GoHomeBtn>
                  </NavBtns>
                </FinalBlock>
            )
        }else if(status === 0){
            return (
                <NavBtns>
                    <StartTest onClick={examStart}>Почати іспит</StartTest>
                    <GoHomeBtn to="/">НАЗАД</GoHomeBtn>
                </NavBtns>
            )
        }

    }
    return (
        <ExamBlock>
            <Title>
                <H1>Іспит з категорії : {props.categoryName}</H1>
                <P>Мета всіх завдань – поглибити теоретичні знання та допомогти якісно
                    підготуватися до іспиту з правил дорожнього руху. Ми зробимо все,
                    щоб ви підготували білети та отримали права. З нами ви гарантовано
                    засвоїте необхідні знання з ПДР України.</P>
            </Title>
            <ExamProcess/>
        </ExamBlock>
    )
}

export default Exam