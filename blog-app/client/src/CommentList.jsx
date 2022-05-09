import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map((comment) => {
        return (
            <li className="list-group-item" key={comment.id}>
                {comment.content}
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
