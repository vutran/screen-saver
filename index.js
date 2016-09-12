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
    return execFile('nircmd.exe', ['screensaver']);
  } else if (process.platform === 'linux') {
    return exec('xdg-screensaver', ['activate']);
  }
  return null;
};
