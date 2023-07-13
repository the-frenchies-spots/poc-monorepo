import useMangaMakerUi from "../useMangaMakerUi/useMangaMakerUi";

//----------------------------------------------------------------

const usePageSize = () => {
  const { pageSize, onPageSizeChange } = useMangaMakerUi();

  const handleChange = (newValue: number) => {
    if (typeof onPageSizeChange === "function") {
      onPageSizeChange((current) => newValue);
    }
  };

  return {
    pageSize,
    onChange: handleChange,
  };
};

export default usePageSize;
