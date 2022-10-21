// import React, { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import { useSelector } from "react-redux";
// import { selectDarkMode } from "../features/slices/themeSlice";
// import swal from "sweetalert";

// function InputsMobile() {
//   const stateTask = useSelector((state) => state.tasks);
//   const darkMode = useSelector(selectDarkMode);

//   const [filter, setFilter] = useState([]);

//   useEffect(() => {
//     setFilter(stateTask);
//   }, [stateTask]);

//   const handleFilterAll = () => {
//     if (stateTask.length === 0) {
//       swal("There are no pending tasks", {
//         className: "alert",
//       });
//     } else {
//       setFilter(stateTask);
//     }
//   };

//   const handleFilterActive = () => {
//     const filterActive = stateTask.filter((item) => item.completed === false);
//     if (filterActive.length >= 1) {
//       setFilter([...filterActive]);
//     } else {
//       swal("There are no active tasks", {
//         className: "alert",
//       });
//     }
//   };

//   const handleFilterCompleted = () => {
//     const filterCompleted = stateTask.filter((item) => item.completed === true);
//     if (filterCompleted.length >= 1) {
//       setFilter([...filterCompleted]);
//     } else {
//       swal("There are no completed tasks", {
//         className: "alert",
//       });
//     }
//   };

//   let Mobile = ({ children }) => {
//     const isMobile = useMediaQuery({ query: "(max-width:500px)" });
//     return isMobile ? children : null;
//   };

//   return (
//     <Mobile>
//       <div className={`inputs__state`}>
//         <p
//           className={`inputs__all ${darkMode ? "--darkMode" : ""}`}
//           onClick={handleFilterAll}
//         >
//           All
//         </p>
//         <p
//           className={`inputs__active ${darkMode ? "--darkMode" : ""}`}
//           onClick={handleFilterActive}
//         >
//           Active
//         </p>
//         <p
//           className={`inputs__completed ${darkMode ? "--darkMode" : ""}`}
//           onClick={handleFilterCompleted}
//         >
//           Completed
//         </p>
//       </div>
//     </Mobile>
//   );
// }

// export default InputsMobile;
