import { ProductDealsAndDiscountsType } from "@/shared/libs/types/deals_and_discounts";
import { ProductConditionType } from "@/shared/libs/types/product_condition";
import { SortByType } from "@/shared/libs/types/sortBy";
import { useSearchParams } from "react-router-dom";

interface SearchParams {
  category_id?: string;
  deals_and_discounts?: ProductDealsAndDiscountsType;
  max_price?: number;
  min_price?: number;
  page: number;
  product_condition?: ProductConditionType;
  query: string;
  sort_by?: SortByType;
}
export const useSearchProductParams = (): SearchParams => {
  const [searchParams] = useSearchParams();

  const getParam = <T>(key: string) => searchParams.get(key) as T;

  const getNumberParam = (key: string) => {
    const value = searchParams.get(key);
    return value !== null && !isNaN(Number(value)) ? Number(value) : undefined;
  };

  return {
    page: getNumberParam("page") || 1,
    query: getParam("query") || "",
    sort_by: getParam("sort_by") || "RELEVANCE",
    product_condition: getParam("product_condition") || "ALL",
    deals_and_discounts: getParam("deals_and_discounts") || "NONE",
    category_id: getParam("category_id") || undefined,
    min_price: getNumberParam("min_price") || 0,
    max_price: getNumberParam("max_price") || 0,
  };
};
