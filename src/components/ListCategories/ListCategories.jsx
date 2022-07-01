import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import a from "./../../assets/image/a.png";
import b from "./../../assets/image/b.png";
import c from "./../../assets/image/c.png";
import d from "./../../assets/image/d.png";
import be from "./../../assets/image/be.png";
import t from "./../../assets/image/t.png";

const Block = styled.div`
  text-align: center;
`
const Title = styled.label`
  display: inline-block;
  font-size: 36px;
  font-weight: bold;
  text-align: center;

  padding: 50px 0;
`
const CategoryBlock = styled.div`
  max-width: 1000px;
  
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Category = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 0 30px 20px 30px;
  margin: 20px 3%;
  
  border: 2px solid black;
  border-radius: 10px;
  text-decoration: none;
  &:hover{
    box-shadow: 0 0 5px 5px black;
  }
`
const ForImg = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Img = styled.img`
  width: 200px;
  max-height: 150px;
`
const NameCategory = styled.label`
  font-size: 24px;
  color: black;
  text-align: center;
`

let ListCategories = () => {
    return(
       <Block>
           <Title>Виберуть категорію іспиту</Title>
           <CategoryBlock>
               <Category to="/exam/a">
                   <ForImg>
                       <Img src={a}/>
                   </ForImg>
                   <NameCategory>A1,A</NameCategory>
               </Category>
               <Category to="/exam/b">
                   <ForImg>
                       <Img src={b}/>
                   </ForImg>
                   <NameCategory>B1,B</NameCategory>
               </Category>
               <Category to="/exam/c">
                   <ForImg>
                       <Img src={c}/>
                   </ForImg>
                   <NameCategory>C1,C</NameCategory>
               </Category>
               <Category to="/exam/d">
                   <ForImg>
                       <Img src={d}/>
                   </ForImg>
                   <NameCategory>D1,D</NameCategory>
               </Category>
               <Category to="/exam/be">
                   <ForImg>
                       <Img src={be}/>
                   </ForImg>
                   <NameCategory>BE,CE,DE</NameCategory>
               </Category>
               <Category to="/exam/t">
                   <ForImg>
                       <Img src={t}/>
                   </ForImg>
                   <NameCategory>T</NameCategory>
               </Category>
           </CategoryBlock>
       </Block>
    )
}
export default ListCategories;