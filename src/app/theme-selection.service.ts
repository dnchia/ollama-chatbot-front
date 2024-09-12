import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectionService {

  lightTheme: boolean = this.loadState();
  private static LIGHT_THEME_KEY = 'lightTheme';

  constructor() { }

  public isLightTheme(): boolean {
    return this.lightTheme;
  }

  public switchTheme(): void {
    this.lightTheme = !this.lightTheme;
    localStorage.setItem(ThemeSelectionService.LIGHT_THEME_KEY, this.lightTheme ? '1' : '0');
  }

  private loadState(): boolean {
    if (localStorage.getItem(ThemeSelectionService.LIGHT_THEME_KEY) != null) {
      if (localStorage.getItem(ThemeSelectionService.LIGHT_THEME_KEY) == '0') {
        return false;
      }
    }

    return true;
  }
}
