interface IFiltersGroupProps {
  title: string;
  children: React.ReactNode;
}

const FiltersGroup = (props: IFiltersGroupProps) => {
  return (
    <div className="filters__group">
      <div className="filters__group__title">{props.title}</div>
      <div className="filters__group__list">{props.children}</div>
    </div>
  );
};

export default FiltersGroup;
