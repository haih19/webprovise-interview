export const NoData = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-[256px]">
        <img
          src="/assets/cloud.png"
          alt="No Data"
          className="aspect-square"
        />
      </div>
      <div className="text-lg font-medium text-dark text-center">
        We could not find weather information for the location above.
      </div>
    </div>
  );
};
