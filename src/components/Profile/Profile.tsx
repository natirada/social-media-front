import React from "react";
import styled from "styled-components";
import prifilePlaceholder from "assets/images/profile-placeholder.jpeg";

interface Props {}

const Styles = {
  Image: styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
  `,
};

export const Profile = (props: Props) => {
  return <Styles.Image src={prifilePlaceholder} alt="prifile_image" />;
};
