import React from 'react';

const ApprovalCard =(props)=>{
    console.log(props); 
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="ui two button">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>      
            </div>
        </div>
    ) 
};

export default ApprovalCard