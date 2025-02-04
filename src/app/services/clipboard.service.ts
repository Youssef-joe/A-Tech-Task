import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  copyToCilbord(text: string): boolean {
    try {
      navigator.clipboard.writeText(text);
      return true;
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch {
        textArea.remove();
        return false;
      }
    }
  }
}
