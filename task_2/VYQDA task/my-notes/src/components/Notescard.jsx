// import React from "react";

// const Notescard = ({ note, deleteNote }) => {
//   return (
//     <div className="card mt-3" style={{ width: "18rem" }}>
//       <div className="card-body">
//         <h6 className="card-subtitle mb-2 text-muted">Note Content</h6>
//         <p className="card-text">{note.note}</p>
//         <button className="btn btn-danger" onClick={() => deleteNote(note._id)}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Notescard;

import React from "react";
import { MdDelete } from "react-icons/md"; // Import the delete icon

const Notescard = ({ note, deleteNote }) => {
  return (
    // <div
    //   className="card mt-3 bg-secondary bg-gradient text-white"
    //   style={{ width: "18rem" }}
    // >
    //   <div className="card-body">
    //     {/* <h6 className="card-subtitle mb-2 text-muted">Note Content</h6> */}
    //     <p className="card-text">{note.note}</p>
    //     {/* Replace the button text with an icon */}
    //     <button
    //       className="btn btn-danger"
    //       onClick={() => deleteNote(note.id)}
    //       title="Delete Note" // Add a tooltip for better accessibility
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         padding: "10px",
    //       }}
    //     >
    //       <MdDelete size={20} style={{ color: "white" }} /> {/* Delete Icon */}
    //     </button>
    //   </div>
    // </div>

    <div
      className="card mt-3 bg-secondary bg-gradient text-white"
      style={{ width: "18rem", height: "min-content" }}
    >
      <div className="card-body">
        {/* Display placeholder if content is missing */}
        <p className="card-text">{note.note || "No content available"}</p>
        <button
          className="btn btn-danger"
          onClick={() => deleteNote(note.id)}
          title="Delete Note"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <MdDelete size={20} style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default Notescard;
