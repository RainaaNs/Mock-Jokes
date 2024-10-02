import React, { useState } from "react";
import { Joke, 
  // useUpdateJoke
 } from "./hooks/usersQL";
import { useMutation } from "@apollo/client";
import { ADD_JOKE_MUTATION, UPDATE_JOKE_MUTATION } from "../api/gql";

interface AddModalProps {
  isVisible: boolean;
  onClose: () => void;
  joke?: Joke | null;
}

const AddModal: React.FC<AddModalProps> = ({ isVisible, onClose, joke }) => {
  const [updateJoke] = useMutation(UPDATE_JOKE_MUTATION);
  const [addJoke] = useMutation(ADD_JOKE_MUTATION);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<{ title: string; content: string }>({
    title: joke?.title || "",
    content: joke?.content || "",
  });

  const handleValueChange = (e: any) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (joke) {
      // update
      try {
        const { data } = await updateJoke({
          variables: {
            jokeId: parseInt(joke.id),
            joke: values,
          },
        });
        setLoading(false);
        console.log("updated", data);
        alert("Updated");
        onClose();
      } catch (err: any) {
        setLoading(false);
        console.error(err);
        throw new Error(err?.message || "Failed to update joke");
      }
    } else {
      // create
      try {
        const { data } = await addJoke({
          variables: {
            joke: values,
          },
        });
        setLoading(false);
        console.log("updated", data);
        alert("Added");
        onClose();
      } catch (err: any) {
        setLoading(false);
        throw new Error(err?.message || "Failed to update joke");
      }
    }
  };

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center pl-[50px] py-[50px] z-10">
      <div className="flex flex-col border rounded-[20px] px-[40px] pb-[30px] justify-end h-[530px] w-1/2 bg-white">
        <form onSubmit={handleSubmit}>
          <div>
            <span className="text-[25px] opacity-50">
              {joke ? "Update Joke" : "Add Joke"}
            </span>
          </div>

          {/* input fields */}
          <div className="flex flex-col mt-[50px] space-y-6">
            {/* joke title */}
            <div className="w-full h-[79px] border border-gray-300 rounded-[14px] flex items-center">
              <input
                name="title"
                placeholder="Joke Title"
                onChange={handleValueChange}
                value={values.title}
                className="focus:outline-none px-6 text-base text-wrap w-full resize-none bg-transparent"
              />
            </div>

            {/* joke content */}
            <div className="w-full h-[142px] border border-gray-300 rounded-[17px] py-4">
              <textarea
                name="content"
                placeholder="Joke Content"
                onChange={handleValueChange}
                value={values.content}
                className="focus:outline-none px-6 text-base text-wrap w-full h-full resize-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between md:gap-0 px:5 md:px-8 py-[30px]">
            <div>
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="text-white bg-activeNav text-center flex items-center justify-center p-2 md:px-6 md:py-3 font-bold rounded-[10px]"
              >
                {loading && "Hang on..."}
                {!loading && <>{joke ? "Update Joke" : "Add Joke"}</>}
              </button>
            </div>

            <div>
              <button
                className="border-activeNav border text-black p-2 md:px-6 md:py-3 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
