import { useState } from "react"
import "./Comments.css";
import CommentsForm from "./CommentsForm";
export default function Comments(){

    let [comments,setComments] = useState([{
        usrname:"@naman",
        remarks:"great job!",
        rating: 4
    }]);

    let addNewComment = (comments)=>{
        setComments((currComments) =>[...currComments,comments]);
    }
    return(
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;&nbsp;
                        <span>rating=({comment.rating})</span>
                        &nbsp;
                        <p>- {comment.usrname}</p>
                    </div>
                ))}

                
            </div>
            <hr />
            <CommentsForm addNewComment={addNewComment}/>
        </>
    )
}