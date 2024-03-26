import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
  background-size: cover;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 90vw;
  margin-top: 10px;
  @media screen and (min-width: 992px) {
    width: 70vw;
  }
`

export const EachItem = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    width: 170px;
    height: 130px;
    justify-content: center;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 22px;
  padding: 0px;
  margin: 3px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const Score = styled(ScoreHeading)`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const UnorderedImagesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 95vw;
  padding: 0px;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-size: 16px;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    font-size: 26px;    
    width: 150px;
    height: 60px;
    margin-right: 20px;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 50vh;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`
export const RulesImage = styled.img`
  width: 100%;
  height: 80%;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    height: 90%;
  }
`
export const FinalResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 70vw;
`
export const EachImage = styled.img`
  width: 150px;
  height: 100px;
  @media screen and (min-width: 567px) {
    width: 250px;
    height: 180px;

  @media screen and (min-width: 992px) {
    width: 300px;
    height: 230px;
  } 
`
export const ParaEle = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    font-size: 26px;
  } 
`
export const PlayButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  width: 120px;
  height: 35px;
  font-family: 'Bree Serif';
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 160px;
    height: 50px;
  }  
`
