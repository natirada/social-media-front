import BaseCard from "common/Card/BaseCard";
import * as Styles from "./CreatePost.style";
import prifilePlaceholder from "assets/images/profile-placeholder.jpeg";
import Hr from "common/Hr/Hr";
import { useTranslation } from "react-i18next";
import { IoMdVideocam } from "react-icons/io";
import { BsImages } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import useToggle from "hooks/useToggle";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "common/Modal/Dialog/Dialog";
import CreatePostModal from "./CreatePostModal/CreatePostModal";
import { Profile } from "components/Profile/Profile";

interface Props {}

const actions = ["IoVideocam", "BsImages", "FaRegSmileBeam"];

const CreatePost = (props: Props) => {
  const { t } = useTranslation();
  const [isModalVisable, setIsModalVisable] = useToggle(false);

  console.log({ isModalVisable });

  return (
    <Styles.Container>
      <BaseCard width="100%" height="123px">
        <Styles.CardContainer>
          <Styles.Row>
            <Profile />
            <Styles.CreatePostBtn onClick={() => setIsModalVisable(true)}>{`${t(
              "whatDoUThink"
            )}, Nati`}</Styles.CreatePostBtn>
          </Styles.Row>
          <Hr />
          <Styles.Row>
            <Styles.ActionBtn>
              <IoMdVideocam color="red" size={30} />
              <Styles.ActionText>{t("liveVideos")}</Styles.ActionText>
            </Styles.ActionBtn>
            <Styles.ActionBtn>
              <BsImages color="green" size={30} />
              <Styles.ActionText>{`${t("photos")}/${t(
                "video"
              )}`}</Styles.ActionText>
            </Styles.ActionBtn>
            <Styles.ActionBtn>
              <FaRegSmileBeam color="orange" size={30} />
              <Styles.ActionText>{`${t("felling")}/${t(
                "activity"
              )}`}</Styles.ActionText>
            </Styles.ActionBtn>
          </Styles.Row>
        </Styles.CardContainer>
      </BaseCard>
      <CreatePostModal
        isVisable={isModalVisable}
        setIsVisable={() => setIsModalVisable(false)}
      />
    </Styles.Container>
  );
};

export default CreatePost;
