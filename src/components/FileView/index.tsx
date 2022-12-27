// # Global import
import React from 'react'
// @ts-ignore
import Tree from 'react-ui-tree'

// # assets import
import { VscCollapseAll } from 'react-icons/vsc'
import { CgFileRemove, CgFolderRemove } from 'react-icons/cg'
import { FiFolderPlus, FiFilePlus, FiEdit } from 'react-icons/fi'
import { findDeep, mapDeep } from 'deepdash-es/standalone'

// # Local import
import { TreeType } from './types'
import { getFileIcon, getFolderIcon } from '../../utils'

function FileView({ initialFileTree }: { initialFileTree: TreeType }) {
  const [fileTree, setFileTree] = React.useState<TreeType>(initialFileTree)

  const renderToolbar = (isFolder: boolean, node: TreeType) => {
    const FileIcon = getFileIcon(node.module)
    const FolderIcon = getFolderIcon(node?.collapsed)

    return (
      <div className='toolbar'>
        <div className='toolbar-left'>
          {isFolder ? <FolderIcon /> : <FileIcon />} {node.module}
        </div>
        <div className='toolbar-view'>
          {isFolder && (
            <>
              <FiFolderPlus title='New Folder' onClick={() => addItemInTree('folder', node)} />
              <FiFilePlus title='New File' onClick={() => addItemInTree('file', node)} />
            </>
          )}
          <FiEdit
            onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
              handleContextClick(e, 'rename', node.id)
            }
          />
          {isFolder ? (
            <CgFolderRemove
              onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
                handleContextClick(e, 'delete', node.id)
              }
            />
          ) : (
            <CgFileRemove
              onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
                handleContextClick(e, 'delete', node.id)
              }
            />
          )}
          {node.id === 'root' && <VscCollapseAll onClick={handleCollaspseAll} />}
        </div>
      </div>
    )
  }

  const renderTreeNode = (node: TreeType) => {
    // eslint-disable-next-line no-prototype-builtins
    const isFolder = node.hasOwnProperty('children')

    return <>{renderToolbar(isFolder, node)}</>
  }

  const addItemInTree = (itemType: string, active: TreeType) => {
    const newItem =
      itemType === 'folder'
        ? {
            id: `root-${Date.now()}`,
            module: `New ${itemType}`,
            children: [],
            collapsed: false,
          }
        : { id: `${Date.now()}`, leaf: true, module: `New ${itemType}` }

    const newTree = mapDeep(fileTree, (item) => {
      const cloneItem = Object.assign({}, item)
      if (cloneItem) {
        if (cloneItem.id === active.id && cloneItem.children) {
          // folder
          cloneItem.children.push(newItem)
        }
      }
      return cloneItem
    })

    setFileTree(newTree[0])
  }

  const deleteFromTree = (o: TreeType, id: string | undefined) => {
    function getNode(a: { id: string; children: unknown[] }, i: number) {
      if (a.id === id) {
        index = i
        return true
      }
      if (Array.isArray(a.children) && a?.children?.some(getNode)) {
        if (index) {
          a?.children?.splice(index, 1)
          index = -1
        }
        return true
      }
    }

    let index = -1
    ;[o].some(getNode)
  }

  const handleContextClick = (
    _e: React.MouseEvent<SVGElement, MouseEvent>,
    action: string,
    id: string | undefined,
  ) => {
    switch (action) {
      case 'rename':
        // eslint-disable-next-line
        const renameObj: any = findDeep(fileTree, (item) => item.id === id, {
          childrenPath: ['children'],
        })
        const response = prompt('Please rename', renameObj?.value.module)

        if (response === '') {
          // return if empty string
          return
        }
        renameObj.value.module = response

        const temp = mapDeep(
          fileTree,
          (item) =>
            item.id === id
              ? {
                  ...item,
                  ...renameObj.value,
                }
              : item,
          { childrenPath: ['children'] },
        )

        setFileTree(temp[0])
        break
      case 'delete':
        deleteFromTree(fileTree, id)
        setFileTree(fileTree)
        break
      default:
    }
  }

  const handleChange = (event: TreeType) => {
    setFileTree({ ...event })
  }

  const handleCollaspseAll = () => {
    if (fileTree) {
      const newArr = fileTree?.children?.map((object) => {
        if (object.collapsed === false) {
          return { ...object, collapsed: true }
        }
        return object
      })
      setFileTree({ ...fileTree, children: newArr })
    }
  }

  return (
    <div className='tree'>
      <Tree paddingLeft={20} tree={fileTree} onChange={handleChange} renderNode={renderTreeNode} />
    </div>
  )
}

export default FileView
