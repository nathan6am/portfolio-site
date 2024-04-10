interface Props {
  icon: string | React.FC<any>;
  label: string;
}

const SkillTag: React.FC<Props> = ({ icon: Icon, label }) => {
  return (
    <li className="flex flex-row items-center bg-themeLight/[0.1] text-themeLight rounded-md px-4 shadow py-3 mr-2 mb-2 sm:mr-4 sm:mb-4">
      {typeof Icon === "string" ? (
        <img src={Icon} alt={label} className="w-6 h-6 mr-2 inline" />
      ) : (
        <Icon className="w-6 h-6 mr-2 fill-white text-white inline" />
      )}
      {label}
    </li>
  );
};

export default SkillTag;
