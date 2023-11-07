/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ShowReview = ({ reviews }) => {
  const { rating, username, review, submissionTime } = reviews;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider font-bold">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-normal">{username}</td>
              <td className="px-6 py-4 whitespace-normal">{review}</td>
              <td className="px-6 py-4 whitespace-normal">{rating}</td>
              <td className="px-6 py-4 whitespace-normal">{submissionTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowReview;
