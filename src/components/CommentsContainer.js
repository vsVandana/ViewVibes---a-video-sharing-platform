import React from 'react'
import CommentList from './CommentList'

const commentData = [
    {
     name : "Vandana Sharma",
     text : "This is an helpful video",
     replies : []
    },
    {
     name : "Vandana Sharma",
     text : "This is an helpful video",
     replies : [{
        name : "Vandana Sharma",
        text : "This is an helpful video",
        replies : [{
            name : "Vandana Sharma",
            text : "This is an helpful video",
            replies : [{
                name : "Vandana Sharma",
                text : "This is an helpful video",
                replies : [{
                    name : "Vandana Sharma",
                    text : "This is an helpful video",
                    replies : []
                   },]
               },]
           }]
       },]
    },
    {
        name : "Vandana Sharma",
        text : "This is an helpful video",
        replies : [{
            name : "Vandana Sharma",
            text : "This is an helpful video",
            replies : []
           },]
       },
]

const CommentsContainer = () => {
  return (
    <div className='ps-20 w-[1000px]'>
    <div className='text-xl py-1'>Comments: </div>
    <CommentList comments={commentData} />
    </div>
  )
} 

export default CommentsContainer