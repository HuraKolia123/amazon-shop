// react
import { FC, useState } from "react";
// styles
import styles from "./HeaderCleverSearchInput.module.scss";
import { HeaderInput } from "../HeaderInput/HeaderInput";
import { HeaderSelect } from "@/widgets/headerCleverSearch/ui/HeaderSelect/HeaderSelect";

interface HeaderCleverSearchInputProps {}

export const HeaderCleverSearchInput: FC<
  HeaderCleverSearchInputProps
> = ({}) => {
  const [selectedOption, setSelectedOption] = useState("All");
  return (
    <div className={styles.HeaderCleverSearchInput}>
      <HeaderSelect
        //@ts-ignore
        selectedOption={selectedOption}
        //@ts-ignore
        setSelectedOption={setSelectedOption}
      />
      <HeaderInput onChange={() => {}} value="" />
    </div>
  );
};
