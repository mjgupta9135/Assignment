import React from "react";

export default function Pagination({ page, setPage, items }) {
  return (
    <div className="but">
      {page !== 1 && (
        <button className="prev" onClick={() => setPage(page - 1)}>
          Prev
        </button>
      )}
      {items.length > 0 && (
        <button className="next" onClick={() => setPage(page + 1)}>
          Next
        </button>
      )}
    </div>
  );
}
