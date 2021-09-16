import React, { FC, useCallback, useState } from "react";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "common/Modal/Dialog/Dialog";
import httpService from "api/service.http";
import { ApiRequests } from "api/api.endpoints";
import { IoIosImage } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSmile } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import * as Styles from "./CreatePostModal.style";
import { useTranslation } from "react-i18next";
import { DragAndDropPhoto } from "components/DragAndDropPhoto/DragAndDropPhoto";
import Text from "common/Text/Text";

interface Props {
  isVisable: boolean;
  setIsVisable: () => void;
}

const postActions = [
  {
    icon: <IoIosImage size={25} color="#00A400" />,
  },
  {
    icon: <BsFillPeopleFill size={25} color="#3578E5" />,
  },
  {
    icon: <BiSmile size={25} color="#f7c848" />,
  },
  {
    icon: <GoLocation size={25} color="rgb(255, 106, 0)" />,
  },
];

const CreatePostModal: FC<Props> = ({ isVisable, setIsVisable }) => {
  const { t } = useTranslation();
  const [showDragAndDropImage, setShowDragAndDropImage] = useState(false);
  const [post, setPost] = useState("");
  const [image, setImage] = useState<null | Blob>(null);

  const closeDragAndDropImageCard = () => {
    setShowDragAndDropImage(false);
    setImage(null);
  };

  const onSubmit = async () => {
    const bodyFormData = new FormData();
    image && bodyFormData.append("image", image);
    bodyFormData.append("content", post);
    bodyFormData.append("userId", "6133a20a256618239412b5f0");
    console.log({ post, image });
    const res = await httpService.post(ApiRequests.POST, bodyFormData, {
      "Content-Type": "multipart/form-data",
    });

    console.log({ res });
  };

  return (
    <Styles.Container>
      <Dialog isVisable={isVisable} handleClose={setIsVisable}>
        <DialogTitle>{t("createPost")}</DialogTitle>
        <DialogContent>
          <Styles.BodyDialog>
            <Styles.TextArea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder={`${t("whatDoUThink")} ?`}
            />
            {showDragAndDropImage && (
              <DragAndDropPhoto
                handleClose={closeDragAndDropImageCard}
                setAsset={(image) => setImage(image)}
              />
            )}
            <Styles.AddToPostContainer>
              <Text fontWeight={500}>{t("addToYourPost")}</Text>
              <div>
                {postActions.map((a) => (
                  <Styles.PostActionBtn
                    onClick={() => setShowDragAndDropImage(true)}
                  >
                    {a.icon}
                  </Styles.PostActionBtn>
                ))}
              </div>
            </Styles.AddToPostContainer>
          </Styles.BodyDialog>
        </DialogContent>
        <DialogActions>
          <Styles.BtnSubmit disabled={!post && !image} onClick={onSubmit}>
            <Text fontWeight={400}>POST</Text>
          </Styles.BtnSubmit>
        </DialogActions>
      </Dialog>
    </Styles.Container>
  );
};

export default CreatePostModal;
