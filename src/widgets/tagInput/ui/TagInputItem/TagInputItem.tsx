// react
import { FC } from "react";
//types
import { ITag } from "../../model/types/types";
//assets
import Cross from "../../libs/assets/svg/cross.svg?react";
// styles
import styles from "./TagInputItem.module.scss";

interface TagInputItemProps extends ITag {
  tags: ITag[];
}

export const TagInputItem: FC<TagInputItemProps> = ({ text }) => {
  return (
    <div className={styles.TagInputItem}>
      {text}
      {
        <div className={styles.closeIcon}>
          <Cross />
        </div>
      }
    </div>
  );
};
