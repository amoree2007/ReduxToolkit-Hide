import React from "react";

const Loding = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <p colSpan={3}>loding please whit</p>
      ) : error ? (
        <p colSpan={3}>loding please whit</p>
      ) : (
        children
      )}
    </>
  );
};

export default Loding;
