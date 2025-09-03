import { useState } from "react";
import { 
  Home, 
  Compass, 
  Layers3, 
  Bell, 
  User, 
  Crown, 
  Download,
  Globe,
  HelpCircle 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Discover", url: "/discover", icon: Compass },
  { title: "Spaces", url: "/spaces", icon: Layers3 },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Account", url: "/account", icon: User },
  { title: "Upgrade", url: "/upgrade", icon: Crown },
  { title: "Install", url: "/install", icon: Download },
];

const footerItems = [
  { title: "Language", url: "/language", icon: Globe },
  { title: "Help", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-primary font-medium border-r-2 border-primary shadow-[inset_4px_0_0_hsl(var(--primary))]" 
      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-sidebar-border bg-sidebar transition-all duration-300`}
    >
      <SidebarContent className="flex flex-col h-full">
        {/* Main Navigation */}
        <SidebarGroup className="flex-1 px-3 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"} 
                      className={({ isActive }) => 
                        `flex items-center w-full px-3 py-3 rounded-lg transition-all duration-200 nav-item-hover ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"} flex-shrink-0`} />
                      {!collapsed && (
                        <span className="text-sm font-medium truncate">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer Items */}
        <SidebarGroup className="px-3 py-4 border-t border-sidebar-border">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center w-full px-3 py-3 rounded-lg transition-all duration-200 nav-item-hover ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className={`h-4 w-4 ${collapsed ? "mx-auto" : "mr-3"} flex-shrink-0`} />
                      {!collapsed && (
                        <span className="text-xs text-muted-foreground truncate">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}