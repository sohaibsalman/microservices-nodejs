import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map((comment) => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        } else if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        } else if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        return (
            <li className="list-group-item" key={comment.id}>
                {content}
            </li>
        );
    });

    return (
        <div className="mt-3">
            <ul className="list-group">{renderedComments}</ul>
        </div>
    );
};

export default CommentList;
