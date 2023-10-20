import React, { useState, useEffect } from "react";
import axios from "axios";
import { appConfig } from "../utils/AppConfig";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { deletePost } from "../Modules/DeletePost";
import UpdatePost from "../Modules/UpdatePost";

export const GetPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postDeleted, setPostDeleted] = useState(false);

  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPost, setEditedPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(`${appConfig.apiUrl}Post`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPosts(response.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(error);
      }
    };

    fetchPosts();
  }, [postDeleted]);

  const handleDelete = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await deletePost(token, postId);
        console.log("Post deleted:", response);

        // Filter out the deleted post from the current user's posts
        const updatedPosts = posts.filter((post) => post._id !== postId);

        // Update the state with the filtered array
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (postId) => {
    setEditingPostId(postId);
    // Find the post being edited and store its data in editedPost state
    const postToEdit = posts.find((post) => post._id === postId);
    setEditedPost({ ...postToEdit });
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
  };

  const handleUpdatePost = (postId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token is missing.");
      return;
    }
    const updatePostUrl = `${appConfig.apiUrl}UpdatePost/${postId}`;
    axios
      .put(updatePostUrl, editedPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Post updated successfully:", response.data);

        setEditingPostId(null);
        setPostDeleted(true);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="flex flex-col shadow-md p-4 w-full">
        {posts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <div
                className="flex flex-col gap-4 shadow p-2 justify-between hover:bg-gray-100 rounded"
                key={post._id}
              >
                <h2>
                  {post._id === editingPostId ? editedPost.title : post.title}
                </h2>
                <h2>
                  {post._id === editingPostId ? editedPost.type : post.type}
                </h2>
                <p>
                  {post._id === editingPostId
                    ? editedPost.content
                    : post.content}
                </p>

                <div className="flex gap-2">
                  {editingPostId === post._id ? (
                    <UpdatePost
                      post={editedPost}
                      onSave={() => handleUpdatePost(post._id)}
                      onCancel={handleCancelEdit}
                    />
                  ) : (
                    <>
                      <AiOutlineEdit
                        size={20}
                        className="hover:bg-[#4dcfac] rounded-full"
                        onClick={() => handleEdit(post._id)}
                      />
                      <AiOutlineDelete
                        size={20}
                        className="hover:bg-red-400 rounded-full"
                        onClick={() => handleDelete(post._id)}
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No posts to show"
        )}
      </div>
    );
  }
};
