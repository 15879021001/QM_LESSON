import React from 'react';
const TableBody = props=>{
    // console.log(props);
    const rows = props.characterData.map(
        (rows,index)=>{
            return (
                <tr key={index}>
                    <td>{rows.name}</td>
                    <td>{rows.job}</td>
                    <td><a className="btn btn-primary" href="javascript:;" onClick={()=>props.removeCharacter(index)}>删除</a></td>
                </tr>
            );
        }
    );
    
    return <tbody>{rows}</tbody>;
}

export default TableBody;