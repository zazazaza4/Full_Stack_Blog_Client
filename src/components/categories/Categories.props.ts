export interface CategoriesProps extends React.HTMLAttributes<HTMLDivElement> {
  selectCategory: (name: string) => void;
}
