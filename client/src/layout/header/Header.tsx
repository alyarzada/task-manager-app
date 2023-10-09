import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
const Header = () => {
  return (
    <div className="pt-6 pb-6 flex justify-end">
      <div className="flex justify-between items-center">
        <p className="font-medium mr-3">Filankes Filankesov</p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
};

export default Header;