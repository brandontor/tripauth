import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Trip Auth",
  author: "Brandon Tor",
  description: "EVV tool for protecting against healthcare fraud",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "Brandon Tor",
  },
  links: {
    github: "https://github.com/brandontor",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
