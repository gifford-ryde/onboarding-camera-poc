import { useState, useEffect } from "react";

/**
 * In the event that the video (v) is larger than it's parent container (c), calculate offsets
 * to center the container in the middle of the video.
 **/
const useOffsets = (vWidth, vHeight, cWidth, cHeight) => {
  const [offsets, setOffsets] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (vWidth && vHeight && cWidth && cHeight) {
      const x = vWidth > cWidth ? Math.round((vWidth - cWidth) / 2) : 0;
      const y = vHeight > cHeight ? Math.round((vHeight - cHeight) / 2) : 0;

      setOffsets({ x, y });
    }
  }, [vWidth, vHeight, cWidth, cHeight]);

  return offsets;
};

export default useOffsets;
