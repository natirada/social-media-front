import { FC } from "react";
import BaseCard from "common/Card/BaseCard";
import * as Styles from "./Post.style";
import { Profile } from "components/Profile/Profile";
import { BsThreeDots, BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { RiShareForwardLine } from "react-icons/ri";
import IconBtn from "common/Buttons/CircleButton";
import Text from "common/Text/Text";
import Hr from "common/Hr/Hr";
import { useTranslation } from "react-i18next";
import moment from "moment";

export interface IPost {
  date?: Date;
  content?: string;
  images?: string;
  likes?: number;
  comments?: number;
  urlImage?: string;
}
enum Times {
  MIN = 1,
  HOUR = 60,
  DAY = 24,
}

const Post: FC<IPost> = ({ date = new Date(), content, urlImage, likes }) => {
  const { t } = useTranslation();
  const user = {
    fullName: "Netanel Rada",
  };

  const diffDate = (createDate: Date) => {
    const now = moment();
    const createPostM = moment(createDate);

    if (createPostM) {
      const diffByMin = now.diff(createPostM, "minutes");
      if (diffByMin < Times.MIN) return `now`;
      if (diffByMin < Times.HOUR) return `${diffByMin} min`;

      const diffByH = now.diff(createPostM, "hour");
      if (diffByH < Times.DAY) return `${diffByH} h`;
      return `${now.diff(createPostM, "d")} d`;
    }
    return "now";
  };

  return (
    <Styles.Margin m="1rem 0">
      <BaseCard width="100%" minHeight="120px">
        <Styles.Container>
          <Styles.Header>
            <Styles.Row>
              <Profile />
              <div style={{ margin: "0 3px" }}>
                <Text fontWeight={450}>{user.fullName}</Text>
                <Styles.Row>
                  <Text fontSize="0.8125rem">{diffDate(date)}</Text>
                  <span style={{ margin: "0 2px" }}>&#x2022;</span>
                  <BsFillPeopleFill size={12} />
                </Styles.Row>
              </div>
            </Styles.Row>

            <IconBtn onClick={() => {}}>
              <BsThreeDots />
            </IconBtn>
          </Styles.Header>
          <Hr />
          <Styles.Body>
            <Text textAlign="left">{content}</Text>
            <Styles.Image src={urlImage} alt="" loading="lazy" />
          </Styles.Body>
          <Hr />
          <Styles.Footer>
            <Styles.BtnAction>
              <AiOutlineLike size={22} />
              <Styles.Margin m="0 0.2rem" />
              <Text>{t("like")}</Text>
            </Styles.BtnAction>
            <Styles.BtnAction>
              <VscComment size={22} />
              <Styles.Margin m="0 0.2rem" />
              <Text>{t("comment")}</Text>
            </Styles.BtnAction>
            <Styles.BtnAction>
              <RiShareForwardLine size={22} />
              <Styles.Margin m="0 0.2rem" />
              <Text>{t("share")}</Text>
            </Styles.BtnAction>
          </Styles.Footer>
        </Styles.Container>
      </BaseCard>
    </Styles.Margin>
  );
};

export default Post;
