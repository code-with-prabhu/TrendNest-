const URL_ENDPOINT = import.meta.env.VITE_URL_IK_ENDPOINT;
import { IKImage } from "imagekitio-react";

const Image = ({path, alt, className, w, h})=> {
    return(
        <IKImage
        urlEndpoint={URL_ENDPOINT}
        path={path}
        transformation={[
          {
            height: h,
            width: w,
          },
        ]}
        alt={alt}
        loading="lazy"
        className={className}
        lqip={{ active: true, quality: 20 }}
      />
    )
}

export default Image;