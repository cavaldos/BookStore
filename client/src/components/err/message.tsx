// const Message: React.FC<{ message: string }> = ({ message }) => {
//   return (
//     <>
//       <div
//         className="mb-4 rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600"
//         role="alert"
//       >
//         A simple primary alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-secondary-100 px-6 py-5 text-base text-secondary-800"
//         role="alert"
//       >
//         A simple secondary alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700"
//         role="alert"
//       >
//         A simple success alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
//         role="alert"
//       >
//         A simple danger alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800"
//         role="alert"
//       >
//         A simple warning alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-info-100 px-6 py-5 text-base text-info-800"
//         role="alert"
//       >
//         A simple info alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-neutral-50 px-6 py-5 text-base text-neutral-600"
//         role="alert"
//       >
//         A simple light alert—check it out!
//       </div>
//       <div
//         className="mb-4 rounded-lg bg-neutral-800 px-6 py-5 text-base text-neutral-50 dark:bg-neutral-900"
//         role="alert"
//       >
//         A simple dark alert—check it out!
//       </div>
//     </>
//   );
// }
// export default Message; 


// import { useState } from "react";

// const Alert = ({ message, type }: { message: string; type: string }) => {
//   const [visible, setVisible] = useState(true);

//   const onClose = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//       {visible && (
//         <div
//           className={`${
//             type === "success"
//               ? "bg-green-500"
//               : type === "error"
//               ? "bg-red-500"
//               : "bg-blue-500"
//           } text-white py-2 px-4 rounded-md w-full text-center`}
//         >
//           {message}
//           <button className="ml-2" onClick={onClose}>
//             &times;
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Alert;