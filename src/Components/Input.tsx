import React, {ChangeEvent, RefObject, useState} from 'react';

type PropsType = {
    title: RefObject<HTMLInputElement>
    //setTitle: (title: string) => void
}
export const Input = (props: PropsType) => {
/*    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value);
    };*/

    return (
        <input ref={props.title}  />
    );
};

