// react
import { FC } from "react";
// styles
import styles from "./SelectedItem.module.scss";
import { ISelectedItem } from "../../model/selectedItem";

interface SelectedItemProps extends ISelectedItem {}

export const SelectedItem: FC<SelectedItemProps> = ({ content }) => {
  return <div className={styles.SelectedItem}>{content}</div>;
};
