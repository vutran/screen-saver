const { exec, execFile } = require('child_process');

/**
 * Starts the screensaver.
 *
 * @return {null|ChildProcess}
 */
module.exports = () => {
  if (process.platform === 'darwin') {
    return execFile('open', ['/System/Library/Frameworks/ScreenSaver.framework/Versions/A/Resources/ScreenSaverEngine.app']);
  } else if (process.platform === 'win32') {
    return execFile('cmd.exe', ['/c', 'for', '/f', 'tokens=3* delims= ', '%a', 'in', '(\'reg', 'query', 'HKCU\\Control Panel\\Desktop', '/v', 'SCRNSAVE.EXE\')', 'do', '%a', '/run']);
  } else if (process.platform === 'linux') {
    return exec('xdg-screensaver', ['activate']);
  }
  return null;
};
