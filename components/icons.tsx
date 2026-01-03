import { FileIcon } from "lucide-react"

import { CssIcon, JsonIcon, TypeScriptIcon } from "@/assets/icons"

// Re-export all icons from assets for backwards compatibility
export {
  LogoIcon,
  GitHubIcon,
  TwitterIcon,
  CssIcon,
  TypeScriptIcon,
  JsonIcon,
  SpinnerIcon,
} from "@/assets/icons"

export function getIconForLanguageExtension(language: string) {
  switch (language) {
    case "json":
      return <JsonIcon />
    case "css":
      return <CssIcon className="fill-foreground" />
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
    case "typescript":
      return <TypeScriptIcon className="fill-foreground" />
    default:
      return <FileIcon />
  }
}
