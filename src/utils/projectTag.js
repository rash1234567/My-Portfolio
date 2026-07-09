export const getProjectTag = (title) => {
  const t = title.toLowerCase();
  if (t.includes("ios")) return "iOS";
  if (t.includes("android")) return "Android";
  if (t.includes("app")) return "Mobile";
  return "Web App";
};
