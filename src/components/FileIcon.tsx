import { FC } from "react";
import { extensions, folders } from "../mapping";

type Props = {
  name: string;
  isFolder?: boolean;
  className?: string;
};

export const FileIcon: FC<Props> = ({ name, isFolder = false, className = "" }) => {
  let iconName = "default-file";

  if (isFolder) {
    const folder = folders.supported.find(f =>
      (f.extensions ?? []).some(ext => ext === name.toLowerCase())
    );
    iconName = folder ? folder.icon : "default-folder";
  } else {
    const parts = name.split(".");
    if (parts.length > 1) {
      const extension = parts.pop()!.toLowerCase();
      const match = extensions.supported.find(e =>
        (e.extensions ?? []).some(ext => ext === extension)
      );
      if (match) {
        iconName = match.icon;
      }
    }
  }

  const SvgIcon = require(`../../icons/${iconName}.svg`).default;

  return <SvgIcon className={className} />;
};
