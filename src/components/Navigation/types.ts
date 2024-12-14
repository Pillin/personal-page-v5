export interface MenuItem {
  href: string
  label: string
}

export interface NavigationProps {
  menuItems: MenuItem[]
}

export interface MobileMenuProps {
  onClose: () => void;
  menuItems: MenuItem[]
}

export interface MenuItemProps {
  i?: number
  onClose?: () => void
}