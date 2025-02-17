// react
import { FC } from "react";
//assets
//query
// import { useGetCategoryItemsQuery } from "@/entities/utility/productCategoryList";
//ui
// import { ProductCategoryQuery } from "@/pages/search/ui/ProductCategoryQuery";
import { Drawer } from "@/widgets/drawer_/ui/Drawer/Drawer";
// import { Loader } from "@/shared/ui/Loader";
// styles
import styles from "./HeaderDrawer.module.scss";
// import { ErrorComponent } from "@/shared/ui/Error/ErrorComponent";
import { mokCategoriesData } from "@/pages/search/libs/constants/mokCategoriesData";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/pages/search/model/selectors";
import { IProductCategoryItem } from "@/entities/utility/productCategoryList/model/types/productCategoryList";
import { productPageActions } from "@/pages/search/model/slice";
import { ProductCategoryItem } from "@/entities/utility/productCategoryList/ui/productCategoryItem";
import { HeaderDrawerTopSide } from "../HeaderDrawerTopSide/HeaderDrawerTopSide";

interface HeaderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderDrawer: FC<HeaderDrawerProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const selectedCategoryId = useSelector(getCategory);

  const onCategoryClick = (id: IProductCategoryItem["id"]) => {
    dispatch(productPageActions.setCategory(id));
  };

  // const mokCategoryList = mokCategoriesData.map((item) => {
  //   return (
  //     <div className={styles.mokCategoryName} key={item.id}>
  //       {item.name}
  //     </div>
  //   );
  // });

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <HeaderDrawerTopSide />
      <div className={styles.bottomDrawerSide}>
        {mokCategoriesData.map((item) => {
          return (
            <ProductCategoryItem
              id={item.id}
              key={item.id}
              name={item.name}
              onCategoryClick={onCategoryClick}
              isSelected={selectedCategoryId === item.id}
            />
          );
        })}
      </div>
    </Drawer>
  );
};

// const { isFetching, isLoading, error } = useGetCategoryItemsQuery(
//   {
//     country: "US",
//   },
//   { skip: !isOpen }
// );

// const getDrawerContent = () => {
//   if (isLoading || isFetching) {
//     return <Loader className={styles.categoryLoader} />;
//   }

//   if (error) {
//     return <ErrorComponent className={styles.errorCategory} />;
//   }

//   return <ProductCategoryQuery />;
// };
