import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';
import {S} from './CurrentBankomat_stlyes';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        /*    props.money.banknotes==="Dollars"
        */
        <S.Banknote color={props.money.banknotes === 'Dollars' ? 'palegreen' : 'cadetblue'}>
            <S.Name>{props.money.banknotes}</S.Name>
            <S.Nominal> {props.money.value}</S.Nominal>
        </S.Banknote>


    );
};
const Banknote = styled.div`
  background-color: ${props => {
    return props.color;
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`;

const Name = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
`;

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  font-size: 90px;
`;


/*
import React from 'react';
import {MoneyType} from "./App";
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
       props.money.banknotes==="Dollars"
        ?<BanknoteGreen>
               <Name>{props.money.banknotes}</Name>
           <Nominal> {props.money.value}</Nominal>
           </BanknoteGreen>
           :<BanknoteBlue>
               <Name>{props.money.banknotes}</Name>
               <Nominal> {props.money.value}</Nominal>
           </BanknoteBlue>


    );
};

const BanknoteGreen = styled.div`
background-color:palegoldenrod ;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknoteBlue = styled.div`
background-color:blueviolet ;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const Name = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
 font-size: 90px;
`*/
