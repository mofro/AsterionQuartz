import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-header")}>
      <a href={baseDir} class="logo-link">
        <img src="/static/logo.png" alt={title} class="logo" />
        <h1 class="logo-text">{title}</h1>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.logo {
  height: 2rem;
  width: auto;
}

.logo-text {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  display: none; /* Hide text initially, show only logo */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
