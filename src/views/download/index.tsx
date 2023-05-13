import React, { memo } from 'react';
import type { ReactNode } from 'react'

// 1. 在这里定义接口，为可能传入的props定义类型
interface IProps {
    children?: ReactNode,
}

// 2. 或者在泛型中传入props应该有的类型
const Download: React.FunctionComponent<IProps> = props => {

    // const Download = (props: IProps) => {
    return (
        <div>
            download
            {/* <div>name: {props.name}</div>
            <div>age: {props.age}</div>
            <div>children: {props.children}</div>
            <div>height: {props.height}</div> */}
        </div>
    )
}

export default memo(Download)