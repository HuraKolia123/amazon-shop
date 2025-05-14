// react
import { Dispatch, FC } from "react";
//types
import { ITag } from "../../model/types/types";
// ui
import { TagInputItemList } from "../TagInputItemList/TagInputItemList";
import { TagAddInput } from "../TagAddInput/TagAddInput";
// styles
import styles from "./TagInput.module.scss";

interface TagInputProps {
  tags: ITag[];
  setTags: Dispatch<React.SetStateAction<ITag[]>>;
}

export const TagInput: FC<TagInputProps> = ({ setTags, tags }) => {
  return (
    <div className={styles.TagInput}>
      <TagInputItemList tags={tags} />
      <TagAddInput setTags={setTags} />
    </div>
  );
};
