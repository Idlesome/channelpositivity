import React from "react";

export const Subscribe = () => (
  <div className="width-65ch items-center">
    {process.env.NODE_ENV === "production" && (
      <script
        async
        data-uid="b72c4a9eaa"
        src="https://channel-positivity.ck.page/b72c4a9eaa/index.js"
      ></script>
    )}
  </div>
);
