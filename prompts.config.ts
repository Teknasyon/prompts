import { defineConfig } from "@/lib/config";

// Set to true to use clone branding (hide prompts.chat repo branding)
const useCloneBranding = true;

export default defineConfig({
  // Branding - customize for white-label
  branding: {
    name: "Teknasyon Prompts",
    logo: "/logo.svg",
    logoDark: "/logo-dark.svg",
    favicon: "/logo.svg",
    description: "Teknasyon'un yapay zeka promptlarını keşfedin, paylaşın ve yönetin. Yazılım geliştirme, İK, finans, pazarlama, içerik üretimi, veri analizi ve daha fazlası için optimize edilmiş prompt şablonları.",
  },

  // Theme - design system configuration
  theme: {
    // Border radius: "none" | "sm" | "md" | "lg"
    radius: "sm",
    // UI style: "flat" | "default" | "brutal"
    variant: "default",
    // Spacing density: "compact" | "default" | "comfortable"
    density: "default",
    // Colors (hex or oklch)
    colors: {
      primary: "#007de8", // Indigo
    },
  },

  // Authentication plugins
  auth: {
    // Available: "credentials" | "google" | "azure" | "github" | custom
    // Use `providers` array to enable multiple auth providers
    providers: ["google"],
    // Allow public registration (only applies to credentials provider)
    allowRegistration: false,
  },

  // Storage plugin for media uploads
  storage: {
    // Available: "url" | "s3" | custom
    provider: "url",
  },

  // Internationalization
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr",
  },

  // Features
  features: {
    // Allow users to create private prompts
    privatePrompts: true,
    // Enable change request system for versioning
    changeRequests: true,
    // Enable categories
    categories: true,
    // Enable tags
    tags: true,
    // Enable AI-powered semantic search (requires OPENAI_API_KEY)
    aiSearch: true,
    // Enable AI-powered generation features (requires OPENAI_API_KEY)
    aiGeneration: true,
  },

  // Homepage customization
  homepage: {
    // Set to true to hide prompts.chat repo branding and use your own branding
    useCloneBranding,
    achievements: {
      enabled: !useCloneBranding,
    },
    sponsors: {
      enabled: !useCloneBranding,
      items: [],
    },
  },
});
