/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';

const fallbackImage = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png';

export type ProfileImageProps = React.HTMLProps<HTMLImageElement>;

export const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  const [src, setSrc] = useState<ProfileImageProps['src']>(props.src);

  const onError = () => {
    setSrc(fallbackImage);
  };

  return <img {...props} src={src} alt={props.alt} crossOrigin="anonymous" onError={onError} />;
};
