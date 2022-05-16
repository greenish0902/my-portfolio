import React, { memo } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = memo(() => {
  return (
    <div>
      <InfinitySpin color="grey" />
    </div>
  );
});

export default Loading;
