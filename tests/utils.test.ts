// # Global import
import { describe, expect, test } from '@jest/globals';
import { FiFile } from 'react-icons/fi';
import { VscJson } from 'react-icons/vsc';
import { FaReadme } from 'react-icons/fa';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { BsFileEarmarkImage, BsFileEarmarkText } from 'react-icons/bs';
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiReact, SiSvg, SiTypescript } from 'react-icons/si';

// # local import
import { getFileIcon, getFolderIcon } from '../src/utils';

describe('Utility Methods - getFileIcon', () => {
  test('Get HTML5 File Icon', () => {
    const icon = getFileIcon('hello.html');
    expect(icon).toBe(SiHtml5);
  });

  test('Get CSS3 File Icon', () => {
    const icon = getFileIcon('style.css');
    expect(icon).toBe(SiCss3);
  });

  test('Get TS File Icon', () => {
    const icon = getFileIcon('app.tsx');
    expect(icon).toBe(SiTypescript);
  });

  test('Get JS File Icon', () => {
    const icon = getFileIcon('app.js');
    expect(icon).toBe(SiJavascript);
  });

  test('Get React File Icon for JSX', () => {
    const icon = getFileIcon('app.jsx');
    expect(icon).toBe(SiReact);
  });

  test('Get Git File Icon', () => {
    const icon = getFileIcon('.gitignore');
    expect(icon).toBe(SiGit);
  });

  test('Get JSON File Icon', () => {
    const icon = getFileIcon('package.json');
    expect(icon).toBe(VscJson);
  });

  test('Get MD File Icon', () => {
    const icon = getFileIcon('README.md');
    expect(icon).toBe(FaReadme);
  });

  test('Get PNG File Icon', () => {
    const icon = getFileIcon('logo.png');
    expect(icon).toBe(BsFileEarmarkImage);
  });

  test('Get SVG File Icon', () => {
    const icon = getFileIcon('logo.svg');
    expect(icon).toBe(SiSvg);
  });

  test('Get TXT File Icon', () => {
    const icon = getFileIcon('LICENSE.txt');
    expect(icon).toBe(BsFileEarmarkText);
  });

  test('Get default File Icon', () => {
    const icon = getFileIcon('undefined');
    expect(icon).toBe(FiFile);
  });
});

describe('Utility Methods - getFolderIcon', () => {
  test('Get Folder Icon', () => {
    const icon = getFolderIcon(true);
    expect(icon).toBe(AiFillFolder);
  });

  test('Get File Icon', () => {
    const icon = getFolderIcon(false);
    expect(icon).toBe(AiFillFolderOpen);
  });

  test('Get default Folder Icon', () => {
    const icon = getFolderIcon(undefined);
    expect(icon).toBe(AiFillFolderOpen);
  });
});
