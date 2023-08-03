const CustomCheckbox = ({ name }) => {
  return (
    <label className="flex items-center space-x-3">
      <input type="checkbox" className="form-checkbox h-5 w-5" />
      <span className="text-gray-800">{name}</span>
    </label>
  );
};

export default CustomCheckbox;
