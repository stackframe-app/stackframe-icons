import { extensions, folders } from "../mapping";
import { iconMap } from "../mapping/iconMap";

type FolderProps = {
  name: string;
  isFolder: true;
  opened?: boolean;
} & React.SVGProps<SVGSVGElement>;

type FileProps = {
  name: string;
  isFolder?: false;
} & React.SVGProps<SVGSVGElement>;

type Props = FolderProps | FileProps;

export const FileIcon = (props: Props) => {
  const { name, ...svgProps } = props;

  let iconName = "default_file";

  if (props.isFolder) {
    const folder = folders.supported.find(f =>
      (f.extensions ?? []).some(ext => ext === name.toLowerCase())
    );
    iconName = folder ? `folder_type_${folder.icon + (props.opened ? "_opened" : "")}` : "default_folder";
  } else {
    const parts = name.split(".");
    for (let i = 0; i < parts.length; i++) {
      const extensionCandidate = parts.slice(i).join(".").toLowerCase();

      const match = extensions.supported.find(e =>
        ([...(e.extensions ?? []), ...(e.languages?.map(lang => lang.defaultExtension) ?? [])]).some(ext => ext === extensionCandidate)
      );

      if (match) {
        iconName = `file_type_${match.icon}`;
        break;
      }
    }
  }

  const SvgIcon = iconMap[iconName] || iconMap["default_file"];
  return <SvgIcon {...svgProps} />;
};