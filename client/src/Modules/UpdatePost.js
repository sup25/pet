import React, { useState } from "react";

const UpdatePost = ({ post, onSave, onCancel }) => {
  const [editedPost, setEditedPost] = useState({ ...post });

  const handleSave = () => {
    onSave(editedPost);
  };

  return (
    <div className="flex flex-col w-full gap-2 p-2">
      <input
        className="outline-none border-2 focus:border-[#0d5b46] rounded p-2"
        type="text"
        placeholder="Title"
        value={editedPost.title}
        onChange={(e) =>
          setEditedPost({ ...editedPost, title: e.target.value })
        }
      />
      <input
        className="outline-none border-2 focus:border-[#0d5b46] rounded p-2"
        placeholder="Type"
        type="text"
        value={editedPost.type}
        onChange={(e) => setEditedPost({ ...editedPost, type: e.target.value })}
      />
      <textarea
        className="outline-none border-2 focus:border-[#0d5b46] rounded p-2"
        placeholder="Description"
        value={editedPost.content}
        onChange={(e) =>
          setEditedPost({ ...editedPost, content: e.target.value })
        }
      />
      <div className="flex gap-2">
        <button
          className="text-white text-base font-bold w-20 rounded p-1 bg-[#0d5b46] hover:bg-[#4bc3a3]"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="text-white text-base font-bold w-20 rounded p-1 bg-red-400 hover:bg-red-700"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdatePost;
