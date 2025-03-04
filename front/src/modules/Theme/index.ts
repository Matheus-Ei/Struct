// Local
import { LocalStorage } from '../Storage';
import themes from './themes';

class Theme {
  public static set(newTheme?: string) {
    const themeObj = LocalStorage.get('theme');
    const oldTheme = themeObj ? themeObj.theme : 'default';

    const theme: string = newTheme ? newTheme : oldTheme;

    document.documentElement.setAttribute('data-theme', theme);
    LocalStorage.set('theme', { theme });

    return { oldTheme, newTheme };
  }

  public static get current() {
    try {
      const { theme } = LocalStorage.get('theme');
      return theme;
    } catch (e) {
      return 'default';
    }
  }

  public static get keys(): Array<string> {
    return themes.map((item) => {
      if (typeof item === 'object') return Object.keys(item)[0];

      return item;
    });
  }

  public static get theme() {
    return themes;
  }
}

export default Theme;
