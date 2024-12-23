//import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LostFoundCard = () => {

    const handleSubmit = () =>{

    }
    return (
        <div>
            <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Create Lost/Found Post</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Post Type
        </label>
        <select
          name="postType"
          className="select select-bordered w-full"
        >
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Thumbnail
        </label>
        <input
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Enter description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <select
          name="category"
          className="select select-bordered w-full"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="pets">Pets</option>
          <option value="documents">Documents</option>
          <option value="gadgets">Gadgets</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date Lost
        </label>
        <DatePicker
          className="input input-bordered w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact Information
        </label>
        <input
          type="text"
          name="contactName"
          readOnly
          className="input input-bordered w-full mb-2"
        />
        <input
          type="email"
          name="contactEmail"
          readOnly
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </div>
    </form>
        </div>
    );
};

export default LostFoundCard;