import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  UseDisclosureProps,
} from '@chakra-ui/react'

interface DrawerProps {
  title: string
  children: (drawer: UseDisclosureProps) => React.ReactNode
}

export const MrDrawer = ({ title, children }: DrawerProps) => {
  const drawerHandlers = useDisclosure()

  return (
    <Box
      bg={'#c22088'}
      padding={'1rem'}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <MenuIcon
          color="#efefef"
          width={30}
          height={30}
          cursor="pointer"
          onClick={drawerHandlers.onOpen}
        />
      </Box>

      <Drawer
        placement="left"
        onClose={drawerHandlers.onClose}
        isOpen={drawerHandlers.isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            width={'100%'}
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            borderBottomWidth="1px"
          >
            <div>{title}</div>
            <div>
              <XIcon
                cursor="pointer"
                width={25}
                height={25}
                onClick={drawerHandlers.onClose}
              />
            </div>
          </DrawerHeader>
          <DrawerBody>
            { children(drawerHandlers) }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}