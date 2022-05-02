import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<Props> = ({ src, className = "", alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      className={`transition duration-150 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      alt={alt}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default Image;
