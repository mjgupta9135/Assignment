import React, { useState } from "react";

export default function Pagination({ page, setPage, items, isLoading }) {
  return (
    <div className="but flex justify-center space-x-4 mt-6">
      {/* Show the "Prev" button only if not on the first page */}
      {page !== 1 && !isLoading && (
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
      )}

      {/* Show shimmer effect when loading */}
      {isLoading ? (
        <div className="shimmer-effect w-24 h-8 bg-gray-300 rounded"></div> // Adjust shimmer style as needed
      ) : (
        items.length > 0 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )
      )}
    </div>
  );
}
