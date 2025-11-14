import { QuartzConfig } from "@jackyzha0/quartz/cfg"
import * as Plugin from "@jackyzha0/quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "The Asterion Garden",
    pageIcon: {
      light: "static/images/logo-optimized.png",
      dark: "static/images/logo-optimized.png",
    },
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "https://mofro.github.io/AsterionQuartz/",
    ignorePatterns: [
      "private",
      ".obsidian",
      "templates",
      "assets/.obsidian",  // Only ignore Obsidian-specific files in assets
      "assets/templates",  // Only ignore templates in assets
      "dev-notes",
      ".DS_Store",
      "**/📄 Templates/**",
      "**/node_modules/**",  // Add this to ignore node_modules
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      scss: {
        additionalData: `$base-dir: ${process.env.NODE_ENV === 'production' ? '"/AsterionQuartz"' : '""'};`
      },
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
    locale: "en-US",
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.SCSS({
        // Ensure our custom SCSS is processed after default styles
        importPaths: ["styles"],
        // Enable source maps for easier debugging
        sourceMap: true,
        // Minify the output
        style: "compressed",
      }),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets({
        directory: 'assets',
        include: ['**/*'],
        exclude: ['**/.DS_Store'],
        linkRoot: '/',
      }),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
