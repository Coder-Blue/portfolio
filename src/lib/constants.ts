import type { Component } from "svelte";

import { FacebookIcon, GithubIcon, XIcon } from "$components/icons";
import { m } from "$lib/paraglide/messages";

export const iconSize: number = 24;

export const links: { label: string; url: string }[] = [
  { label: m["footer.href_label.about"](), url: "/about" },
  { label: m["footer.href_label.projects"](), url: "/projects" },
  { label: m["footer.href_label.blog"](), url: "/blog" },
];

export const socialLinks: { label: string; url: string; icon: Component }[] = [
  { label: "Github", url: "https://github.com/Coder-Blue", icon: GithubIcon },
  { label: "X", url: "https://x.com/sh1ro_code", icon: XIcon },
  { label: "Facebook", url: "https://facebook.com/noah.tran1109", icon: FacebookIcon },
];

export const ctaLink: { label: string; url: string }
  = { label: m["footer.href_label.contact"](), url: "/contact" };

export const langSwitcher: { label: string; locale: "en" | "vi" }[] = [
  { label: "English", locale: "en" },
  { label: "Tiếng Việt", locale: "vi" },
];
