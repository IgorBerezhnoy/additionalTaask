import React from 'react';
import {PagesType} from '../../DataState/DataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PropsType = {
    pages: Array<PagesType>
}
export const Page = (props: PropsType) => {
    const params = useParams();
    const pageNumber = Number(params.id);
    console.log(params.id);

    return (
        props.pages[pageNumber]?
        <div>
            <div>{props.pages[pageNumber].about}</div>
            <div>{props.pages[pageNumber].heading}</div>
        </div>
            :<Error404/>
    );
};

