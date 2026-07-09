const CAREER_START_YEAR = 2022

export const getYearsExperience = () => {
  const years = new Date().getFullYear() - CAREER_START_YEAR
  return `${Math.max(years, 4)}+`
}
