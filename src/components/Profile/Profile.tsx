import React from "react";
import styled from "styled-components";
import prifilePlaceholder from "assets/images/profile-placeholder.jpeg";

interface Props {
  imageUrl?: string;
  size?: number;
}

const Styles = {
  Image: styled.img<{
    size: number;
  }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: ${({ size }) => size / 2}px;
  `,
};

export const Profile = ({ size = 40, imageUrl }: Props) => {
  return (
    <Styles.Image
      src={imageUrl ?? prifilePlaceholder}
      alt="prifile_image"
      size={size}
    />
  );
};
