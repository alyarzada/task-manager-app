import { ButtonProps } from "./button";

interface ICustomComponentProps {
  id: number;
  name?: string;
}

const CustomComponent: React.FC<ICustomComponentProps> = ({
  name,
  id,
  ...props
}) => {
  return (
    <button {...props}>
      {name} {id}
    </button>
  );
};

export default CustomComponent;
