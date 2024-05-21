export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export const THEME_COLOR = {
  [LIGHT_THEME]: '#ffffff',
  [DARK_THEME]: '#171717',
};

type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

export const setTheme = (theme: Theme) => {
  document.documentElement.classList.remove(LIGHT_THEME);
  document.documentElement.classList.remove(DARK_THEME);

  document.documentElement.classList.add(theme);

  localStorage.theme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');

  if (meta) {
    meta.setAttribute('content', THEME_COLOR[theme]);
  }
};

export const getCurrentTheme = (): Theme => {
  if (localStorage.theme) {
    return localStorage.theme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;
};

export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();

  if (currentTheme === DARK_THEME) {
    setTheme(LIGHT_THEME);

    return;
  }

  setTheme(DARK_THEME);
};
