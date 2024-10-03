import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// async function enableMocking() {
//   if (!Boolean(import.meta.env.VITE_ENABLE_MSW)) {
//     return
//   }

//   const { worker } = await import('./msw/workers')

//   // `worker.start()` returns a Promise that resolves
//   // once the Service Worker is up and ready to intercept requests.
//   return worker.start()
// }
// enableMocking().then(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// });