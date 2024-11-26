'use client';

import AppLogo from "./AppLogo";

export default function AppHeader() {

 const showMsg = () => {
    alert("Hello Next.js");   
 }

  return (
    <div>
      <h1 className="header">AppHeader</h1>
      <p>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
      <p style={{ color: "red" }}>Hello React</p>
      <AppLogo />
      <button onClick={showMsg}>Click Me</button>
    </div>
  );
}
