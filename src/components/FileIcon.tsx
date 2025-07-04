import { FC } from "react";
import { extensions, folders } from "../mapping";
import { iconMap } from "../mapping/iconMap";

type Props = {
  name: string;
  isFolder?: boolean;
} & React.SVGProps<SVGSVGElement>;

export const FileIcon: FC<Props> = ({ name, isFolder = false, ...svgProps }) => {
  let iconName = "default_file";

  if (isFolder) {
    const folder = folders.supported.find(f =>
      (f.extensions ?? []).some(ext => ext === name.toLowerCase())
    );
    iconName = folder ? `folder_type_${folder.icon}` : "default_folder";
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
