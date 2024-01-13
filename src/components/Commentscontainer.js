// import React from 'react'

// const commentsData = [
//     {
//       name: "id labore ex et quam laborum",
//       text: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//       replies: [
//         {
//           name: "quo vero reiciendis velit similique earum",
//           email: "Jayne_Kuhic@sydney.com",
//           text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//           replies: [
//             {
//               name: "quo vero reiciendis velit similique earum",
//               email: "Jayne_Kuhic@sydney.com",
//               text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//               replies: [
//                 {
//                   name: "quo vero reiciendis velit similique earum",
//                   email: "Jayne_Kuhic@sydney.com",
//                   text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "quo vero reiciendis velit similique earum",
//       email: "Jayne_Kuhic@sydney.com",
//       text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//     },
//     {
//       name: "quo vero reiciendis velit similique earum",
//       email: "Jayne_Kuhic@sydney.com",
//       text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//     },
//     {
//       name: "quo vero reiciendis velit similique earum",
//       email: "Jayne_Kuhic@sydney.com",
//      text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//       replies: [
//         {
//           name: "quo vero reiciendis velit similique earum",
//           email: "Jayne_Kuhic@sydney.com",
//          text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//           replies: [
//             {
//               name: "quo vero reiciendis velit similique earum",
//               email: "Jayne_Kuhic@sydney.com",
//              text: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   const Comment = ({data})=>{
    
//     const { name, text} = data;
//     return (
//       <div className="flex mt-4 p-2 rounded-lg">
//         <img
//           className="w-8 h-8"
//           alt="profile-icon"
//           src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//         />
//         <div className="px-3">
//           <p className="font-bold">{name}</p>
//           <p>{text}</p>
//         </div>
//       </div>
//     );
//   };
  
//   // looping to display the comment list
//   const CommentsList = ({ comments }) => {
   
//     return (comments && comments.map((comment, index) => (
//       <div key={index}>
//         <Comment data={comment} />
//         <div className="pl-5 ml-5">
//           <CommentsList comments={comment.replies} />
//         </div>
//       </div>
//     )));
//   };
  
//   const Commentscontainer = () => {
//     return (
//       <div className="m-2 p-2">
//         <div className="flex">
//           <h1 className="text-xl font-bold ml-2">Comments</h1>
//         </div>
//         <CommentsList comments={commentsData} />
//       </div>
//     );
//   };

// export default Commentscontainer
import React, { useEffect, useState } from "react";
import { COMMENTS_API, kFormatter } from "./constants";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import moment from "moment";
const CommentsList = ({ comments }) => {
  return (<>
  { comments?.map((comment) => {
        const {
          authorDisplayName,
          authorProfileImageUrl,
          textDisplay,
          publishedAt,
          likeCount,
        } = comment?.snippet?.topLevelComment?.snippet;
        return (
          <div key={comment?.id} className="flex gap-4 my-4">
            <img
              src={authorProfileImageUrl}
              alt="author"
              className="rounded-full h-10"
            />
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h3 className="text-md font-semibold text-gray-700">
                  {authorDisplayName}
                </h3>{" "}
                <p className="text-xs text-gray-500">
                  {moment(publishedAt).fromNow()}
                </p>
              </div>
              <p>{textDisplay}</p>
              <div className="flex items-center gap-2">
                <AiOutlineLike />
                {kFormatter(likeCount)}
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        );
      })}
  </>)
}
   
const Commentscontainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId);
    const json = await data.json();
    setComments(json.items);
  };

  useEffect(() => {
    getComments();
  }, [videoId]);

  return (
    <div>
      <h1 className="font-bold text-xl">{comments?.length} Comments</h1>
      <CommentsList comments={comments}/>
    </div>
  );
};

export default Commentscontainer;