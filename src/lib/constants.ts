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

export const techList: { label: string; colorHex: string }[] = [
  { label: "Svelte", colorHex: "#ff3e00" },
  { label: "React", colorHex: "#58c4dc" },
  { label: "Tauri", colorHex: "#ffc131" },
  { label: "Drizzle", colorHex: "#c5f74f" },
];

export const experiencesList: {
  title: string;
  time: string;
  institution: string;
  description: string;
}[] = [
  {
    title: m["about.experiences.job_group_1.title"](),
    time: m["about.experiences.job_group_1.time"](),
    institution: m["about.experiences.job_group_1.institution"](),
    description: m["about.experiences.job_group_1.description"](),
  },
  {
    title: m["about.experiences.job_group_2.title"](),
    time: m["about.experiences.job_group_2.time"](),
    institution: m["about.experiences.job_group_2.institution"](),
    description: m["about.experiences.job_group_2.description"](),
  },
];

export const educationsList: {
  title: string;
  time: string;
  institution: string;
  description: string;
}[] = [
  {
    title: m["about.educations.school_group_1.title"](),
    time: m["about.educations.school_group_1.time"](),
    institution: m["about.educations.school_group_1.institution"](),
    description: m["about.educations.school_group_1.description"](),
  },
];
