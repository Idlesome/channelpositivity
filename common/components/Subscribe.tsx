import React from "react";

export const Subscribe = () => (
  <div className="width-65ch items-center">
    <p className="text-center">
      Did this article help you? Subscribe to get our best insights on
      meditation. We promise we will keep your data safe and send you high
      quality content! 🙏
    </p>
    <iframe
      className="m-auto"
      src="https://embeds.beehiiv.com/9d60e703-13a0-4dcc-9b0b-ccbb4cc1ec12?slim=true"
      data-test-id="beehiiv-embed"
      height="52"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  </div>
);
