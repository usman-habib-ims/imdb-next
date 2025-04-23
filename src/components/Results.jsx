// import React from 'react'

// export default function Results({results}) {
//   return (
//     <div>
//         {
//             results.map((result) => (
//                 <div key={result.id}>
//                     <h2>{result.original_title}</h2>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title || result.name}</h2>
        </div>
      ))}
    </div>
  );
}

