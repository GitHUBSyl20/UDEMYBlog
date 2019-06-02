import React , {component} from 'react';
import ReactDom from'react-dom'
import Comment from './Comment';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

function Comments() {
        return (
            <div>
                <div className="ui container comments">
                <ApprovalCard>
                    <Comment 
                    author="jim" 
                    timeAgo="today at 4:46PM" 
                    image={faker.image.avatar()} 
                    blogText="You Are amazing"/>
                </ApprovalCard>
                <ApprovalCard>
                <Comment 
                    author="John" 
                    timeAgo="today at 2:26PM" 
                    image={faker.image.avatar()} 
                    blogText="You Are beautiful"/>
                </ApprovalCard>
                <ApprovalCard> 
                    <Comment author="Jane" 
                    timeAgo="today at 1:06PM" 
                    image={faker.image.avatar()} 
                    blogText="Everybody likes you"/>
                </ApprovalCard>
                </div> 
            </div>
        );
}


export default Comments; 
