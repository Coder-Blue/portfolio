import type { Component } from "svelte";

import { FacebookIcon, GithubIcon, GmailIcon, XIcon } from "$components/icons";
import { m } from "$lib/paraglide/messages";

export const iconSize: number = 24;

export const links: { label: string; url: string }[] = [
  { label: m["footer.href_label.about"](), url: "/about" },
  { label: m["footer.href_label.projects"](), url: "/projects" },
  { label: m["footer.href_label.blog"](), url: "/blog" },
];

export const socialLinks: { label: string; url: string; icon: Component }[] = [
  { label: "Mail", url: "mailto:trananhquan1009@gmail.com", icon: GmailIcon },
  { label: "Github", url: "https://github.com/Coder-Blue", icon: GithubIcon },
  { label: "X", url: "https://x.com/sh1ro_code", icon: XIcon },
  { label: "Facebook", url: "https://facebook.com/noah.tran1109", icon: FacebookIcon },
];

export const ctaLink: { label: string; url: string }
  = { label: m["footer.href_label.contact"](), url: "/contact" };

export const langSwitcher: { label: string; mobileLabel: string; locale: "en" | "vi" }[] = [
  { label: "English", mobileLabel: "EN", locale: "en" },
  { label: "Tiếng Việt", mobileLabel: "VN", locale: "vi" },
];

export const introductionContent: { content: string }[] = [
  { content: m["about.description.paragraph1"]() },
  { content: m["about.description.paragraph2"]() },
  { content: m["about.description.paragraph3"]() },
  { content: m["about.description.paragraph4"]() },
];
