import React from "react";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/minimal.css';
import { useState } from "react";

const Pagination = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="hidden lg:block">
      <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
    </div>
  );
};

export default Pagination;
