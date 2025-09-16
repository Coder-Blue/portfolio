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
  { label: "Facebook", url: "https://facebook.com/noah1109.tran", icon: FacebookIcon },
];
