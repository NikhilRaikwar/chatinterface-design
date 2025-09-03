import { 
  Plus,
  MessageSquare,
  Coffee,
  Settings,
  User,
  Menu
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "New Chat", url: "/", icon: Plus },
  { title: "Discover", url: "/discover", icon: MessageSquare },
  { title: "Spaces", url: "/spaces", icon: Coffee },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isExpanded, setIsExpanded] = useState(false);

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={`${isExpanded ? 'w-64' : 'w-16'} border-r border-border/20 bg-card transition-all duration-300 ease-in-out`}>
      <SidebarContent className="flex flex-col h-full py-4">
        {/* Toggle Button */}
        <div className="flex justify-center mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground hover:text-foreground hover:bg-accent h-10 w-10 p-0 rounded-lg transition-colors duration-200"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col space-y-4 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              end={item.url === "/"}
              className={({ isActive }) =>
                `flex items-center ${isExpanded ? 'justify-start px-4' : 'justify-center'} h-10 rounded-lg transition-all duration-200 group mx-2 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {isExpanded && (
                <span className="ml-3 text-sm font-medium transition-opacity duration-200">
                  {item.title}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* User Avatar at Bottom */}
        <div className={`flex ${isExpanded ? 'justify-start px-4' : 'justify-center'}`}>
          <div className="flex items-center">
            <Avatar className="h-10 w-10 border-2 border-border/30">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                AX
              </AvatarFallback>
            </Avatar>
            {isExpanded && (
              <span className="ml-3 text-sm font-medium text-foreground">
                Alex
              </span>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}