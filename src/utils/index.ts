// # assets import
import { FiFile } from 'react-icons/fi';
import { FaReadme } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import { BsFileEarmarkImage, BsFileEarmarkText } from 'react-icons/bs';
import { SiTypescript, SiJavascript, SiReact, SiHtml5, SiCss3, SiGit, SiSvg } from 'react-icons/si';

// # Local import
import { TreeType } from '../components/FileView/types';

export const initialFileStructure: TreeType = {
  id: 'root',
  module: 'react-file-explorer',
  collapsed: false,
  children: [
    {
      id: 'root-0',
      module: 'public',
      collapsed: true,
      children: [
        {
          id: '0',
          module: 'favicon.ico',
          leaf: true,
        },
        {
          id: '1',
          module: 'index.html',
          leaf: true,
        },
        {
          id: '2',
          module: 'logo192.png',
          leaf: true,
        },
        {
          id: '3',
          module: 'logo512.png',
          leaf: true,
        },
        {
          id: '4',
          module: 'manifest.json',
          leaf: true,
        },
      ],
    },
    {
      id: 'root-1',
      module: 'src',
      collapsed: false,
      children: [
        {
          id: 'root-1672116118780',
          module: 'assets',
          collapsed: true,
          children: [
            {
              id: '1672116137363',
              leaf: true,
              module: 'index.css',
            },
            {
              id: '1672116145683',
              leaf: true,
              module: 'App.css',
            },
          ],
        },
        {
          id: 'root-1672117402287',
          module: 'components',
          collapsed: true,
          children: [
            {
              id: 'root-1672117431038',
              module: 'FileView',
              children: [
                {
                  id: 'root-1672117442370',
                  module: 'types',
                  collapsed: true,
                  children: [
                    {
                      id: '1672117448821',
                      leaf: true,
                      module: 'index.d.ts',
                    },
                  ],
                },
                {
                  id: '1672117459841',
                  leaf: true,
                  module: 'index.tsx',
                },
              ],
            },
            {
              id: '1672117410329',
              leaf: true,
              module: 'index.ts',
            },
          ],
        },
        {
          id: 'root-1672117486950',
          module: 'layouts',
          collapsed: true,
          children: [
            {
              id: '1672117494580',
              leaf: true,
              module: 'App.tsx',
            },
          ],
        },
        {
          id: 'root-1672117521983',
          module: 'utils',
          collapsed: true,
          children: [
            {
              id: '1672117533093',
              leaf: true,
              module: 'index.ts',
            },
          ],
        },
        {
          id: '7',
          module: 'index.tsx',
          leaf: true,
        },
        {
          id: '5',
          module: 'logo.svg',
          leaf: true,
        },
      ],
    },
    {
      id: '8',
      module: '.gitignore',
      leaf: true,
    },
    {
      id: '9',
      module: 'LICENSE.txt',
      leaf: true,
    },
    {
      id: '10',
      module: 'package-lock.json',
      leaf: true,
    },
    {
      id: '11',
      module: 'package.json',
      leaf: true,
    },
    {
      id: '12',
      module: 'README.md',
      leaf: true,
    },
  ],
};

export const getFileIcon = (fileName: string) => {
  const fileExtenssion = fileName.split('.').pop();

  switch (fileExtenssion) {
    case 'html':
      return SiHtml5;
    case 'css':
    case 'less':
    case 'scss':
      return SiCss3;
    case 'ts':
    case 'tsx':
      return SiTypescript;
    case 'js':
      return SiJavascript;
    case 'jsx':
      return SiReact;
    case 'git':
    case 'gitignore':
      return SiGit;
    case 'json':
      return VscJson;
    case 'md':
      return FaReadme;
    case 'png':
    case 'jpg':
    case 'jpeg':
      return BsFileEarmarkImage;
    case 'svg':
      return SiSvg;
    case 'txt':
      return BsFileEarmarkText;

    default:
      return FiFile;
  }
};

export const getFolderIcon = (value: boolean | undefined) => {
  switch (value) {
    case true:
      return AiFillFolder;
    case false:
      return AiFillFolderOpen;

    default:
      return AiFillFolderOpen;
  }
};
